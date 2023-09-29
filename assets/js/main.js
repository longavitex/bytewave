
// Animation when scroll 
ScrollReveal({
    distance: '200px',
    duration: 1000,
    delay: 500,
})

// Scroll bottom to top 
ScrollReveal().reveal('.scroll-bottom-to-top1', { delay: 200, origin: 'bottom' })
ScrollReveal().reveal('.scroll-bottom-to-top2', { delay: 300, origin: 'bottom' })
ScrollReveal().reveal('.scroll-bottom-to-top3', { delay: 400, origin: 'bottom' })
ScrollReveal().reveal('.scroll-bottom-to-top4', { delay: 500, origin: 'bottom' })
ScrollReveal().reveal('.scroll-bottom-to-top5', { delay: 600, origin: 'bottom' })
ScrollReveal().reveal('.scroll-bottom-to-top6', { delay: 700, origin: 'bottom' })
ScrollReveal().reveal('.scroll-bottom-to-top7', { delay: 800, origin: 'bottom' })
ScrollReveal().reveal('.scroll-bottom-to-top8', { delay: 900, origin: 'bottom' })

// Scroll left to right
ScrollReveal().reveal('.scroll-left-to-right1', { delay: 200, origin: 'left' })
ScrollReveal().reveal('.scroll-left-to-right2', { delay: 300, origin: 'left' })
ScrollReveal().reveal('.scroll-left-to-right3', { delay: 400, origin: 'left' })
ScrollReveal().reveal('.scroll-left-to-right4', { delay: 500, origin: 'left' })

// Scroll right to left
ScrollReveal().reveal('.scroll-right-to-left1', { delay: 200, origin: 'right' })
ScrollReveal().reveal('.scroll-right-to-left2', { delay: 300, origin: 'right' })
ScrollReveal().reveal('.scroll-right-to-left3', { delay: 400, origin: 'right' })
ScrollReveal().reveal('.scroll-right-to-left4', { delay: 500, origin: 'right' })


// Pop up newsletter
const popupNewsletterBlock = document.querySelector('#popup-newsletter-block')
const popupNewsletterMain = document.querySelector('#popup-newsletter-block .popup-newsletter-main')
const closePopupNewsletterBtn = document.querySelector('#popup-newsletter-block .close-block')

window.onload = () => {
    if (popupNewsletterBlock) {
        setTimeout(() => {
            popupNewsletterBlock.classList.add('open')
        }, 1000)
    }
}

if (closePopupNewsletterBtn) {
    closePopupNewsletterBtn.addEventListener('click', () => {
        popupNewsletterBlock.classList.remove('open')
    })
}

// click outside mobile menu, close mobile menu
if (popupNewsletterBlock) {
    popupNewsletterBlock.addEventListener('click', () => {
        popupNewsletterBlock.classList.remove('open')
    })
}

// prevent default behavior when clicking mobile menu
if (popupNewsletterMain) {
    popupNewsletterMain.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}

// Prevent Pop up
// check for saved 'darkMode' in localStorage
let popupNewsletter = localStorage.getItem('popupNewsletter');
localStorage.setItem('popupNewsletter', '')

const disablePopupNewsletter = () => {
    // 1. Add the class to the body
    document.body.classList.add('prevent-popupNewsletter');
    // 2. Update popupNewsletter in localStorage
    localStorage.setItem('popupNewsletter', 'prevent');
}

const enablepopupNewsletter = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('prevent-popupNewsletter');
    // 2. Update popupNewsletter in localStorage 
    localStorage.setItem('popupNewsletter', null);
}

// If the user already visited and prevent popupNewsletter
// start things off with it on
if (popupNewsletter === 'prevent') {
    disablePopupNewsletter();
}

// When someone clicks the button
const preventPopupInput = document.querySelector('.prevent-popup-input')
if (preventPopupInput) {
    preventPopupInput.addEventListener('change', () => {
        // get their popupNewsletter setting
        popupNewsletter = localStorage.getItem('popupNewsletter');

        // if it not current prevent, enable it
        if (preventPopupInput.checked) {
            disablePopupNewsletter();
            // if it has been prevent, turn it off  
        } else {
            enablepopupNewsletter();
        }
    });
}


