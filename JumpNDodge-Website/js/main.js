// Lädt die Releases aus JumpNDodge-Archive direkt über die GitHub API
// und zeigt sie inklusive Downloadlinks auf der Seite an, ohne den
// Besucher zu GitHub weiterzuleiten. Die UI-Texte folgen der aktuell
// über js/i18n.js gewählten Sprache (window.jndI18n).

const ARCHIVE_REPO = "erqf1/JumpNDodge-Archive";
const ARCHIVE_API = `https://api.github.com/repos/${ARCHIVE_REPO}/releases`;
const ARCHIVE_FALLBACK_URL = `https://github.com/${ARCHIVE_REPO}/releases`;

const listEl = document.getElementById("archive-list");
const toggleEl = document.getElementById("archive-toggle");
const searchEl = document.getElementById("archive-search");

const ARCHIVE_COLLAPSED_COUNT = 3;

// Ergebnis der letzten erfolgreichen Abfrage, damit ein Sprachwechsel
// nur neu rendert statt die API erneut anzufragen.
let cachedReleases = null;
let lastFetchFailed = false;
let archiveExpanded = false;
let searchQuery = "";

function t(key) {
  return window.jndI18n ? window.jndI18n.t(key) : key;
}

function getCurrentLang() {
  return window.jndI18n ? window.jndI18n.lang : "en";
}

function formatBytes(bytes) {
  if (!bytes && bytes !== 0) return "";
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let value = bytes;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i++;
  }
  return `${value.toFixed(value < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
}

function formatDate(iso) {
  const d = new Date(iso);
  const locale = window.jndI18n ? t("dateLocale") : "en-GB";
  return d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" });
}

function assetIsPortable(name) {
  return /portable/i.test(name);
}

function renderAsset(asset) {
  const a = document.createElement("a");
  a.className = "asset-link";
  a.href = asset.browser_download_url;
  a.setAttribute("download", "");

  const nameSpan = document.createElement("span");
  nameSpan.className = "asset-link__name";
  nameSpan.textContent = asset.name + (assetIsPortable(asset.name) ? t("portableSuffix") : "");

  const metaSpan = document.createElement("span");
  metaSpan.className = "asset-link__meta";
  metaSpan.textContent = formatBytes(asset.size);

  a.append(nameSpan, metaSpan);
  return a;
}

function renderRelease(release, isLatest) {
  const card = document.createElement("article");
  card.className = "release-card";

  const head = document.createElement("div");
  head.className = "release-card__head";

  const tag = document.createElement("span");
  tag.className = "release-card__tag";
  tag.textContent = release.tag_name;

  head.append(tag);

  if (isLatest) {
    const badge = document.createElement("span");
    badge.className = "release-card__badge";
    badge.textContent = t("archiveLatestBadge");
    head.append(badge);
  }

  const date = document.createElement("span");
  date.className = "release-card__date";
  date.textContent = formatDate(release.published_at || release.created_at);

  head.append(date);
  card.append(head);

  if (release.name && release.name !== release.tag_name) {
    const name = document.createElement("p");
    name.className = "release-card__name";
    name.textContent = release.name;
    card.append(name);
  } else {
    const spacer = document.createElement("div");
    spacer.style.marginBottom = "10px";
    card.append(spacer);
  }

  const assetsWrap = document.createElement("div");
  assetsWrap.className = "release-card__assets";

  if (release.assets && release.assets.length > 0) {
    release.assets.forEach((asset) => assetsWrap.append(renderAsset(asset)));
  } else {
    const empty = document.createElement("p");
    empty.className = "archive__empty";
    empty.textContent = t("releaseNoAssets");
    assetsWrap.append(empty);
  }

  card.append(assetsWrap);
  return card;
}

function matchesSearch(release, query) {
  if (!query) return true;
  const haystack = `${release.tag_name || ""} ${release.name || ""}`.toLowerCase();
  return haystack.includes(query);
}

function updateToggle(visibleCount) {
  if (searchQuery || !cachedReleases || cachedReleases.length <= ARCHIVE_COLLAPSED_COUNT) {
    toggleEl.hidden = true;
    return;
  }

  if (visibleCount <= ARCHIVE_COLLAPSED_COUNT) {
    toggleEl.hidden = true;
    return;
  }

  toggleEl.hidden = false;
  toggleEl.textContent = archiveExpanded ? t("archiveShowLess") : t("archiveShowMore");
}

function renderReleaseList() {
  listEl.innerHTML = "";

  if (!cachedReleases || cachedReleases.length === 0) {
    const empty = document.createElement("p");
    empty.className = "archive__empty";
    empty.textContent = t("archiveEmpty");
    listEl.append(empty);
    toggleEl.hidden = true;
    return;
  }

  const query = searchQuery.trim().toLowerCase();
  const filtered = query ? cachedReleases.filter((r) => matchesSearch(r, query)) : cachedReleases;

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "archive__empty";
    empty.textContent = t("archiveNoResults");
    listEl.append(empty);
    toggleEl.hidden = true;
    return;
  }

  const releasesToShow = query || archiveExpanded
    ? filtered
    : filtered.slice(0, ARCHIVE_COLLAPSED_COUNT);

  releasesToShow.forEach((release) => listEl.append(renderRelease(release, release === cachedReleases[0])));
  updateToggle(filtered.length);
}

function renderError() {
  listEl.innerHTML = "";
  const err = document.createElement("div");
  err.className = "archive__error";
  err.innerHTML = `${t("archiveErrorBefore")}<a href="${ARCHIVE_FALLBACK_URL}" target="_blank" rel="noopener">${t("archiveErrorLink")}</a>${t("archiveErrorAfter")}`;
  listEl.append(err);
  toggleEl.hidden = true;
}

async function loadArchive() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const res = await fetch(ARCHIVE_API, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);

    const releases = await res.json();
    cachedReleases = Array.isArray(releases) ? releases.filter((r) => !r.draft) : [];
    lastFetchFailed = false;
    renderReleaseList();
  } catch (err) {
    clearTimeout(timeout);
    console.error("Archive could not be loaded:", err);
    lastFetchFailed = true;
    renderError();
  }
}

toggleEl.addEventListener("click", () => {
  archiveExpanded = !archiveExpanded;
  renderReleaseList();
});

searchEl.addEventListener("input", () => {
  searchQuery = searchEl.value;
  renderReleaseList();
});

// Bei Sprachwechsel neu rendern, ohne erneut zu fetchen.
document.addEventListener("jnd:langchange", () => {
  if (lastFetchFailed) {
    renderError();
  } else if (cachedReleases !== null) {
    renderReleaseList();
  }
});

loadArchive();
