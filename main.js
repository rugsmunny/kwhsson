console.log("HEJ APA");

let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    document.getElementById("prevButton").addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    document.getElementById("nextButton").addEventListener("click", () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Initialize carousel
    showSlide(currentIndex);