// header menu sticky when scroll
window.addEventListener('scroll', () => {
    let headerMenu = document.querySelector('.header-menu.style-two')
    if (headerMenu) {
        headerMenu.classList.toggle('sticky', window.scrollY > 700);
    }
})

// mobile menu
const mobileMenuBtn = document.querySelector('.menu-humburger')
const menuMobile = document.querySelector('#menu-mobile-block')
const menuMobileMain = document.querySelector('#menu-mobile-block .menu-mobile-main')
const closeMobileBtn = document.querySelector('#menu-mobile-block .close-block')

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        menuMobile.classList.toggle('open')
        document.querySelector('body').classList.toggle('overflow-hidden')
    })
}

if (closeMobileBtn) {
    closeMobileBtn.addEventListener('click', () => {
        menuMobile.classList.remove('open')
        document.querySelector('body').classList.remove('overflow-hidden')
    })
}


// Open sub link mobile menu
const navItems = document.querySelectorAll('#menu-mobile-block .nav-item-mobile')

if (navItems) {
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            item.classList.toggle('open')
            removeOpen(index)
        })
    })
}

function removeOpen(index1) {
    navItems.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove('open')
        }
    })
}


// Button hover
const btnMain = document.querySelectorAll('.hover-button')

if (btnMain) {
    btnMain.forEach(btn => {
        btn.onmousemove = (e) => {
            let x = e.pageX - btn.offsetLeft
            let y = e.pageY - btn.offsetTop

            btn.style.setProperty('--x', x + 'px')
            btn.style.setProperty('--y', y + 'px')
        }
    })
}

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
    autoplay: true,
    autoplaySpeed: 4000,
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


// Listen event click prev, next Arrow
const prevArrow = document.querySelector('.slider-block .prev-arrow')
const nextArrow = document.querySelector('.slider-block .next-arrow')

if (prevArrow) {
    prevArrow.addEventListener('click', () => {
        let sliderActive = document.querySelector('.slider-block .slick-list .slick-active')
        let img = sliderActive.querySelector('.bg-img img')
        let heading = sliderActive.querySelector('.container .heading1')
        let subHeading = sliderActive.querySelector('.container .body2')
        let feature = sliderActive.querySelector('.container .list-feature')
        let button = sliderActive.querySelector('.container .block-button')

        let images = document.querySelectorAll('.slider-item .bg-img img');
        let headings = document.querySelectorAll('.slider-item .heading1');
        let subHeadings = document.querySelectorAll('.slider-item .body2');
        let listFeature = document.querySelectorAll('.slider-item .list-feature');
        let buttons = document.querySelectorAll('.slider-item .block-button');

        images.forEach(img => {
            img.classList.remove("animate__animated", "animate__fadeIn", "animate__delay-0-2s");
        })
        headings.forEach(p => {
            p.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-0-2s");
        })
        subHeadings.forEach(a => {
            a.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-0-5s");
        })
        listFeature.forEach(feature => {
            feature.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-0-5s");
        })
        buttons.forEach(btn => {
            btn.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-0-8s");
        })

        img.classList.add("animate__animated", "animate__fadeIn", "animate__delay-0-2s")
        heading.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-0-2s")
        if (subHeading) {
            subHeading.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-0-5s")
        }
        if (feature) {
            feature.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-0-5s")
        }
        button.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-0-8s")
    })
}

if (nextArrow) {
    nextArrow.addEventListener('click', () => {
        let sliderActive = document.querySelector('.slider-block .slick-list .slick-active')
        let img = sliderActive.querySelector('.bg-img img')
        let heading = sliderActive.querySelector('.container .heading1')
        let subHeading = sliderActive.querySelector('.container .body2')
        let feature = sliderActive.querySelector('.container .list-feature')
        let button = sliderActive.querySelector('.container .block-button')

        let images = document.querySelectorAll('.slider-item .bg-img img');
        let headings = document.querySelectorAll('.slider-item .heading1');
        let subHeadings = document.querySelectorAll('.slider-item .body2');
        let listFeature = document.querySelectorAll('.slider-item .list-feature');
        let buttons = document.querySelectorAll('.slider-item .block-button');

        images.forEach(img => {
            img.classList.remove("animate__animated", "animate__fadeIn", "animate__delay-0-2s");
        })
        headings.forEach(p => {
            p.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-0-2s");
        })
        subHeadings.forEach(a => {
            a.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-0-5s");
        })
        listFeature.forEach(feature => {
            feature.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-0-5s");
        })
        buttons.forEach(btn => {
            btn.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-0-8s");
        })

        img.classList.add("animate__animated", "animate__fadeIn", "animate__delay-0-2s")
        heading.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-0-2s")
        if (subHeading) {
            subHeading.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-0-5s")
        }
        if (feature) {
            feature.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-0-5s")
        }
        button.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-0-8s")
    })
}


