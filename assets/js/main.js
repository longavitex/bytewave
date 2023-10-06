
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
// check for saved 'popupNewsletter' in localStorage
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


// Fix error when clicking on nav item, background will jump to current item.
const subNavItem = document.querySelectorAll('.sub-nav-item');

if (subNavItem) {
    subNavItem.forEach(item => {
        item.addEventListener('click', () => {
            subNavItem.forEach(otherItem => {
                otherItem.style.background = 'transparent'
            })
        })
    })
}


// Change the active of nav items in the submenu when switching pages.
// Get the list of nav items in the submenu.
const submenuItems = document.querySelectorAll('.nav-item-main');

// Initialize the menu item nav variable that will be active in the submenu in localStorage
let navMenuActive = localStorage.getItem('navMenuActive');

// Loop through each nav menu item and add a "click" event
if (submenuItems) {
    submenuItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Get service data from data-item attribute
            let selectedNavItem = item.getAttribute("data-item");

            // Save data from data-item to localStorage
            localStorage.setItem('navMenuActive', selectedNavItem)
        })

        // Get data saved in localStorage
        navMenuActive = localStorage.getItem('navMenuActive')

        // Add the active class to the nav item whose data-item matches the data in localStorage
        if (navMenuActive === item.getAttribute("data-item")) {
            item.classList.add('active')
        }
    });
}


// Get service detail when clicking on a service item
// Get all service item on the list solution in header menu
const serviceItems = document.querySelectorAll('.sub-nav-solution .service-item');

// Initialize selectedService in localStorage
let selectedService = localStorage.getItem('selectedService');

if (selectedService == null) {
    localStorage.setItem('selectedService', JSON.stringify([]));
}

// Handle click events for each service entry
if (serviceItems) {
    serviceItems.forEach(serviceItem => {
        serviceItem.addEventListener('click', () => {
            // Listen for click events, get service information, save to serviceInfor
            var serviceInfor = {
                category: serviceItem.getAttribute('data-cate'),
                name: serviceItem.querySelector('.service-name').textContent,
            }

            // Save service item information to localStorage
            localStorage.setItem('selectedService', JSON.stringify(serviceInfor));
        });
    });
}


// Display service information on the service details page
if (document.querySelector('.heading-service-title')) {
    // Extract service item information from localStorage
    var selectedServiceInfo = JSON.parse(localStorage.getItem('selectedService'));

    if (selectedServiceInfo !== null) {
        document.querySelector('.category').textContent = selectedServiceInfo.category;
        document.querySelector('.title').textContent = selectedServiceInfo.name;
    }
    else {
        document.querySelector('.category').textContent = 'IT Solutions'
        document.querySelector('.title').textContent = 'Cybersecurity Solutions';
    }
}


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

