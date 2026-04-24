/* ============================================
   SGEN — COMMON JAVASCRIPT
   Init icons, mobile menu, sticky header, reveal, counters, accordion
   ============================================ */

(function () {
    'use strict';

    const initAll = () => {
        // ----- Lucide icons -----
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // ----- Mobile menu -----
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });
        }

        // ----- Header sticky fluid -----
        const header = document.getElementById('main-header');
        if (header) {
            const onScroll = () => {
                if (window.scrollY > 50) {
                    header.classList.add('bg-white/80', 'backdrop-blur-2xl', 'shadow-lg');
                    header.classList.remove('glass-ultra');
                } else {
                    header.classList.remove('bg-white/80', 'backdrop-blur-2xl', 'shadow-lg');
                    header.classList.add('glass-ultra');
                }
            };
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        // ----- Scroll reveal avec fallback robuste -----
        const revealElements = document.querySelectorAll('.reveal');
        const activateAll = () => {
            revealElements.forEach(el => el.classList.add('active'));
        };

        if ('IntersectionObserver' in window && revealElements.length) {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.01, rootMargin: '0px 0px 100px 0px' });

            revealElements.forEach(el => revealObserver.observe(el));

            // Fallback 1 : si dans viewport au load, activer immédiatement
            requestAnimationFrame(() => {
                revealElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
                    if (rect.top < viewHeight + 100) {
                        el.classList.add('active');
                    }
                });
            });

            // Fallback 2 : tout activer après 2.5s (au cas où observer ne fire pas — Playwright, agents headless)
            setTimeout(activateAll, 2500);

            // Fallback 3 : si l'utilisateur n'a pas scrollé après 5s, tout activer
            let userScrolled = false;
            window.addEventListener('scroll', () => { userScrolled = true; }, { once: true, passive: true });
            setTimeout(() => { if (!userScrolled) activateAll(); }, 5000);
        } else {
            activateAll();
        }

        // ----- Animated counters -----
        const counters = document.querySelectorAll('.counter');
        if ('IntersectionObserver' in window && counters.length) {
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = +el.getAttribute('data-target');
                        const duration = 2000;
                        const totalFrames = Math.round(duration / (1000 / 60));
                        let frame = 0;
                        const easeOut = t => t * (2 - t);
                        const step = () => {
                            frame++;
                            const progress = easeOut(frame / totalFrames);
                            if (frame < totalFrames) {
                                el.innerText = Math.round(target * progress);
                                requestAnimationFrame(step);
                            } else {
                                el.innerText = target;
                            }
                        };
                        requestAnimationFrame(step);
                        observer.unobserve(el);
                    }
                });
            }, { threshold: 0.3 });
            counters.forEach(c => counterObserver.observe(c));

            // Fallback : après 3s, finir tous les compteurs non lancés
            setTimeout(() => {
                counters.forEach(el => {
                    if (el.innerText === '0' || el.innerText === '2020') {
                        el.innerText = el.getAttribute('data-target');
                    }
                });
            }, 3000);
        }

        // ----- Accordion générique -----
        document.querySelectorAll('[data-accordion]').forEach(item => {
            const header = item.querySelector('.accordion-header');
            if (!header) return;
            header.addEventListener('click', () => {
                const parent = item.closest('[data-accordion-group]');
                if (parent) {
                    parent.querySelectorAll('[data-accordion].open').forEach(other => {
                        if (other !== item) other.classList.remove('open');
                    });
                }
                item.classList.toggle('open');
            });
        });

        // ----- Re-init icons si insertion dynamique -----
        window.refreshIcons = () => {
            if (typeof lucide !== 'undefined') lucide.createIcons();
        };
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();
