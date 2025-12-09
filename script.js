const HEALTHSHERPA_URL = "https://www.healthsherpa.com/?_agent_id=patrick-mackin-iv";

function hasConsent() {
  const box = document.getElementById("consent-checkbox");
  return box && box.checked;
}

function onContactClick(event, method) {
  if (!hasConsent()) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return;
  }

  switch (method) {
    case 'email':
      window.location.href = "mailto:pmackiniv27@icloud.com";
      break;
    case 'sms':
      window.location.href = "sms:+13522148879";
      break;
    case 'whatsapp':
      window.location.href = "https://wa.me/13522148879";
      break;
    case 'call':
      window.location.href = "tel:+13522148879";
      break;
    default:
      alert("Contact method clicked: " + method);
  }
}

function onEligibilityClick(event) {
  if (!hasConsent()) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return;
  }
  window.location.href = HEALTHSHERPA_URL;
}
