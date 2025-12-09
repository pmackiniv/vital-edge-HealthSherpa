const HEALTHSHERPA_URL = "https://www.healthsherpa.com/?agent_id=patrick-mackin-iv&_agent_id=patrick-mackin-iv";

function hasConsent() {
  const box = document.getElementById("consent-checkbox");
  return box && box.checked;
}

function onEligibilityClick(event) {
  if (!hasConsent()) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return;
  }
  window.location.href = HEALTHSHERPA_URL;
}

function onContactClick(event, channel) {
  if (!hasConsent()) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return;
  }
  // You can fill these out later for real chat / SMS / WhatsApp behavior
  alert("Contact via: " + channel);
}