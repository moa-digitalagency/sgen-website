/* Projects page — Smooth anchors & project counter */
(function () {
    'use strict';
    // Les compteurs sont gérés par common.js (class .counter).
    // Sticky nav des projets si plusieurs sections
    const anchors = document.querySelectorAll('[data-project-anchor]');
    anchors.forEach(a => {
        a.addEventListener('click', (e) => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
            }
        });
    });
})();
