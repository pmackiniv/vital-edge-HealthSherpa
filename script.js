// script.js

const HEALTHSHERPA_URL = "https://www.healthsherpa.com/?_agent_id=patrick-mackin-iv";

function hasConsent() {
  const box = document.getElementById("consent-checkbox");
  return box && box.checked;
}

document.addEventListener("DOMContentLoaded", () => {
  // Consent gating for contact links
  const contactLinks = document.querySelectorAll(".contact-link");
  contactLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (!hasConsent()) {
        e.preventDefault();
        alert("Please confirm your consent before continuing.");
      }
      // If consent is checked, allow the browser to handle the link naturally
    });
  });

  // Eligibility button
  const eligibilityBtn = document.getElementById("eligibility-btn");
  if (eligibilityBtn) {
    eligibilityBtn.addEventListener("click", (e) => {
      if (!hasConsent()) {
        e.preventDefault();
        alert("Please confirm your consent before continuing.");
        return;
      }
      window.location.href = HEALTHSHERPA_URL;
    });
  }
});