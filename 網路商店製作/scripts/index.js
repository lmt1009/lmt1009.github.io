// 輪播圖
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentIndex = 0; // 循環到第一張
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // 如果向前超過第一張，循環到最後一張
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// 自動播放功能，每4秒切換一張圖片
setInterval(nextSlide, 4000);
