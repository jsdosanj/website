// Smooth Scrolling
// T1: Validate href values against a safe pattern before passing to querySelector
const SAFE_ANCHOR = /^#[a-zA-Z0-9_-]+$/;

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!SAFE_ANCHOR.test(targetId)) return; // reject unsafe values
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = 70;
            const targetPosition = targetElement.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Link Highlighting
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section, header');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`a[href="#${sectionId}"]`);

        if (link) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