// slider animation1
$(".slider-block.animation-one .list-slider").slick({
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
    autoplaySpeed: 5000,
    fade: true,
    speed: 800,
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

// Animate slider Style home2
const animateTextSlider = () => {
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
}


// Listen event click prev, next Arrow style home2
const prevArrow = document.querySelector('.slider-block.animation-one .prev-arrow')
const nextArrow = document.querySelector('.slider-block.animation-one .next-arrow')

if (prevArrow) {
    prevArrow.addEventListener('click', () => {
        animateTextSlider()
    })

    setInterval(() => {
        animateTextSlider()
    }, 100)
}

if (nextArrow) {
    nextArrow.addEventListener('click', () => {
        animateTextSlider()
    })
}


// slider animation2
$(".slider-block.animation-two .list-slider").slick({
    dots: false,
    arrows: true,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 100,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: true,
    speed: 800,
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

// Animate slider Style home3
const animateTextSlider3 = () => {
    // Get slider active
    let sliderActive = document.querySelector('.slider-block .slick-list .slick-active')
    let textBodyActive = sliderActive.querySelector('.text-content .body2')
    let listFeatureActive = sliderActive.querySelector('.text-content .list-feature')
    let blockBtnActive = sliderActive.querySelector('.text-content .block-button')

    // Get the elements in text content
    let textHeadings = document.querySelectorAll('.slider-item .text-content .heading1');
    let textBodys = document.querySelectorAll('.slider-item .text-content .body2');
    let listFeatures = document.querySelectorAll('.slider-item .text-content .list-feature');
    let blockBtns = document.querySelectorAll('.slider-item .text-content .block-button');

    // Split the text into each character
    textHeadings.forEach(textItem => {
        textItem.classList.remove('animate__animated', 'animate__fadeIn')
        let characters = textItem.textContent.split(' ');

        // Delete current content in the text
        textItem.textContent = '';

        // Go through each character and add class to each character
        characters.forEach((char, index) => {
            let span = document.createElement('span')
            span.textContent = `${char} `
            if (index < 4) {
                span.classList.add('animate__animated', 'animate__fadeIn', `animate__delay-0-${(index + 1) * 2}s`) // Thêm class 'highlighted'
            }

            if (index >= 4) {
                span.classList.add('animate__animated', 'animate__fadeIn', `animate__delay-1-${((index + 1) * 2) % 10}s`) // Thêm class 'highlighted'
            }

            if (index >= 9) {
                span.classList.add('animate__animated', 'animate__fadeIn', `animate__delay-2-${((index + 1) * 2) % 20}s`) // Thêm class 'highlighted'
            }

            textItem.appendChild(span)
        })
    })


    listFeatures.forEach(item => {
        item.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-1-5s");
    })

    if (listFeatureActive) {
        listFeatureActive.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-1-5s");
    }

    textBodys.forEach(item => {
        item.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-1-5s");
    })

    if (textBodyActive) {
        textBodyActive.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-1-5s");
    }

    blockBtns.forEach(item => {
        item.classList.remove("animate__animated", "animate__fadeInUp", "animate__delay-2s");
    })

    blockBtnActive.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-2s");
}


// Listen event click prev, next Arrow style home3
const prevArrow3 = document.querySelector('.slider-block.animation-two .prev-arrow')
const nextArrow3 = document.querySelector('.slider-block.animation-two .next-arrow')

if (prevArrow3) {
    prevArrow3.addEventListener('click', () => {
        animateTextSlider3()
    })
}


if (nextArrow3) {
    nextArrow3.addEventListener('click', () => {
        animateTextSlider3()
    })
}

// Execute the function that creates the effect after dragging the slide
$('.slider-block.animation-two .list-slider').on('swipe', function (event, slick, currentSlide) {
    animateTextSlider3()
});


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
const listSlideItem = document.querySelectorAll('.section-slide-shared .slick-list')
const mouseCursor = document.querySelectorAll('.cursor')

if (listSlideItem && mouseCursor) {
    listSlideItem.forEach(listItem => {
        listItem.addEventListener('mousemove', (e) => {
            mouseCursor.forEach(item => {
                item.style.top = e.pageY + 'px'
                item.style.left = e.pageX + 'px'
                item.style.opacity = '1'
            })
        })

        listItem.addEventListener('mouseout', () => {
            mouseCursor.forEach(item => {
                item.style.opacity = '0'
            })
        })

        listItem.addEventListener('mousedown', () => {
            mouseCursor.forEach(item => {
                item.style.width = '60px'
                item.style.height = '60px'
                item.style.gap = '4px'
            })
        })

        listItem.addEventListener('mouseup', () => {
            mouseCursor.forEach(item => {
                item.style.width = '70px'
                item.style.height = '70px'
                item.style.gap = '12px'
            })
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
    grab: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    infinite: true,
});


// Change avatar testimonial home1
const dots = document.querySelectorAll('.section-testimonial.style-one .testimonial-item .slick-dots li')

const listAvatar = document.querySelector('.section-testimonial.style-one .list-avatar')
const avatar = document.querySelectorAll('.section-testimonial.style-one .list-avatar .bg-img')

const changeAvatarTestimonial = () => {
    avatar.forEach(item => {
        let indexAvatar = item.getAttribute('data-name')
        let testimonialCurrent = document.querySelector('.section-testimonial.style-one .testimonial-item .slick-current')
        let indexCmt = testimonialCurrent.getAttribute('data-slick-index')

        if (indexCmt === indexAvatar) {
            listAvatar.querySelector('.active').classList.remove('active')
            item.classList.add('active')
        }
    })
}

// Execute the function that creates the effect after click the dot
if (dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            changeAvatarTestimonial()
        })
    })
}

// Execute the function that creates the effect after dragging the slide
$('.section-testimonial.style-one .testimonial-item').on('swipe', function (event, slick, currentSlide) {
    changeAvatarTestimonial()
})


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


// Video modal Home5, Home7
const videoModal = document.querySelector('.js-video-modal')
const videoModalContainer = document.querySelector('.js-video-modal-container')
const closeVideo = document.querySelector('.js-modal-close')
const playBtn = document.querySelectorAll('.video-block .ph-play')

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
    playBtn.forEach(btn => {
        btn.addEventListener('click', showVideo)
    })
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


// Get member information when click on a member item
// Initialize selectedMember in localStorage
let selectedMember = localStorage.getItem('selectedMember');

// Get all member entries on the list member
const memberItems = document.querySelectorAll('.member-item');

// Handle click events for each member entry
if (memberItems) {
    memberItems.forEach(memberItem => {
        memberItem.addEventListener('click', () => {
            // Listen for click events, get member information, save to memberInfor
            const memberInfor = {
                name: memberItem.querySelector('.name').textContent,
                position: memberItem.querySelector('.position').textContent,
                img: memberItem.querySelector('.bg-img img').getAttribute('src'),
            }

            // Save member item information to localStorage
            localStorage.setItem('selectedMember', JSON.stringify(memberInfor));
        });
    });
}

// Extract member item information from localStorage
let selectedMemberInfo = JSON.parse(localStorage.getItem('selectedMember'));

// Display member information on the member details page
if (document.querySelector('.team-detail-block')) {
    if (selectedMemberInfo !== null) {
        if (document.querySelector('.member-img img') && document.querySelector('.member-position') && document.querySelector('.member-name')) {
            document.querySelector('.member-name').textContent = selectedMemberInfo.name;
            document.querySelector('.member-position').textContent = selectedMemberInfo.position;
            document.querySelector('.member-img img').src = selectedMemberInfo.img;
        }
    }
}


// Show more list testimonials page
const listTestimonialBlock = document.querySelector('.list-testimonials-block')
const loadMoreBtn = document.querySelector('.load-more-btn')
const listMore = document.querySelector('.list-more .list')

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.querySelector('button span').style.opacity = '0'
        loadMoreBtn.querySelector('button i').style.display = 'block'

        setTimeout(() => {
            listMore.classList.add('open')
            loadMoreBtn.style.display = 'none'
            listTestimonialBlock.style.paddingBottom = '80px'
        }, 800)
    })
}


