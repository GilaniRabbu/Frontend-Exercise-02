document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.carousel-wrapper');
    const images = document.querySelectorAll('.carousel-wrapper img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        }
        else if (index >= images.length) {
            currentIndex = 0;
        }
        else {
            currentIndex = index;
        }
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextImage() {
        showImage(currentIndex + 1);
    }

    function showPrevImage() {
        showImage(currentIndex - 1);
    }

    function startAutoChange() {
        setInterval(showNextImage, 6000); // change image every 6 seconds
    }

    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    startAutoChange(); // start automatic image change
});
