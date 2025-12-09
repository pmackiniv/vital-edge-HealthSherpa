const HEALTHSHERPA_URL = "https://www.healthsherpa.com/?_agent_id=patrick-mackin-iv";

function hasConsent() {
  const box = document.getElementById("consent-checkbox");
  return box && box.checked;
}

// Consent-gated handler for contact links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".contact-link");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      if (!hasConsent()) {
        e.preventDefault();
        alert("Please confirm your consent before continuing.");
      }
      // If consent is checked, allow the default link behavior (mailto, sms, tel, https)
    });
  });
});

function onEligibilityClick(event) {
  if (!hasConsent()) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return;
  }
  window.location.href = HEALTHSHERPA_URL;
}