// Count number
if (document.querySelector('.counter .count-number')) {
    $('.counter .count-number').counterUp({
        delay: 6,
        time: 800,
        scrollSpyOnce: true,
    });
}


// news home1
$(".section-news .container .list-news").slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 4,
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

// Change cursor
const listNews = document.querySelectorAll('.section-news .list-news .slick-list')
const mouseCursor = document.querySelector('.cursor')

if (listNews) {
    listNews.forEach(listNew => {
        listNew.addEventListener('mousemove', (e) => {
            mouseCursor.style.top = e.pageY + 'px'
            mouseCursor.style.left = e.pageX + 'px'
            mouseCursor.style.opacity = '1'
        })

        listNew.addEventListener('mouseout', (e) => {
            mouseCursor.style.opacity = '0'
        })

        listNew.addEventListener('mousedown', () => {
            mouseCursor.style.width = '60px'
            mouseCursor.style.height = '60px'
            mouseCursor.style.gap = '4px'
        })

        listNew.addEventListener('mouseup', () => {
            mouseCursor.style.width = '70px'
            mouseCursor.style.height = '70px'
            mouseCursor.style.gap = '12px'
        })
    })
}


// testimonial home1
$(".section-testimonial.style-one .testimonial-item").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 4,
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
});


// Change avatar testimonial home1
const dots = document.querySelectorAll('.section-testimonial.style-one .testimonial-item .slick-dots li')

const listAvatar = document.querySelector('.section-testimonial.style-one .list-avatar')
const avatar = document.querySelectorAll('.section-testimonial.style-one .list-avatar .bg-img')

if (dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            avatar.forEach(item => {
                let indexAvatar = item.getAttribute('data-name')
                let testimonialCurrent = document.querySelector('.section-testimonial.style-one .testimonial-item .slick-current')
                let indexCmt = testimonialCurrent.getAttribute('data-slick-index')

                if (indexCmt === indexAvatar) {
                    listAvatar.querySelector('.active').classList.remove('active')
                    item.classList.add('active')
                }
            })
        })
    })
}

const slickList = document.querySelector('.section-testimonial.style-one .testimonial-item .slick-list')

if (slickList) {
    slickList.addEventListener('mousemove', (e) => {
        avatar.forEach(item => {
            let indexAvatar = item.getAttribute('data-name')
            let testimonialCurrent = document.querySelector('.section-testimonial.style-one .testimonial-item .slick-current')
            let indexCmt = testimonialCurrent.getAttribute('data-slick-index')

            if (indexCmt === indexAvatar) {
                listAvatar.querySelector('.active').classList.remove('active')
                item.classList.add('active')
            }
        })
    })
}



// testimonial home2
$(".section-testimonial.style-two .container .list-comment").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    touchThreshold: 100,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
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


// circle box about home3
const textBoxCircle = document.querySelector('.section-about .text-box-circle .text-label')

if (textBoxCircle) {
    textBoxCircle.innerHTML = textBoxCircle.innerText.split('').map(
        (char, i) => `<span style="transform: rotate(${i * 10.5}deg);">${char}</span>`
    ).join('')
}


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

// Change cursor home3
const listIndustry = document.querySelector('.section-industry .list-industry .slick-list')

