document.querySelectorAll('.copy-email').forEach(link => {
    link.addEventListener('click', function(e) {
        // 1. Запобігаємо відкриттю пошти, якщо хочемо ТІЛЬКИ копіювати
        // Якщо хочеш, щоб і копіювало, і відкривало — видали рядок нижче
        e.preventDefault(); 

        const email = this.getAttribute('data-email');
        const textSpan = this.querySelector('.link-text');
        const originalText = textSpan.innerText;

        // 2. Копіювання в буфер
        navigator.clipboard.writeText(email).then(() => {
            // 3. Візуальний ефект: міняємо текст на "COPIED!"
            textSpan.innerText = 'COPIED';
            this.classList.add('is-copied');

            // 4. Повертаємо текст назад через 1.5 секунди
            setTimeout(() => {
                textSpan.innerText = originalText;
                this.classList.remove('is-copied');
            }, 1500);
        });
    });
});