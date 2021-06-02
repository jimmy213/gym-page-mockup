// Main Slider

$(document).ready(() => {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        prevArrow: $('.main-left'),
        nextArrow: $('.main-right'),
    })
})

// Section 5 slider

$(document).ready(() => {
    $('.sec5-slides').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('.sec5-left'),
        nextArrow: $('.sec5-right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            },
        ]
    })
})



// FAQ section buttons

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");

btn1.addEventListener("click", () => {
    p1.classList.toggle("d-none");
    p2.classList.add("d-none");
    p3.classList.add("d-none");
});
btn2.addEventListener("click", () => {
    p2.classList.toggle("d-none");
    p1.classList.add("d-none");
    p3.classList.add("d-none");
});
btn3.addEventListener("click", () => {
    p3.classList.toggle("d-none");
    p1.classList.add("d-none");
    p2.classList.add("d-none");
});