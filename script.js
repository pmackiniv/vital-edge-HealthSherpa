// Constant: your exact HealthSherpa URL
const HEALTHSHERPA_URL =
  "https://www.healthsherpa.com/?agent_id=patrick-mackin-iv&_agent_id=patrick-mackin-iv";

// Helper: check if consent checkbox is checked
function hasConsent() {
  const box = document.getElementById("consent-checkbox");
  return box && box.checked;
}

// Generic contact click handler (Chat, SMS, WhatsApp, etc.)
function onContactClick(event, channel) {
  if (!hasConsent()) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return;
  }

  // For now we just log the channel.
  // Later you can replace these with real links (sms:, tel:, https://wa.me/, etc.)
  console.log("Contact channel selected:", channel);
}

// Eligibility button handler
function onEligibilityClick(event) {
  if (!hasConsent()) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return;
  }

  // Redirect directly to HealthSherpa using your exact URL
  window.location.href = HEALTHSHERPA_URL;
}
