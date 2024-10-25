
// hire me animation

const container = document.getElementById('Hireme');
const thankyou = document.getElementById('thankyou');
const hiremebtn = document.getElementById('hiremebtn');

thankyou.addEventListener('click', () => {
    container.classList.add("active");
});

hiremebtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// send form data

function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Construct email subject and body
    const subject = `Job Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    // Create a mailto link
    const mailtoLink = `mailto:rohanmpct21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the email client
    window.location.href = mailtoLink;
}