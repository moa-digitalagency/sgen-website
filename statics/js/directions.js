/* Directions page — Filtrage par secteur */
(function () {
    'use strict';

    const tabs = document.querySelectorAll('[data-dir-filter]');
    const cards = document.querySelectorAll('[data-dir-type]');

    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.getAttribute('data-dir-filter');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            cards.forEach(card => {
                const type = card.getAttribute('data-dir-type');
                if (filter === 'all' || type === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
})();
