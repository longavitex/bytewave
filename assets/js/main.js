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
$(".section-testimonial.style-one .container>.row .testimonial-item").slick({
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


// section success stories home6
$(".section-success-stories .list").slick({
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