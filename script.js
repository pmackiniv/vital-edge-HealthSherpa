function goToEligibility() {
  if (!document.getElementById("consent-checkbox").checked) {
    alert("Please confirm your consent before continuing.");
    return false;
  }
  window.location.href = "https://www.healthsherpa.com/?agent_id=patrick-mackin-iv&_agent_id=patrick-mackin-iv";
}

  // Example destination: replace with your HealthSherpa URL
  if (event.target.id === "eligibility-btn") {
    window.location.href = "https://www.healthsherpa.com/?_agent_id=YOUR-ID";
  }
}
