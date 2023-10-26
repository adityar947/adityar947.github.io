// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

function scrollToSection(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const yOffset = -60; // Adjust the scroll offset as needed
    const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}