// Get blog information when click on a blog item
// Initialize selectedBlog in localStorage
let selectedBlog = localStorage.getItem('selectedBlog');

if (selectedBlog === null) {
    localStorage.setItem('selectedBlog', JSON.stringify([]));
}

// Get all blog entries on the list page
const blogItems = document.querySelectorAll('.blog-item-filter');

// Handle click events for each blog entry
if (blogItems) {
    blogItems.forEach(blogItem => {
        blogItem.addEventListener('click', () => {
            // Listen for click events, get blog information, save to blogInfor
            if (blogItem.querySelector('.category') || blogItem.querySelector('.title') || blogItem.querySelector('.date')) {
                var blogInfor = {
                    cate: blogItem.querySelector('.category').textContent,
                    title: blogItem.querySelector('.title').textContent,
                    date: blogItem.querySelector('.date').textContent,
                    img: blogItem.querySelector('.bg-img img').getAttribute('src'),
                }
            }

            // Save blog item information to localStorage
            localStorage.setItem('selectedBlog', JSON.stringify(blogInfor));
        });
    });
}

// Extract blog item information from localStorage
let selectedBlogInfo = JSON.parse(localStorage.getItem('selectedBlog'));

// Display blog information on the blog details page
if (document.querySelector('.blog-detail-page')) {
    if (selectedBlogInfo !== null) {
        if (document.querySelector('.category') && document.querySelector('.title') && document.querySelector('.main-img img')) {
            document.querySelector('.category').textContent = selectedBlogInfo.cate;
            document.querySelector('.title').textContent = selectedBlogInfo.title;
            document.querySelector('.date').textContent = selectedBlogInfo.date;
            document.querySelector('.main-img img').src = selectedBlogInfo.img;
        }
    }
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


// add remove wishlist product in shop
const likeBlocks = document.querySelectorAll('.like-block')

if (likeBlocks) {
    likeBlocks.forEach(likeBlock => {
        likeBlock.addEventListener('click', (e) => {
            e.preventDefault()
            if (likeBlock.classList.contains('liked')) {
                likeBlock.querySelector('i').classList.replace('ph-fill', 'ph-bold')
            } else {
                likeBlock.querySelector('i').classList.replace('ph-bold', 'ph-fill')
            }

            likeBlock.classList.toggle('liked')
        })
    })
}



// Get product information when click on a product item
// Get all product entries on the list page
const productItems = document.querySelectorAll('.product-item');

// Initialize selectedproduct in localStorage
let selectedProduct = localStorage.getItem('selectedProduct');

// Handle click events for each product entry
if (productItems) {
    productItems.forEach(productItem => {
        productItem.addEventListener('click', () => {
            // Listen for click events, get product information, save to productInfor
            var productInfor = {
                name: productItem.querySelector('.name').textContent,
                price: productItem.querySelector('.price').textContent,
                star: productItem.querySelector('.star').textContent,
                img: productItem.querySelector('.bg-img img').getAttribute('src'),
            }

            // Save product item information to localStorage
            localStorage.setItem('selectedProduct', JSON.stringify(productInfor));
        });
    });
}

// Display product information on the product details page
if (document.querySelector('.product-detail-heading')) {
    // Extract product item information from localStorage
    let selectedProductInfo = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProductInfo !== null) {
        if (document.querySelector('.name') && document.querySelector('.price') && document.querySelector('.star') && document.querySelector('.bg-img img')) {
            document.querySelector('.name').textContent = selectedProductInfo.name;
            document.querySelector('.price').textContent = selectedProductInfo.price;
            document.querySelector('.star').innerHTML = selectedProductInfo.star;
            document.querySelector('.bg-img img').src = selectedProductInfo.img;
        }
    }
}


