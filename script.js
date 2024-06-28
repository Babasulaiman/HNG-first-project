document.addEventListener('DOMContentLoaded', function () {
    const welcomeBtn = document.getElementById('welcomeBtn');
    const welcomeMsg = document.getElementById('welcomeMsg');
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    welcomeBtn.addEventListener('click', function () {
        welcomeMsg.style.display = 'block';
    });

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        formResponse.style.display = 'block';
        formResponse.innerHTML = `Thank you, ${name}, for your message: "${message}"`;

        contactForm.reset();
    });
});