if (listIndustry) {
    listIndustry.addEventListener('mousemove', (e) => {
        mouseCursor.style.top = e.pageY + 'px'
        mouseCursor.style.left = e.pageX + 'px'
        mouseCursor.style.opacity = '1'
    })

    listIndustry.addEventListener('mouseout', (e) => {
        mouseCursor.style.opacity = '0'
    })

    listIndustry.addEventListener('mousedown', () => {
        mouseCursor.style.width = '60px'
        mouseCursor.style.height = '60px'
        mouseCursor.style.gap = '4px'
    })

    listIndustry.addEventListener('mouseup', () => {
        mouseCursor.style.width = '70px'
        mouseCursor.style.height = '70px'
        mouseCursor.style.gap = '12px'
    })
}


// change switch btn pricing home6
const switchBtn = document.querySelector('.switch')
const listPricingMonth = document.querySelector('.list-pricing')
const listPricingYear = document.querySelector('.list-pricing-year')

if (switchBtn) {
    switchBtn.addEventListener('click', () => {
        switchBtn.classList.toggle('enable')

        let text = switchBtn.parentElement.querySelectorAll('.text-title')

        text.forEach(item => {
            if (item.classList.contains('text-on-surface-variant1')) {
                item.classList.remove('text-on-surface-variant1')
            }
            else {
                item.classList.add('text-on-surface-variant1')
            }
        })

        if (switchBtn.classList.contains('enable')) {
            listPricingMonth.classList.remove('show')
            listPricingMonth.classList.add('hide')
            listPricingYear.classList.remove('hide')
            listPricingYear.classList.add('show')
        } else {
            if (listPricingYear.classList.contains('show')) {
                listPricingYear.classList.remove('show')
            }
            listPricingYear.classList.add('hide')

            if (listPricingMonth.classList.contains('hide')) {
                listPricingMonth.classList.remove('hide')
            }
            listPricingMonth.classList.add('show')
        }
    })
}


// testimonial home7
$(".section-testimonial.style-seven .container .list-comment").slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    touchThreshold: 100,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
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


// Video modal Home7
const videoModal = document.querySelector('.js-video-modal')
const videoModalContainer = document.querySelector('.js-video-modal-container')
const closeVideo = document.querySelector('.js-modal-close')
const playBtn = document.querySelector('.video-block .ph-play')

//Show modal video
function showVideo() {
    if (videoModal) {
        videoModal.classList.add('open')
    }
}

//Close modal video
function removeVideoModal() {
    if (videoModal) {
        videoModal.classList.remove('open')
    }
}

//Listen click
if (playBtn) {
    playBtn.addEventListener('click', showVideo)
}

//Listen click and close modal video
if (closeVideo) {
    closeVideo.addEventListener('click', removeVideoModal)
}

//Listen click outside modal-container and close modal video
if (videoModal) {
    videoModal.addEventListener('click', removeVideoModal)
}

if (videoModalContainer) {
    videoModalContainer.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}


// Like Blog Detail
const comments = document.querySelectorAll('.blog-detail-page .blog-comment .comment-item .like')

if (comments) {
    comments.forEach(cmt => {
        cmt.addEventListener('click', () => {
            cmt.classList.toggle('liked')
            let heartIcon = cmt.querySelector('i')
            let numberLiked = cmt.querySelector('.text-button')
            let number = parseFloat(numberLiked.innerHTML);

            if (cmt.classList.contains('liked')) {
                heartIcon.classList.replace('ph-light', 'ph-fill')
                number = number + 1
                numberLiked.innerHTML = number.toString()
            }
            else {
                heartIcon.classList.replace('ph-fill', 'ph-light')
                number = number - 1
                numberLiked.innerHTML = number.toString()
            }
        })
    })
}



// Show, hide reply Blog Detail
const showReplyBtn = document.querySelectorAll('.blog-detail-page .blog-comment .comment-item .cmt')
const listReply = document.querySelectorAll('.blog-detail-page .blog-comment .list-reply')

if (showReplyBtn) {
    showReplyBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentCmt = btn.parentElement.parentElement.parentElement
            const dataCmt = parentCmt.getAttribute('data-cmt')

            listReply.forEach(reply => {
                const dataReply = reply.getAttribute('data-cmt')

                if (dataReply == dataCmt) {
                    reply.classList.toggle('show')
                    btn.classList.toggle('show')

                    const textShow = btn.querySelector('.text-button')
                    if (btn.classList.contains('show')) {
                        textShow.innerHTML = 'Hide Replies'
                    } else {
                        textShow.innerHTML = 'Show Replies'
                    }
                }
            })
        })
    })
}