// cart modal
const cartBtns = document.querySelector('.header-menu .bag-icon')
const cartModal = document.querySelector('.js-cart-modal')
const cartModalContainer = document.querySelector('.js-cart-modal-container')
const closeCart = document.querySelector('.js-modal-close')

//Function show modal cart
function showCartModal() {
    cartModal.classList.add('open')
    document.querySelector('body').style.overflow = 'hidden'
}

//Function close modal cart
function removeCartModal() {
    cartModal.classList.remove('open')
    document.querySelector('body').style.overflow = 'unset'
}

// listen event click bag icon on header menu
if (cartBtns) {
    cartBtns.addEventListener('click', showCartModal)
}

//listen event click and close modal cart
closeCart.addEventListener('click', removeCartModal)

//listen event click outside modal-container and close modal cart
cartModal.addEventListener('click', removeCartModal)

//Stop prevent default when click on container modal cart
cartModalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})


// Initialize cartStore in localStorage
// Get cartStore from localStorage.
let cartStore = JSON.parse(localStorage.getItem('cartStore'));

// Check if 'cartStore' already exists in localStorage.
if (localStorage.getItem('cartStore') === null) {
    // If it does not exist, initialize 'cartStore' with default value (empty array).
    localStorage.setItem('cartStore', JSON.stringify([]));
}

// Set the quantity in the shopping cart on header menu
const numberIconBag = document.querySelector('.header-menu .bag-icon span')
if (cartStore) {
    numberIconBag.innerHTML = cartStore.length
}


