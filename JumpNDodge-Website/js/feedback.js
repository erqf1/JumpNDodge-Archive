// Sendet den Inhalt des Feedback-Formulars über EmailJS.
//
// Warum EmailJS: Die Seite ist rein statisch (GitHub Pages) und hat keinen
// eigenen Server. EmailJS nimmt die Nachricht clientseitig entgegen,
// leitet sie an die Zielmailbox weiter und liefert sie aus — die
// Zieladresse selbst wird NICHT hier im Code hinterlegt, sondern im
// EmailJS-Template auf emailjs.com konfiguriert. Dadurch taucht sie
// nirgends im Quellcode/Repo auf. Die Nachricht wird bei EmailJS nur so
// lange verarbeitet, wie für die Zustellung nötig; unter Account ->
// Email Templates -> History kann zusätzlich "Store submitted data"
// deaktiviert werden, damit dort ebenfalls nichts über die Zustellung
// hinaus liegen bleibt.
//
// Setup (einmalig, auf emailjs.com):
//   1. Kostenlosen Account anlegen, E-Mail-Service (z. B. das Hotmail-
//      Postfach) verbinden -> ergibt eine SERVICE_ID.
//   2. Ein Template anlegen, dessen "To email" auf die Zieladresse
//      gesetzt ist, mit den Variablen {{message}}, {{type}} und
//      {{email}} im Body (type = gewählte Kategorie, email = vom
//      Absender angegebene Rückantwort-Adresse oder ein Platzhalter,
//      falls leer gelassen) -> ergibt eine TEMPLATE_ID.
//   3. Den "Public Key" aus Account -> API Keys kopieren.
//   4. Die drei Werte unten eintragen.

const EMAILJS_PUBLIC_KEY = "PaOiARHHTqSL_wcOf";
const EMAILJS_SERVICE_ID = "service_oi7ztna";
const EMAILJS_TEMPLATE_ID = "template_yudfqfi";

// Cooldown zwischen zwei Sendungen. Ein echtes Pro-IP-Limit geht auf einer
// rein statischen Seite ohne eigenen Server nicht (das Frontend sieht keine
// IPs und kann nichts serverseitig speichern) — dieser Pro-Browser-Cooldown
// per localStorage ist die praktische Entsprechung dazu.
const RATE_LIMIT_MS = 60 * 1000;
const RATE_LIMIT_STORAGE_KEY = "jnd-feedback-last-sent";

const FEEDBACK_TYPE_KEYS = {
  feedback: "feedbackTypeFeedback",
  bug: "feedbackTypeBug",
  question: "feedbackTypeQuestion",
  contact: "feedbackTypeContact",
};

function ft(key) {
  return window.jndI18n ? window.jndI18n.t(key) : key;
}

const form = document.getElementById("feedback-form");
const statusEl = document.getElementById("feedback-status");
const submitBtn = form ? form.querySelector(".feedback__submit") : null;

let cooldownInterval = null;

function setStatus(text, state) {
  if (!statusEl) return;
  statusEl.textContent = text;
  if (state) {
    statusEl.setAttribute("data-state", state);
  } else {
    statusEl.removeAttribute("data-state");
  }
}

function msSinceLastSend() {
  let last = 0;
  try {
    last = Number(localStorage.getItem(RATE_LIMIT_STORAGE_KEY)) || 0;
  } catch (e) {
    /* localStorage nicht verfügbar, dann eben kein Cooldown */
  }
  return Date.now() - last;
}

function rememberSendTime() {
  try {
    localStorage.setItem(RATE_LIMIT_STORAGE_KEY, String(Date.now()));
  } catch (e) {
    /* egal, dann funktioniert nur der Cooldown nicht */
  }
}

function rateLimitMessage(remainingMs) {
  const seconds = Math.max(1, Math.ceil(remainingMs / 1000));
  return ft("feedbackRateLimited").replace("{n}", String(seconds));
}

function startCooldownUI() {
  if (cooldownInterval) clearInterval(cooldownInterval);

  const tick = () => {
    const remaining = RATE_LIMIT_MS - msSinceLastSend();
    if (remaining <= 0) {
      clearInterval(cooldownInterval);
      cooldownInterval = null;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = ft("feedbackSubmit");
      }
      setStatus("", null);
      return;
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = ft("feedbackSubmit");
    }
    setStatus(rateLimitMessage(remaining), "error");
  };

  tick();
  cooldownInterval = setInterval(tick, 1000);
}

if (form && window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

// Falls die Seite kurz nach dem letzten Absenden neu geladen wird, direkt
// den laufenden Cooldown anzeigen statt erst nach einem fehlgeschlagenen Klick.
if (msSinceLastSend() < RATE_LIMIT_MS) {
  startCooldownUI();
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const remaining = RATE_LIMIT_MS - msSinceLastSend();
    if (remaining > 0) {
      startCooldownUI();
      return;
    }

    setStatus("", null);

    const messageEl = document.getElementById("feedback-message");
    const typeEl = document.getElementById("feedback-type");
    const emailEl = document.getElementById("feedback-email");
    const honeypotEl = document.getElementById("feedback-website");

    const message = (messageEl.value || "").trim();
    const type = typeEl ? typeEl.value : "";
    const email = (emailEl && emailEl.value ? emailEl.value : "").trim();

    // Bots ausfüllen üblicherweise auch versteckte Felder — stillschweigend abbrechen.
    if (honeypotEl && honeypotEl.value) {
      messageEl.value = "";
      setStatus(ft("feedbackSuccess"), "success");
      return;
    }

    if (!message) {
      setStatus(ft("feedbackEmptyError"), "error");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = ft("feedbackSubmitSending");
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        message,
        type: type ? ft(FEEDBACK_TYPE_KEYS[type] || "") : "",
        email: email || ft("feedbackNoEmail"),
      });

      rememberSendTime();
      messageEl.value = "";
      if (emailEl) emailEl.value = "";
      setStatus(ft("feedbackSuccess"), "success");
      if (submitBtn) submitBtn.textContent = ft("feedbackSubmit");
      startCooldownUI();
    } catch (err) {
      console.error("Feedback could not be sent:", err);
      setStatus(ft("feedbackError"), "error");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = ft("feedbackSubmit");
      }
    }
  });
}

document.addEventListener("jnd:langchange", () => {
  if (submitBtn && !submitBtn.disabled) {
    submitBtn.textContent = ft("feedbackSubmit");
  }
  if (msSinceLastSend() < RATE_LIMIT_MS) {
    setStatus(rateLimitMessage(RATE_LIMIT_MS - msSinceLastSend()), "error");
  }
});
