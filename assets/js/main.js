// header menu sticky when scroll
window.addEventListener('scroll', () => {
    let headerMenu = document.querySelector('.header-menu.style-two')
    headerMenu.classList.toggle('sticky', window.scrollY > 100)
})

// slider
$(".slider-block .list-slider").slick({
    dots: false,
    arrows: true,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 100,
    infinite: false,
    swipe: true,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 800,
    // fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
    ]
});


// testimonial home2
$(".section-testimonial.style-two .container .list-comment").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    touchThreshold: 100,
    swipe: true,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});


// industry home3
$(".section-industry .row").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 10,
    touchThreshold: 100,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});