// Display list product in cart on the modal cart
const showProductToCart = () => {
    if (cartModal) {
        const listProductModalCart = document.querySelector('.cart-modal .cart-modal-list')
        listProductModalCart.innerHTML = ``

        if (cartStore && cartStore.length > 0) {
            // Total money cart
            var totalModalCart = 0

            cartStore.forEach(list => {
                const productItem = document.createElement('div')
                productItem.classList.add('main-item', 'pt-24', 'pb-24')
                productItem.innerHTML = `
                    <img class="item-img" src="${list.prdImg}" alt="${list.prdName}"/>
                    <div class="item-infor"> 
                        <div class="item-name text-button-small">${list.prdName}</div>
                        <div class="item-price caption1">Price: 
                            <span>${list.prdPrice}</span>
                        </div>
                        <div class="quantity-block"> 
                            <span class="caption1">Quantity: 
                                <span class="quantity">${list.prdQuantity}</span>
                            </span>
                        </div>
                    </div>
                    <div class="item-remove"> 
                        <i class="ph-fill ph-x-circle fs-20 pointer text-on-surface-variant1"></i>
                    </div>
                `;
                listProductModalCart.appendChild(productItem)
                if (list.prdQuantity > 1) {
                    document.querySelector('.list .item .quantity-block .ph-minus')
                }

                // Total money cart
                totalModalCart += list.totalPrdPrice
            })

            // Set total money cart
            document.querySelector('.cart-modal .footer-heading .heading-price').innerHTML = `$${totalModalCart}.00`
        }
        else {
            listProductModalCart.innerHTML = `<div class="text-button pt-16">No product in your shopping cart!</div>`
            document.querySelector('.cart-modal .footer-heading .heading-price').innerHTML = `$0`
        }
    }
}

showProductToCart()


// Add product to cart in product detail
const reduceNumberCarts = document.querySelectorAll('.list .item .quantity-block .ph-minus')
const increaseNumberCarts = document.querySelectorAll('.list .item .quantity-block .ph-plus')
const addToCartBtn = document.querySelector('.prd-quantity .block-button a')

if (addToCartBtn) {
    // Increase quantity product in product detail
    increaseNumberCarts.forEach(increaseNumberCart => {
        increaseNumberCart.addEventListener('click', function () {
            let parentItem = increaseNumberCart.parentElement
            let quantity = parentItem.querySelector('span').innerHTML
            let iconLeft = parentItem.querySelector('.ph-minus')

            quantity = Number(quantity) + 1
            parentItem.querySelector('span').innerHTML = quantity

            // Enable minus button
            if (quantity > 1) {
                iconLeft.classList.remove('disable')
            }
        })
    })

    // Reduce quantity product in product detail
    reduceNumberCarts.forEach(reduceNumberCart => {
        reduceNumberCart.addEventListener('click', function () {
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
        })
    })


    // Handle add product to cart
    addToCartBtn.addEventListener('click', () => {
        // Get product infor
        const prdName = document.querySelector('.name').textContent
        const prdPrice = document.querySelector('.price').textContent
        const prdImg = document.querySelector('.bg-img img').getAttribute('src')
        const prdQuantity = document.querySelector('.prd-quantity .quantity-block span').textContent
        // Removes all characters that are not numbers or periods from the product price string. 
        // Then we convert it to a floating point number (parseFloat()) to perform the calculation.
        const totalPrdPrice = Number(prdQuantity) * parseFloat(prdPrice.replace(/[^0-9.]/g, ''))

        // Save product infor to productDetailInfor
        var productDetailInfor = {
            prdName: prdName,
            prdPrice: prdPrice,
            prdImg: prdImg,
            prdQuantity: prdQuantity,
            totalPrdPrice: totalPrdPrice,
        };

        // Add product to cartStore
        cartStore.push(productDetailInfor);

        // Save cartStore to localStorage
        localStorage.setItem('cartStore', JSON.stringify(cartStore));

        // Increase the quantity in the shopping cart on header menu
        numberIconBag.innerHTML = cartStore.length
        showCartModal()
        showProductToCart()
    })
}



