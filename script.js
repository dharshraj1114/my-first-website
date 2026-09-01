/* =========================================
   PRODUCT SLIDER
========================================= */

const slider = document.getElementById("productSlider");

const products = document.querySelectorAll(".product-card");

const nextButton = document.getElementById("nextBtn");

const previousButton = document.getElementById("prevBtn");

const dots = document.querySelectorAll(".dot");


let currentPosition = 0;


/* =========================================
   NEXT BUTTON
========================================= */

nextButton.addEventListener("click", function () {

    const productWidth =
        products[0].offsetWidth + 25;

    currentPosition += productWidth;

    if (currentPosition >
        slider.scrollWidth - slider.clientWidth) {

        currentPosition = 0;

    }

    slider.scrollTo({

        left: currentPosition,

        behavior: "smooth"

    });

    updateDots();

});


/* =========================================
   PREVIOUS BUTTON
========================================= */

previousButton.addEventListener("click", function () {

    const productWidth =
        products[0].offsetWidth + 25;

    currentPosition -= productWidth;

    if (currentPosition < 0) {

        currentPosition =
            slider.scrollWidth - slider.clientWidth;

    }

    slider.scrollTo({

        left: currentPosition,

        behavior: "smooth"

    });

    updateDots();

});


/* =========================================
   DOT BUTTONS
========================================= */

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        const productWidth =
            products[0].offsetWidth + 25;

        currentPosition =
            productWidth * index;

        slider.scrollTo({

            left: currentPosition,

            behavior: "smooth"

        });

        updateDots();

    });

});


/* =========================================
   UPDATE DOT
========================================= */

function updateDots() {

    const productWidth =
        products[0].offsetWidth + 25;

    let activeIndex =
        Math.round(currentPosition / productWidth);

    if (activeIndex > dots.length - 1) {

        activeIndex = dots.length - 1;

    }


    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    if (dots[activeIndex]) {

        dots[activeIndex].classList.add("active");

    }

}


/* =========================================
   AUTOMATIC PRODUCT SLIDER
========================================= */

setInterval(function () {

    const productWidth =
        products[0].offsetWidth + 25;

    currentPosition += productWidth;


    if (currentPosition >
        slider.scrollWidth - slider.clientWidth) {

        currentPosition = 0;

    }


    slider.scrollTo({

        left: currentPosition,

        behavior: "smooth"

    });


    updateDots();

}, 5000);



/* =========================================
   NAVIGATION ACTIVE LINK
========================================= */

const navLinks =
    document.querySelectorAll("nav ul li a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });


        this.classList.add("active");

    });

});



/* =========================================
   HEADER SCROLL EFFECT
========================================= */

window.addEventListener("scroll", function () {

    const header =
        document.getElementById("header");


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});
