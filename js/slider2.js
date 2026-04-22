const initCoversSlider = () => {
    const slides = document.querySelectorAll('.covers-slide');
    const currentTxt = document.getElementById('covers-current');
    const totalTxt = document.getElementById('covers-total');
    const prevBtn = document.querySelector('.covers-prev');
    const nextBtn = document.querySelector('.covers-next');

    if (!slides.length) return;

    let idx = 0;
    totalTxt.textContent = String(slides.length).padStart(2, '0');

    const update = (newIdx) => {
        slides[idx].classList.remove('active');
        idx = (newIdx + slides.length) % slides.length;
        slides[idx].classList.add('active');
        currentTxt.textContent = String(idx + 1).padStart(2, '0');
    };

    nextBtn.addEventListener('click', () => update(idx + 1));
    prevBtn.addEventListener('click', () => update(idx - 1));
};

// Запуск після завантаження сторінки
document.addEventListener('DOMContentLoaded', initCoversSlider);