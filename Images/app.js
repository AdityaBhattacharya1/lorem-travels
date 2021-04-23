// Caching slider variables
const imageSlides = document.getElementsByClassName('imageSlides')
const circles = document.getElementsByClassName('circle')
const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')
let counter = 0

/* Pre-loader zone (optional; just uncomment the code below to make the preloader functional.):
window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});*/

// Click-slideshow zone
let box = document.querySelectorAll('.box')

box.forEach((block) =>
    block.addEventListener('click', () => {
        block.classList.toggle('active')
    })
)

// Navbar zone
const navbar = document.getElementById('navbar')
const navbarToggle = navbar.querySelector('.navbar-toggle')

function openMobileNavbar() {
    navbar.classList.add('opened')
    navbarToggle.setAttribute('aria-label', 'Close navigation menu.')
}

function closeMobileNavbar() {
    navbar.classList.remove('opened')
    navbarToggle.setAttribute('aria-label', 'Open navigation menu.')
}

navbarToggle.addEventListener('click', () => {
    navbar.classList.contains('opened')
        ? closeMobileNavbar()
        : openMobileNavbar()
})

const navbarMenu = navbar.querySelector('.navbar-menu')
const navbarLinksContainer = navbar.querySelector('.navbar-links')

navbarLinksContainer.addEventListener('click', (clickEvent) => {
    clickEvent.stopPropagation()
})

navbarMenu.addEventListener('click', closeMobileNavbar)

// responsive (analog) slideshow zone
function hideImages() {
    for (let i = 0; i < imageSlides.length; i++) {
        imageSlides[i].classList.remove('visible')
    }
}

function removeDots() {
    for (let i = 0; i < imageSlides.length; i++) {
        circles[i].classList.remove('dot')
    }
}

// image loop function
function imageLoop() {
    let currentImage = imageSlides[counter]
    let currentDot = circles[counter]
    currentImage.classList.add('visible')
    removeDots()
    currentDot.classList.add('dot')
    counter++
}

// arrow buttons and event listeners
function arrowClick(e) {
    let target = e.target
    if (target == leftArrow) {
        clearInterval(imageSlideshowInterval)
        hideImages()
        removeDots()
        if (counter === 1) {
            counter = imageSlides.length - 1
            imageLoop()
            imageSlideshowInterval = setInterval(slideshow, 3000)
        } else {
            counter--
            counter--
            imageLoop()
            imageSlideshowInterval = setInterval(slideshow, 3000)
        }
    } else if (target === rightArrow) {
        clearInterval(imageSlideshowInterval)
        hideImages()
        removeDots()
        if (counter == imageSlides.length) {
            counter = 0
            imageLoop()
            imageSlideshowInterval = setInterval(slideshow, 3000)
        } else {
            imageLoop()
            imageSlideshowInterval = setInterval(slideshow, 3000)
        }
    }
}

leftArrow.addEventListener('click', arrowClick)
rightArrow.addEventListener('click', arrowClick)

// Image slide function
function slideshow() {
    if (counter < imageSlides.length) {
        imageLoop()
    } else {
        counter = 0
        hideImages()
        imageLoop()
    }
}

// shows first image, and then calls the time interval
setTimeout(slideshow, 1000)
let imageSlideshowInterval = setInterval(slideshow, 3000)

let testim = document.getElementById('testim'),
    testimDots = Array.prototype.slice.call(
        document.getElementById('testim-dots').children
    ),
    testimContent = Array.prototype.slice.call(
        document.getElementById('testim-content').children
    ),
    testimLeftArrow = document.getElementById('left-arrow'),
    testimRightArrow = document.getElementById('right-arrow'),
    testimSpeed = 3000,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30

window.onload = function () {
    // Testimonials zone
    function playSlide(slide) {
        for (let k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove('active')
            testimContent[k].classList.remove('inactive')
            testimDots[k].classList.remove('active')
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add('inactive')
        }
        testimContent[slide].classList.add('active')
        testimDots[slide].classList.add('active')

        currentActive = currentSlide

        clearTimeout(testimTimer)
        testimTimer = setTimeout(function () {
            playSlide((currentSlide += 1))
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener('click', function () {
        playSlide((currentSlide -= 1))
    })

    testimRightArrow.addEventListener('click', function () {
        playSlide((currentSlide += 1))
    })

    for (let l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener('click', function () {
            playSlide((currentSlide = testimDots.indexOf(this)))
        })
    }

    playSlide(currentSlide)

    // keyboard shortcuts
    document.addEventListener('keyup', function (e) {
        switch (e.code) {
            case 37:
                testimLeftArrow.click()
                break

            case 39:
                testimRightArrow.click()
                break

            case 39:
                testimRightArrow.click()
                break

            default:
                break
        }
    })

    testim.addEventListener('touchstart', function (e) {
        touchStartPos = e.changedTouches[0].clientX
    })

    testim.addEventListener('touchend', function (e) {
        touchEndPos = e.changedTouches[0].clientX

        touchPosDiff = touchStartPos - touchEndPos

        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click()
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click()
        } else {
            return
        }
    })
}

// Dark mode toggler zone
const darkBtn = document.querySelector('#dark-toggle-btn')
const theme = document.querySelector('#theme-link')

function toggler() {
    if (theme.getAttribute('href') === 'light-mode.css') {
        theme.href = 'dark-mode.css'
    } else {
        theme.href = 'light-mode.css'
    }
}

darkBtn.addEventListener('click', toggler)

/* And, if you need to monitor the visits, time spent active on the website
   and other analytics on this website, Google Analytics is also provided below.
   Just uncomment the code below (This is just basic tracking. To enable or disable certain tracking
   features, go to https://developers.google.com/analytics/devguides/collection/analyticsjs):

let dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
if (dnt != "1" && dnt != "yes") {
    (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
        i[r] ||
        function () {
            (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(
        window,
        document,
        "script",
        "https://www.google-analytics.com/analytics.js",
        "ga"
    );
    ga("create", "", "auto");
    ga("send", "pageview");
}*/

// Lazy loading section
document.addEventListener('DOMContentLoaded', function () {
    let lazyloadImages

    if ('IntersectionObserver' in window) {
        lazyloadImages = document.querySelectorAll('.lazy')
        let imageObserver = new IntersectionObserver(function (
            entries,
            observer
        ) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let image = entry.target
                    image.src = image.dataset.src
                    image.classList.remove('lazy')
                    imageObserver.unobserve(image)
                }
            })
        })

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image)
        })
    } else {
        let lazyloadThrottleTimeout
        lazyloadImages = document.querySelectorAll('.lazy')

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout)
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                let scrollTop = window.pageYOffset
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < window.innerHeight + scrollTop) {
                        img.src = img.dataset.src
                        img.classList.remove('lazy')
                    }
                })
                if (lazyloadImages.length == 0) {
                    document.removeEventListener('scroll', lazyload)
                    window.removeEventListener('resize', lazyload)
                    window.removeEventListener('orientationChange', lazyload)
                }
            }, 20)
        }

        document.addEventListener('scroll', lazyload)
        window.addEventListener('resize', lazyload)
        window.addEventListener('orientationChange', lazyload)
    }
})
