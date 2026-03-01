// Smooth Scrolling
// T1: Validate href values against a safe pattern before passing to querySelector
const SAFE_ANCHOR = /^#[a-zA-Z0-9_-]+$/;

try {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (!SAFE_ANCHOR.test(targetId)) return; // reject unsafe values
            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = 70;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } catch (e) {
                // Silently handle errors
            }
        });
    });
} catch (e) {
    // Silently handle errors
}

// Active Link Highlighting
try {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section, header');

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            try {
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
            } catch (e) {
                // Silently handle errors
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);
} catch (e) {
    // Silently handle errors
}

// Scroll-triggered animations via Intersection Observer (Phase 1E)
// Replaces CSS animation-delay which fires on page load even if off-screen
try {
    const scrollTargets = document.querySelectorAll(
        '.experience-item, .skill-category, .education-item, ' +
        '.certifications, .passion-card, .recommendation-card'
    );

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        scrollTargets.forEach(function(el, index) {
            el.classList.add('scroll-reveal');
            // Stagger within groups of up to 7 (max items per section) — resets per section
            el.style.transitionDelay = (index % 7 * 0.08) + 's';
            revealObserver.observe(el);
        });
    } else {
        // Fallback: show all elements immediately if IntersectionObserver unsupported
        scrollTargets.forEach(function(el) {
            el.style.opacity = '1';
        });
    }
} catch (e) {
    // Silently handle errors
}
