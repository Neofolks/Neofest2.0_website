// For Smooth Scrolling Of Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const rsvpButton = document.getElementById("rsvpButton");

rsvpButton.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.getElementById("RSVP");
    targetSection.scrollIntoView({ behavior: "smooth" });
});