// Display list product in cart on the shopping cart page
if (document.querySelector('.cart-block')) {
    const listProduct = document.querySelector('.cart-block .list-product .list')

    if (cartStore && cartStore.length > 0) {
        cartStore.forEach(list => {
            const productItem = document.createElement('div')
            productItem.classList.add('item', 'pt-20', 'pb-16', 'border-underline-outline')
            productItem.innerHTML = `
                <div class="row">
                    <div class="col-6">
                        <div class="flex-item-center"> 
                            <div class="bg-img pr-28 pl-28 flex-center border-outline bora-8">
                                <img class="w-100" src="${list.prdImg}" alt="${list.prdName}"/>
                            </div>
                            <div class="name text-button pl-16">${list.prdName}</div>
                        </div>
                    </div>
                    <div class="col-1 flex-center">
                        <div class="text-button price">${list.prdPrice}</div>
                    </div>
                    <div class="col-2 flex-center">
                        <div class="quantity-block flex-item-center border-outline bora-4">
                            ${list.prdQuantity > 1
                    ? `
                                        <i class="ph ph-minus"></i>
                                    `
                    : `
                                        <i class="ph ph-minus disable"></i>
                                    `
                }
                            <span class="text-button quantity">${list.prdQuantity}</span>
                            <i class="ph ph-plus"></i>
                        </div>
                    </div>
                    <div class="col-2 flex-center">
                        <div class="text-button total">$${list.totalPrdPrice}.00</div>
                    </div>
                    <div class="col-1 flex-center"> <i class="ph-fill ph-x-circle fs-20 pointer text-on-surface-variant1"></i></div>
                </div>
            `;
            listProduct.appendChild(productItem)
        })
    } else {
        listProduct.innerHTML = `<div class="text-button">No product in your shopping cart!</div>`
        document.querySelector('.discount-block span.discount').innerHTML = `0`
        document.querySelector('.discount-block >div:last-child span:first-child').innerHTML = `$`
    }


    // Function handle progress, total money 
    const handleShoppingCartPage = () => {
        // Handle total price list products
        const totalPricePrds = document.querySelector('.checkout-block span.total-product')
        const arrayPrd = document.querySelectorAll('.list-product .list .item')
        var totalPricePrdsNew = 0

        arrayPrd.forEach(item => {
            const total = item.querySelector('.total')
            totalPricePrdsNew += parseFloat(total.innerHTML.replace(/[^0-9.]/g, ''))
        })
        totalPricePrds.innerHTML = totalPricePrdsNew

        // Handle total price carts
        const totalPriceCart = document.querySelector('.total-cart-block span.total-cart')
        const discountPrice = document.querySelector('.discount-block span.discount')
        totalPriceCart.innerHTML = Number(totalPricePrds.innerHTML) - Number(discountPrice.innerHTML)


        // Handle price heading (Buy ... more to get Freeship)
        // You can change to any number
        var totalPriceToFreeship = 1000
        const priceToFreeShip = document.querySelector('.cart-block .heading span.price')
        priceToFreeShip.innerHTML = Number(totalPriceToFreeship) - Number(totalPricePrds.innerHTML)

        if (Number(priceToFreeShip.innerHTML) <= 0) {
            priceToFreeShip.innerHTML = '0'
        }

        // Handle progress heading
        const progressLine = document.querySelector('.tow-bar-block .progress-line')
        var percentProgress = ((Number(priceToFreeShip.innerHTML) / Number(totalPriceToFreeship)) * 100)
        progressLine.style.width = 100 - Number(percentProgress) + '%'
    }

    handleShoppingCartPage()


    // increaseQuantity, reduceQuantity button
    const increaseQuantity = document.querySelectorAll('.item .quantity-block .ph-plus')
    const reduceQuantity = document.querySelectorAll('.item .quantity-block .ph-minus')
    const quantityBlock = document.querySelectorAll('.item .quantity-block')

    quantityBlock.forEach(item => {
        if (Number(item.querySelector('.quantity').innerHTML) == 1) {
            item.querySelector('.ph-minus').style.pointerEvents = "none"
        }
    })


    increaseQuantity.forEach(increaseIcon => {
        increaseIcon.addEventListener('click', function () {
            let parentItem = increaseIcon.parentElement
            let quantity = parentItem.querySelector('span').innerHTML
            let iconLeft = parentItem.querySelector('.ph-minus')

            quantity = Number(quantity) + 1
            parentItem.querySelector('span').innerHTML = quantity

            // Enable minus button
            if (quantity > 1) {
                iconLeft.classList.remove('disable')
                iconLeft.style.pointerEvents = "unset"
            }

            // Handle total price product item
            const productItem = parentItem.parentElement.parentElement.parentElement
            const pricePrd = productItem.querySelector('.price').innerHTML
            const totalPricePrdItem = productItem.querySelector('.total')

            totalPricePrdItem.innerHTML = `$${parseFloat(pricePrd.replace(/[^0-9.]/g, '')) * quantity}.00`


            handleShoppingCartPage()

            // // Save product infor to productDetailInfor
            // var productDetailInfor = {
            //     prdName: prdName,
            //     prdPrice: prdPrice,
            //     prdImg: prdImg,
            //     prdQuantity: quantity,
            //     totalPrdPrice: totalPricePrdItem,
            // };

            // // Add product to cartStore
            // cartStore.push(productDetailInfor);

            // // Save cartStore to localStorage
            // localStorage.setItem('cartStore', JSON.stringify(cartStore));
        })
    })


    reduceQuantity.forEach(reduceIcon => {
        reduceIcon.addEventListener('click', function () {
            let parentItem = reduceIcon.parentElement
            let quantity = parentItem.querySelector('span').innerHTML
            let iconLeft = parentItem.querySelector('.ph-minus')

            quantity = Number(quantity) - 1
            parentItem.querySelector('span').innerHTML = quantity

            // Enable minus button
            if (quantity <= 1) {
                iconLeft.classList.add('disable')
                iconLeft.style.pointerEvents = "none";
            }

            // Handle total price product item
            const productItem = parentItem.parentElement.parentElement.parentElement
            const pricePrd = productItem.querySelector('.price').innerHTML
            const totalPricePrdItem = productItem.querySelector('.total')

            totalPricePrdItem.innerHTML = `$${parseFloat(pricePrd.replace(/[^0-9.]/g, '')) * quantity}.00`

            handleShoppingCartPage()
        })
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




// Check out page
// Show, hide login block in checkout
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

// Show, hide payment type in checkout
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


if (document.querySelector('.checkout-block-main')) {
    const listProductCheckout = document.querySelector('.checkout-block-main .checkout-block .list-product-checkout')

    if (cartStore && cartStore.length > 0) {
        // Total money cart
        var totalCheckOut = 0

        cartStore.forEach(list => {
            const productItem = document.createElement('div')
            productItem.classList.add('product', 'flex-between', 'pb-12', 'border-underline-outline', 'mt-20', 'gap-8')
            productItem.innerHTML = `
                <div class="left flex-item-center gap-8">
                    <div class="bg-img flex-center border-outline">
                        <img src="${list.prdImg}" alt="${list.prdName}"/>
                    </div>
                    <span class="text-button">${list.prdName}</span>
                </div>
                <div class="right flex-item-center text-end"> 
                    <div class="quantity text-button">${list.prdQuantity} x 
                    </div>
                    <div class="text-button pl-4 price">${list.prdPrice}</div>
            </div>
            `;
            listProductCheckout.appendChild(productItem)

            // Set total money cart
            totalCheckOut += list.totalPrdPrice
        })

        // Handle total price cart
        document.querySelector('.total-block .total-product').innerHTML = `$${totalCheckOut}.00`
        const discountCheckout = document.querySelector('.discount-block span.discount').innerHTML

        document.querySelector('.total-cart-block .total-cart').innerHTML = `$${Number(totalCheckOut - discountCheckout)}.00`
    } else {
        listProductCheckout.innerHTML = `<div class="text-button">No product in your shopping cart!</div>`
    }
}
