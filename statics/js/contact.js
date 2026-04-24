/* ============================================
   CONTACT PAGE — Form validation & submission
   ============================================ */

(function () {
    'use strict';

    const form = document.getElementById('contact-form');
    if (!form) return;

    const successBox = document.getElementById('form-success');
    const messageTextarea = form.querySelector('[name="message"]');
    const counter = document.getElementById('message-counter');
    const fileInput = form.querySelector('[name="attachments"]');
    const fileList = document.getElementById('file-list');

    // Character counter
    if (messageTextarea && counter) {
        const update = () => {
            const len = messageTextarea.value.length;
            counter.textContent = len + ' / 5000';
            counter.style.color = len > 4800 ? '#C41E3A' : '#64748B';
        };
        messageTextarea.addEventListener('input', update);
        update();
    }

    // File upload preview (safe DOM creation — file names are untrusted)
    if (fileInput && fileList) {
        fileInput.addEventListener('change', () => {
            while (fileList.firstChild) fileList.removeChild(fileList.firstChild);
            Array.from(fileInput.files).slice(0, 3).forEach(file => {
                const item = document.createElement('div');
                item.className = 'flex items-center gap-2 text-sm text-gouv-blue bg-gouv-cyan/5 px-3 py-2 rounded-lg mt-2';

                const icon = document.createElement('i');
                icon.setAttribute('data-lucide', 'file');
                icon.className = 'w-4 h-4';

                const nameSpan = document.createElement('span');
                nameSpan.textContent = file.name;

                const sizeSpan = document.createElement('span');
                sizeSpan.className = 'text-text-muted text-xs';
                sizeSpan.textContent = '(' + (file.size / 1024).toFixed(1) + ' KB)';

                item.appendChild(icon);
                item.appendChild(nameSpan);
                item.appendChild(sizeSpan);
                fileList.appendChild(item);
            });
            if (window.refreshIcons) window.refreshIcons();
        });
    }

    // Form validation + submit (simulation)
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

        let isValid = true;
        const required = form.querySelectorAll('[required]');
        required.forEach(field => {
            const value = field.value.trim();
            const group = field.closest('.form-group');
            if (!value) {
                if (group) group.classList.add('has-error');
                isValid = false;
            }
            if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                if (group) group.classList.add('has-error');
                isValid = false;
            }
        });

        if (messageTextarea && messageTextarea.value.trim().length < 20) {
            const group = messageTextarea.closest('.form-group');
            if (group) group.classList.add('has-error');
            isValid = false;
        }

        if (!isValid) {
            const firstError = form.querySelector('.has-error');
            if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        // Safe text update (no innerHTML)
        while (submitBtn.firstChild) submitBtn.removeChild(submitBtn.firstChild);
        const spinner = document.createElement('i');
        spinner.setAttribute('data-lucide', 'loader-2');
        spinner.className = 'w-4 h-4 animate-spin';
        submitBtn.appendChild(spinner);
        submitBtn.appendChild(document.createTextNode(' Envoi en cours...'));
        if (window.refreshIcons) window.refreshIcons();

        setTimeout(() => {
            form.style.display = 'none';
            if (successBox) {
                successBox.classList.add('visible');
                const ticketEl = document.getElementById('ticket-id');
                if (ticketEl) {
                    const ticket = 'TICKET-2026-' + Math.floor(10000 + Math.random() * 89999);
                    ticketEl.textContent = ticket;
                }
                successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 1500);
    });

    // Reset button
    const resetBtn = form.querySelector('[data-reset]');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Réinitialiser le formulaire ?')) {
                form.reset();
                form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));
                if (fileList) while (fileList.firstChild) fileList.removeChild(fileList.firstChild);
                if (counter) counter.textContent = '0 / 5000';
            }
        });
    }
})();
