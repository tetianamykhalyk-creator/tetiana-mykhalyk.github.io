document.addEventListener('DOMContentLoaded', function() {
    // Шукаємо контейнер саме секції S3
    const sectionS3 = document.querySelector('#s3');
    if (!sectionS3) return;

    // Шукаємо елементи ТІЛЬКИ всередині цієї секції
    const slides = sectionS3.querySelectorAll('.slide');
    const nextBtn = sectionS3.querySelector('.next-btn');
    const prevBtn = sectionS3.querySelector('.prev-btn');
    const currentNum = sectionS3.querySelector('#current');
    const totalNum = sectionS3.querySelector('#total');

    let currentIndex = 0;

    // Встановлюємо загальну кількість
    if (totalNum) {
        totalNum.textContent = slides.length.toString().padStart(2, '0');
    }

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.display = 'none'; // Гарантуємо, що неактивні слайди не займають місце
        });
        
        slides[index].classList.add('active');
        slides[index].style.display = 'flex'; // Активний слайд стає видимим
        
        if (currentNum) {
            currentNum.textContent = (index + 1).toString().padStart(2, '0');
        }
    }

    // Ініціалізація першого слайда
    showSlide(currentIndex);

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});