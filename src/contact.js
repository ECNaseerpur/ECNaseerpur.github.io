document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Hello! My name is ${name} (${email}). I have a message for you: ${message}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
});
