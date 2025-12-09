function onContactClick(event, method) {
  if (!hasConsent()) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return;
  }

  let targetUrl = null;

  switch (method) {
    case 'email':
      targetUrl = "mailto:pmackiniv27@icloud.com";
      break;
    case 'sms':
      targetUrl = "sms:+13522148879";
      break;
    case 'whatsapp':
      targetUrl = "https://wa.me/13522148879";
      break;
    case 'call':
      targetUrl = "tel:+13522148879";
      break;
    default:
      console.warn("Unknown contact method:", method);
      return;
  }

  console.log("Redirecting to:", targetUrl);
  window.location.assign(targetUrl);
}