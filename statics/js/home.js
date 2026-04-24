/* ============================================
   SGEN — HOME PAGE JAVASCRIPT
   Atlas reveal + interactions
   ============================================ */

(function () {
    'use strict';

    const revealPlates = () => {
        const plates = document.querySelectorAll('.plate');
        if (!plates.length) return;

        const activateAll = () => plates.forEach(p => p.classList.add('revealed'));

        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });

            plates.forEach(p => {
                const rect = p.getBoundingClientRect();
                if (rect.top < window.innerHeight + 200) {
                    p.classList.add('revealed');
                } else {
                    io.observe(p);
                }
            });

            setTimeout(activateAll, 3500);
        } else {
            activateAll();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', revealPlates);
    } else {
        revealPlates();
    }
})();
