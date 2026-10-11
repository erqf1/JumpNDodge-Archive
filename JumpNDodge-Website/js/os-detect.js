// Erkennt grob das Betriebssystem des Besuchers anhand des User-Agents
// und hebt den passenden Download-Button optisch hervor. Rein kosmetisch —
// beide Buttons bleiben immer klickbar, das ist nur eine Hilfestellung.

function detectOS() {
  const ua = navigator.userAgent || navigator.vendor || "";

  if (/Windows/i.test(ua)) return "windows";
  // Android und ChromeOS enthalten teils "Linux" im UA — die explizit ausschließen.
  if (/Linux/i.test(ua) && !/Android/i.test(ua) && !/CrOS/i.test(ua)) return "linux";

  return null;
}

const detectedOS = detectOS();

if (detectedOS) {
  const targetBtn = document.querySelector(`.dl-btn--${detectedOS}`);
  if (targetBtn) {
    targetBtn.classList.add("dl-btn--suggested");
  }
}
