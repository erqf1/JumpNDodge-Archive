// Einfache Sprachumschaltung (EN Standard / DE) ohne Framework.
// Übersetzte Texte werden über [data-i18n="key"] gesetzt.
// Andere Skripte (main.js) können über window.jndI18n.t(key) und
// das "jnd:langchange"-Event auf die aktuelle Sprache reagieren.

const translations = {
  en: {
    pageTitle: "JumpNDodge — Download",
    pageDescription: "Download JumpNDodge for Windows and Linux, or browse the archive of older versions and portable builds.",

    navDownload: "Download",
    navFeatures: "Features",
    navRequirements: "Requirements",
    navFaq: "FAQ",
    navArchive: "Archive",
    navFeedback: "Feedback",

    heroEyebrow: "Pygame · Arcade Survival",
    heroTagline: "Timing is everything. Jump it, dodge it, survive.",
    dlWindowsLabel: "Download for Windows",
    dlLinuxLabel: "Download for Linux",
    dlRecommendedBadge: "Recommended for you",
    heroHintBefore: "Portable builds and older versions live in the ",
    heroHintLink: "Archive",
    heroHintAfter: " below.",

    featuresTitle: "Features",
    featuresDesc: "Everything JumpNDodge has to offer, and everything still to come.",

    featGameplayLabel: "Core Gameplay",
    featGameplayHeading: "Jump. Dodge. Survive.",
    featGameplayDesc: "JumpNDodge is a fast-paced survival game where every second counts. Dodge obstacles, collect power-ups and beat your personal best.",

    featShopLabel: "Shop",
    featShopHeading: "Earn Coins. Unlock Rewards.",
    featShopDesc: "Use your hard-earned Coins to roll for powerful items and rare rewards. Every roll could contain something legendary.",

    featCosmeticsLabel: "Cosmetics",
    featCosmeticsHeading: "Make Your Run Yours.",
    featCosmeticsDesc: "Unlock unique trails and player cosmetics to customize your character and stand out from the crowd.",

    featStatsLabel: "Statistics",
    featStatsHeading: "Track Your Progress.",
    featStatsDesc: "See your total playtime, rounds, jumps, deaths, Coins, 1-Ups and more. Find out how far you've really come.",

    featHighscoresLabel: "Highscores",
    featHighscoresHeading: "Beat Your Best.",
    featHighscoresDesc: "Compete against your own records across different difficulties and push your score higher every run.",

    featDifficultyLabel: "Difficulties",
    featDifficultyHeading: "How far can you go?",
    featDifficultyDesc: "Choose your challenge — from Easy all the way to Hell, with Dynamic difficulty changing the challenge as you play.",

    featPowersLabel: "Powers",
    featPowersHeading: "Change the Game.",
    featPowersDesc: "Collect and equip different Powers to give yourself an advantage and completely change how you play.",

    featDailyLabel: "Daily Rewards",
    featDailyHeading: "Come Back Every Day.",
    featDailyDesc: "Claim your daily reward and earn Coins with bonus rarity rewards. Keep coming back to build up your balance.",

    featCoopLabel: "2-Player",
    featCoopHeading: "Play Together. Fight Together.",
    featCoopDesc: "Play locally with two players — work together in Co-Op or compete in VS, where only one player can survive.",

    featProfilesLabel: "Profiles",
    featProfilesHeading: "Your Game. Your Progress.",
    featProfilesDesc: "Create separate profiles with their own stats, achievements, highscores, settings, Powers and Cosmetics.",

    featMusicLabel: "Custom Music",
    featMusicHeading: "Play It Your Way.",
    featMusicDesc: "Choose between different in-game music tracks and preview them before selecting your favorite.",

    featCustomizationLabel: "Customization",
    featCustomizationHeading: "Make It Feel Like Yours.",
    featCustomizationDesc: "Customize your experience with Dark Mode, fullscreen, sound settings, controls and multiple languages.",

    featMoreLabel: "More to Come",
    featMoreHeading: "This is just the beginning.",
    featMoreDesc: "JumpNDodge will keep getting new updates, features, cosmetics, challenges and more. The game is constantly growing — and there's much more to come.",

    reqTitle: "System Requirements",
    reqDesc: "JumpNDodge is a lightweight 2D game — most machines from the last decade can run it comfortably.",
    reqMinLabel: "Minimum",
    reqRecLabel: "Recommended",
    reqOs: "OS",
    reqCpu: "Processor",
    reqRam: "Memory",
    reqGpu: "Graphics",
    reqStorage: "Storage",
    reqMinOs: "Windows 10, or a common Linux distro (glibc 2.31+)",
    reqMinCpu: "Dual-core, 2.0 GHz",
    reqMinRam: "2 GB RAM",
    reqMinGpu: "Integrated graphics",
    reqMinStorage: "200 MB available space",
    reqRecOs: "Windows 10/11, or any common Linux distro",
    reqRecCpu: "Quad-core, 3.0 GHz",
    reqRecRam: "4 GB RAM",
    reqRecGpu: "Integrated graphics",
    reqRecStorage: "500 MB available space (SSD)",

    faqTitle: "FAQ",
    faqDesc: "Answers to the questions that get asked most.",
    faqQ1: "Is JumpNDodge free?",
    faqA1: "Yes, completely free — no ads, no paywalls, no hidden costs.",
    faqQ2: "Which platforms are supported?",
    faqA2: "Windows and Linux, via the installers above. There's currently no native macOS build.",
    faqQ3: "Can I play with a friend?",
    faqA3: "Yes — locally, either in Co-Op or in the competitive VS mode.",
    faqQ4: "Where do older versions or the portable build live?",
    faqA4: "All of that is in the Archive section below, downloadable directly without going through GitHub.",
    faqQ5: "How do I report a bug or suggest a feature?",
    faqA5: "Use the Feedback & Bugs field further down the page — it goes straight to the developer.",
    faqQ6: "Will JumpNDodge get more updates?",
    faqA6: "Yes. The game is actively developed, with new features, cosmetics and challenges planned.",

    archiveTitle: "Archive",
    archiveDesc: "Every previous release including the portable version — right here, no detour through GitHub.",
    archiveLoading: "Loading releases…",
    archiveErrorBefore: "The archive couldn't be loaded right now. In the meantime you can view it directly on ",
    archiveErrorLink: "GitHub",
    archiveErrorAfter: ".",
    archiveEmpty: "No releases in the archive yet.",
    archiveShowMore: "Show all releases",
    archiveShowLess: "Show fewer releases",
    archiveLatestBadge: "Latest",
    archiveSearchPlaceholder: "Search releases…",
    archiveNoResults: "No releases match your search.",
    releaseNoAssets: "No files in this release.",
    portableSuffix: " (Portable)",
    downloadsWord: "downloads",

    footerBefore: "JumpNDodge — Source code & releases on ",
    footerAfter: ".",
    dateLocale: "en-GB",

    feedbackTitle: "Feedback & Bugs",
    feedbackDesc: "Got an idea or found something broken? Send it straight over.",
    feedbackTypeLabel: "Type",
    feedbackTypeFeedback: "Feedback / Suggestion",
    feedbackTypeBug: "Bug Report",
    feedbackTypeQuestion: "Question",
    feedbackTypeContact: "Contact",
    feedbackEmailLabel: "Email (optional)",
    feedbackEmailPlaceholder: "For a reply, if you'd like one",
    feedbackNoEmail: "No email provided",
    feedbackMessageLabel: "Message",
    feedbackMessagePlaceholder: "Describe your suggestion or bug…",
    feedbackSubmit: "Send",
    feedbackSubmitSending: "Sending…",
    feedbackSuccess: "Thanks — got it!",
    feedbackError: "Something went wrong. Please try again in a moment.",
    feedbackEmptyError: "Please write a message first.",
    feedbackRateLimited: "Please wait {n}s before sending another message.",
  },
  de: {
    pageTitle: "JumpNDodge — Download",
    pageDescription: "Lade JumpNDodge für Windows und Linux herunter, oder durchsuche das Archiv älterer Versionen und portabler Builds.",

    navDownload: "Download",
    navFeatures: "Features",
    navRequirements: "Anforderungen",
    navFaq: "FAQ",
    navArchive: "Archiv",
    navFeedback: "Feedback",

    heroEyebrow: "Pygame · Arcade-Survival",
    heroTagline: "Timing ist alles. Spring drüber, weich aus, überlebe.",
    dlWindowsLabel: "Download für Windows",
    dlLinuxLabel: "Download für Linux",
    dlRecommendedBadge: "Für dich empfohlen",
    heroHintBefore: "Portable Builds und ältere Versionen gibt's im ",
    heroHintLink: "Archiv",
    heroHintAfter: " weiter unten.",

    featuresTitle: "Features",
    featuresDesc: "Alles, was JumpNDodge zu bieten hat — und alles, was noch kommt.",

    featGameplayLabel: "Kernspiel",
    featGameplayHeading: "Springen. Ausweichen. Überleben.",
    featGameplayDesc: "JumpNDodge ist ein rasantes Survival-Spiel, bei dem jede Sekunde zählt. Weiche Hindernissen aus, sammle Power-Ups und schlage deinen persönlichen Rekord.",

    featShopLabel: "Shop",
    featShopHeading: "Coins verdienen. Belohnungen freischalten.",
    featShopDesc: "Nutze deine hart verdienten Coins, um mächtige Items und seltene Belohnungen zu erlosen. Jeder Roll kann etwas Legendäres enthalten.",

    featCosmeticsLabel: "Kosmetik",
    featCosmeticsHeading: "Mach deinen Run zu deinem.",
    featCosmeticsDesc: "Schalte einzigartige Trails und Skins frei, um deinen Charakter individuell zu gestalten und aus der Masse herauszustechen.",

    featStatsLabel: "Statistiken",
    featStatsHeading: "Verfolge deinen Fortschritt.",
    featStatsDesc: "Sieh deine gesamte Spielzeit, Runden, Sprünge, Tode, Coins, 1-Ups und mehr. Finde heraus, wie weit du wirklich gekommen bist.",

    featHighscoresLabel: "Highscores",
    featHighscoresHeading: "Schlage deinen Rekord.",
    featHighscoresDesc: "Tritt gegen deine eigenen Rekorde in verschiedenen Schwierigkeitsgraden an und steigere deinen Highscore mit jedem Run.",

    featDifficultyLabel: "Schwierigkeitsgrade",
    featDifficultyHeading: "Wie weit kommst du?",
    featDifficultyDesc: "Wähle deine Herausforderung — von Easy bis Hell, mit Dynamic als Schwierigkeitsgrad, der sich während des Spiels anpasst.",

    featPowersLabel: "Powers",
    featPowersHeading: "Verändere das Spiel.",
    featPowersDesc: "Sammle und rüste verschiedene Powers aus, um dir einen Vorteil zu verschaffen und deine Spielweise komplett zu verändern.",

    featDailyLabel: "Tägliche Belohnungen",
    featDailyHeading: "Komm jeden Tag wieder.",
    featDailyDesc: "Hol dir deine tägliche Belohnung und verdiene Coins mit Bonus-Raritäten. Komm immer wieder, um dein Guthaben aufzubauen.",

    featCoopLabel: "2-Spieler",
    featCoopHeading: "Zusammen spielen. Zusammen kämpfen.",
    featCoopDesc: "Spiele lokal zu zweit — arbeite im Koop zusammen oder tretet im VS-Modus gegeneinander an, wo nur einer überleben kann.",

    featProfilesLabel: "Profile",
    featProfilesHeading: "Dein Spiel. Dein Fortschritt.",
    featProfilesDesc: "Erstelle separate Profile mit eigenen Statistiken, Erfolgen, Highscores, Einstellungen, Powers und Kosmetik.",

    featMusicLabel: "Eigene Musik",
    featMusicHeading: "Spiel es auf deine Art.",
    featMusicDesc: "Wähle zwischen verschiedenen Musiktiteln im Spiel und höre vorher rein, bevor du deinen Favoriten auswählst.",

    featCustomizationLabel: "Anpassung",
    featCustomizationHeading: "Mach es zu deinem Erlebnis.",
    featCustomizationDesc: "Passe dein Erlebnis an mit Dark Mode, Vollbild, Sound-Einstellungen, Steuerung und mehreren Sprachen.",

    featMoreLabel: "Mehr kommt noch",
    featMoreHeading: "Das ist erst der Anfang.",
    featMoreDesc: "JumpNDodge bekommt weiterhin neue Updates, Features, Kosmetik, Challenges und mehr. Das Spiel wächst ständig — und es kommt noch viel mehr.",

    reqTitle: "Systemanforderungen",
    reqDesc: "JumpNDodge ist ein leichtgewichtiges 2D-Spiel — die meisten Rechner der letzten zehn Jahre laufen problemlos.",
    reqMinLabel: "Minimum",
    reqRecLabel: "Empfohlen",
    reqOs: "Betriebssystem",
    reqCpu: "Prozessor",
    reqRam: "Arbeitsspeicher",
    reqGpu: "Grafik",
    reqStorage: "Speicherplatz",
    reqMinOs: "Windows 10, oder eine gängige Linux-Distribution (glibc 2.31+)",
    reqMinCpu: "Dual-Core, 2.0 GHz",
    reqMinRam: "2 GB RAM",
    reqMinGpu: "Integrierte Grafik",
    reqMinStorage: "200 MB freier Speicherplatz",
    reqRecOs: "Windows 10/11, oder eine gängige Linux-Distribution",
    reqRecCpu: "Quad-Core, 3.0 GHz",
    reqRecRam: "4 GB RAM",
    reqRecGpu: "Integrierte Grafik",
    reqRecStorage: "500 MB freier Speicherplatz (SSD)",

    faqTitle: "FAQ",
    faqDesc: "Antworten auf die Fragen, die am häufigsten gestellt werden.",
    faqQ1: "Ist JumpNDodge kostenlos?",
    faqA1: "Ja, komplett kostenlos — keine Werbung, keine Paywall, keine versteckten Kosten.",
    faqQ2: "Welche Plattformen werden unterstützt?",
    faqA2: "Windows und Linux, über die Installer oben. Aktuell gibt es keinen nativen macOS-Build.",
    faqQ3: "Kann ich mit einem Freund spielen?",
    faqA3: "Ja — lokal, entweder im Koop oder im kompetitiven VS-Modus.",
    faqQ4: "Wo finde ich ältere Versionen oder den portablen Build?",
    faqA4: "Alles davon findest du im Archiv weiter unten, direkt herunterladbar ohne Umweg über GitHub.",
    faqQ5: "Wie melde ich einen Bug oder schlage ein Feature vor?",
    faqA5: "Nutze das Feld „Feedback & Bugs” weiter unten auf der Seite — es geht direkt an den Entwickler.",
    faqQ6: "Bekommt JumpNDodge weitere Updates?",
    faqA6: "Ja. Das Spiel wird aktiv weiterentwickelt, mit geplanten neuen Features, Kosmetik und Challenges.",

    archiveTitle: "Archiv",
    archiveDesc: "Alle bisherigen Releases samt portabler Version — direkt hier, kein Umweg über GitHub.",
    archiveLoading: "Lade Releases…",
    archiveErrorBefore: "Das Archiv konnte gerade nicht geladen werden. Du kannst es in der Zwischenzeit direkt auf ",
    archiveErrorLink: "GitHub",
    archiveErrorAfter: " ansehen.",
    archiveEmpty: "Noch keine Releases im Archiv.",
    archiveShowMore: "Alle Releases anzeigen",
    archiveShowLess: "Weniger Releases anzeigen",
    archiveLatestBadge: "Neueste",
    archiveSearchPlaceholder: "Releases durchsuchen…",
    archiveNoResults: "Keine Releases gefunden.",
    releaseNoAssets: "Keine Dateien in diesem Release.",
    portableSuffix: " (Portable)",
    downloadsWord: "Downloads",

    footerBefore: "JumpNDodge — Quellcode & Releases auf ",
    footerAfter: ".",
    dateLocale: "de-DE",

    feedbackTitle: "Feedback & Bugs",
    feedbackDesc: "Eine Idee oder etwas kaputt gefunden? Schick es direkt rüber.",
    feedbackTypeLabel: "Art",
    feedbackTypeFeedback: "Feedback / Vorschlag",
    feedbackTypeBug: "Bug-Meldung",
    feedbackTypeQuestion: "Frage",
    feedbackTypeContact: "Kontakt",
    feedbackEmailLabel: "E-Mail (optional)",
    feedbackEmailPlaceholder: "Für eine Antwort, falls gewünscht",
    feedbackNoEmail: "Keine E-Mail angegeben",
    feedbackMessageLabel: "Nachricht",
    feedbackMessagePlaceholder: "Beschreibe deinen Vorschlag oder Bug…",
    feedbackSubmit: "Senden",
    feedbackSubmitSending: "Wird gesendet…",
    feedbackSuccess: "Danke — angekommen!",
    feedbackError: "Etwas ist schiefgelaufen. Bitte versuch es gleich nochmal.",
    feedbackEmptyError: "Bitte schreib zuerst eine Nachricht.",
    feedbackRateLimited: "Bitte warte noch {n}s, bevor du die nächste Nachricht schickst.",
  },
};

const DEFAULT_LANG = "en";
let currentLang = DEFAULT_LANG;

try {
  const saved = localStorage.getItem("jnd-lang");
  if (saved && translations[saved]) currentLang = saved;
} catch (e) {
  /* localStorage nicht verfügbar, egal */
}

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ?? key;
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (el.hasAttribute("data-i18n-attr")) {
      el.setAttribute(el.getAttribute("data-i18n-attr"), value);
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.setAttribute("aria-pressed", String(isActive));
    btn.classList.toggle("is-active", isActive);
  });

  try {
    localStorage.setItem("jnd-lang", lang);
  } catch (e) {
    /* ignore */
  }

  document.dispatchEvent(new CustomEvent("jnd:langchange", { detail: { lang } }));
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

window.jndI18n = {
  t,
  get lang() {
    return currentLang;
  },
  apply: applyLanguage,
};

applyLanguage(currentLang);