// open answer faqs
const questionItem = document.querySelectorAll('.question-item')

if (questionItem) {
    questionItem.forEach((item, index) => {
        let titleItem = item.querySelector('.question-item-main')
        let icon = item.querySelector('i')

        titleItem.addEventListener('click', () => {
            item.classList.toggle('open')

            if (item.classList.contains('open')) {
                setTimeout(() => {
                    icon.classList.replace('ph-plus', 'ph-minus')
                }, 200)
            } else {
                setTimeout(() => {
                    icon.classList.replace('ph-minus', 'ph-plus')
                }, 200)
            }

            removeOpenAnswer(index)
        })

        if (item.classList.contains('open')) {
            icon.classList.replace('ph-plus', 'ph-minus')
        } else {
            icon.classList.replace('ph-minus', 'ph-plus')
        }
    })
}

function removeOpenAnswer(index1) {
    questionItem.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove('open')
            item2.querySelector('i').classList.replace('ph-minus', 'ph-plus')
        }
    })
}

// Countdown time in cart
const min = document.querySelector('.cart-block .time .caption1 .min')
const sec = document.querySelector('.cart-block .time .caption1 .sec')


window.onload = () => {
    if (min && sec) {
        setTimeout(() => {
            setInterval(() => {
                var seconds = sec.innerHTML
                var minutes = min.innerHTML
                seconds--;
                sec.innerHTML = seconds

                if (seconds < 10) {
                    sec.innerHTML = '0' + seconds
                }

                if (seconds == -1) {
                    seconds = 59
                    sec.innerHTML = seconds
                    seconds--
                    minutes = Number(minutes) - 1
                    min.innerHTML = '0' + minutes
                }

                if (minutes <= -1) {
                    sec.innerHTML = '00'
                    min.innerHTML = '00'
                }
            }, 1000)
        }, 100)


    }
}

// Increase and reduce quantity product in cart
const reduceNumberCarts = document.querySelectorAll('.list .item .quantity-block .ph-minus')
const increaseNumberCarts = document.querySelectorAll('.list .item .quantity-block .ph-plus')


if (increaseNumberCarts) {
    increaseNumberCarts.forEach(increaseNumberCart => {
        let parentItem = increaseNumberCart.parentElement

        increaseNumberCart.addEventListener('click', function (e) {
            let quantity = parentItem.querySelector('span').innerHTML
            let iconLeft = parentItem.querySelector('.ph-minus')

            quantity = Number(quantity) + 1
            parentItem.querySelector('span').innerHTML = quantity

            // Enable minus button
            if (quantity > 1) {
                iconLeft.classList.remove('disable')
            }

            // Handle total price product item
            const productItem = parentItem.parentElement.parentElement
            const pricePrd = productItem.querySelector('span.price').innerHTML
            const totalPricePrdItem = productItem.querySelector('span.total')

            totalPricePrdItem.innerHTML = Number(pricePrd) * quantity

            // Handle total price products
            const totalPricePrds = document.querySelector('.checkout-block span.total-product')
            const arrayPrd = document.querySelectorAll('.list-product .list .item')
            var totalPricePrdsNew = 0

            arrayPrd.forEach(item => {
                const total = item.querySelector('span.total')
                totalPricePrdsNew += Number(total.innerHTML)
            })
            totalPricePrds.innerHTML = totalPricePrdsNew

            // Handle total price carts
            const totalPriceCart = document.querySelector('.total-cart-block span.total-cart')
            const discountPrice = document.querySelector('.discount-block span.discount')
            totalPriceCart.innerHTML = Number(totalPricePrds.innerHTML) - Number(discountPrice.innerHTML)

            // Handle price heading (Buy ... more to get Freeship)
            // You can change to any number
            var totalPriceToFreeship = 500
            const priceToFreeShip = document.querySelector('.cart-block .heading span.price')
            priceToFreeShip.innerHTML = Number(totalPriceToFreeship) - Number(totalPricePrds.innerHTML)

            if (Number(priceToFreeShip.innerHTML) <= 0) {
                priceToFreeShip.innerHTML = '0'
            }

            // Handle progress heading
            const progressLine = document.querySelector('.tow-bar-block .progress-line')
            var percentProgress = ((Number(priceToFreeShip.innerHTML) / Number(totalPriceToFreeship)) * 100)
            progressLine.style.width = 100 - Number(percentProgress) + '%'
        })
    })
}

