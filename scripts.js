// Smooth Scrolling — scoped to .nav-link elements to avoid intercepting skip-to-content
// T1: Validate href values against a safe pattern before passing to querySelector
const SAFE_ANCHOR = /^#[a-zA-Z0-9_-]+$/;

try {
    const links = document.querySelectorAll('.nav-link[href^="#"]');

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
                    // Move focus to the target for keyboard/screen reader users
                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus({ preventScroll: true });
                    // Restore original tab behaviour once focus leaves the element
                    targetElement.addEventListener('blur', function restoreTabindex() {
                        targetElement.removeAttribute('tabindex');
                        targetElement.removeEventListener('blur', restoreTabindex);
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
                    // Clear the stagger delay so future hover transitions aren't delayed
                    entry.target.style.animationDelay = '';
                    entry.target.style.transitionDelay = '';
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        scrollTargets.forEach(function(el, index) {
            el.classList.add('scroll-reveal');
            // Stagger in repeating groups of up to 7 items (index cycles every 7 across all targets)
            el.style.animationDelay = (index % 7 * 0.08) + 's';
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
