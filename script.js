function checkConsent(event) {
  const box = document.getElementById("consent-checkbox");

  if (!box.checked) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return false;
  }

  // Example destination: replace with your HealthSherpa URL
  if (event.target.id === "eligibility-btn") {
    window.location.href = "https://www.healthsherpa.com/?_agent_id=YOUR-ID";
  }
}