if (reduceNumberCarts) {
    reduceNumberCarts.forEach(reduceNumberCart => {
        reduceNumberCart.addEventListener('click', function (e) {
            let parentItem = reduceNumberCart.parentElement
            let quantity = parentItem.querySelector('span').innerHTML
            let iconLeft = parentItem.querySelector('.ph-minus')

            if (quantity > 1) {
                quantity = Number(quantity) - 1
                parentItem.querySelector('span').innerHTML = quantity
            }

            // Disable minus button
            if (quantity <= 1) {
                iconLeft.classList.add('disable')
            }

            // Handle total price product item
            const productItem = parentItem.parentElement.parentElement
            const pricePrd = productItem.querySelector('span.price').innerHTML
            const totalPricePrdItem = productItem.querySelector('span.total')

            totalPricePrdItem.innerHTML = Number(pricePrd) * quantity

            // Handle total price products
            const totalPricePrds = document.querySelector('.checkout-block span.total-product')
            const arrayPrd = document.querySelectorAll('.list-product .list .item')
            var totalPricePrdsNew = 0

            arrayPrd.forEach(item => {
                const total = item.querySelector('span.total')
                totalPricePrdsNew += Number(total.innerHTML)
            })
            totalPricePrds.innerHTML = totalPricePrdsNew

            // Handle total price carts
            const totalPriceCart = document.querySelector('.total-cart-block span.total-cart')
            const discountPrice = document.querySelector('.discount-block span.discount')
            totalPriceCart.innerHTML = Number(totalPricePrds.innerHTML) - Number(discountPrice.innerHTML)

            // Handle price heading (Buy ... more to get Freeship)
            // You can change to any number
            var totalPriceToFreeship = 500
            const priceToFreeShip = document.querySelector('.cart-block .heading span.price')
            priceToFreeShip.innerHTML = Number(totalPriceToFreeship) - Number(totalPricePrds.innerHTML)

            if (Number(priceToFreeShip.innerHTML) <= 0) {
                priceToFreeShip.innerHTML = '0'
            }

            // Handle progress heading
            const progressLine = document.querySelector('.tow-bar-block .progress-line')
            var percentProgress = ((Number(priceToFreeShip.innerHTML) / Number(totalPriceToFreeship)) * 100)
            progressLine.style.width = 100 - Number(percentProgress) + '%'
        })
    })
}

// // add remove wishlist
// const heartIcons = document.querySelectorAll('.heart-icon .far')

// if(heartIcons) {
//     heartIcons.forEach(heartIcon => {
//         heartIcon.addEventListener('click', () => {
//             if (heartIcon.getAttribute('class') == 'far fa-heart') {
//                 heartIcon.className = "fas fa-heart"
//             } else {
//                 heartIcon.className = "far fa-heart"
//             }
//         })
//     })
// }


// Check out page
// Show, hide login block
const formLoginHeading = document.querySelector('.checkout-block .form-login-block')
const loginHeading = document.querySelector('.checkout-block .login .left span.text-button')
const iconDownHeading = document.querySelector('.checkout-block .login .right i')

if (loginHeading) {
    loginHeading.addEventListener('click', () => {
        formLoginHeading.classList.toggle('open')
        iconDownHeading.classList.toggle('up')
    })

    iconDownHeading.addEventListener('click', () => {
        formLoginHeading.classList.toggle('open')
        iconDownHeading.classList.toggle('up')
    })
}

// Show, hide payment type
const paymentType = document.querySelectorAll('.payment-block .list-payment .type')
const paymentCheckbox = document.querySelectorAll('.payment-block .list-payment .type>input')

if (paymentCheckbox) {
    paymentCheckbox.forEach(item => {
        item.addEventListener('change', () => {
            if (item.checked) {
                let parentType = item.parentElement
                parentType.classList.add('open')
            }
        })
    })
}