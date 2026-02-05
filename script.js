// CHANGE THIS NUMBER TO OWNER'S WHATSAPP NUMBER
const whatsappNumber = "27700000000";

// Floating button
document.querySelectorAll("#whatsappBtn").forEach(btn => {
  btn.href = `https://wa.me/${whatsappNumber}`;
});

// Consultation form
const form = document.getElementById("consultForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const message = document.getElementById("message").value;

    const text = `Consultation Request:%0AName: ${name}%0AContact/ID: ${contact}%0ADetails: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  });
                                                  }
