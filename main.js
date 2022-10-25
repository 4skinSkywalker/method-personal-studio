const navMenuList = document.querySelector(".nav-menu-list");

navMenuList.addEventListener("click", function (el) {
    if (el && el.target && el.target.nodeName === "A") {
        document.querySelector("#nav-toggler").checked = false;
    }
});

const backToTop = document.getElementById("back-to-top");

window.onscroll = function () {
    console.log(1)
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const carouselKeywords = ["Allenatori", "Motivatori"];
const carouselTextEl = document.querySelector(".carousel-text");

async function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    });
}

async function animateCarouselText() {
    for (const word of carouselKeywords) {
        const spans = word.split("").map(function (letter) {
            const el = document.createElement("SPAN");
            el.innerHTML = letter;
            return el;
        });
        for (const span of spans) {
            carouselTextEl.appendChild(span);
            await delay(50);
            span.style.opacity = 1;
            span.style.transform = "translateX(0)";
        }
        await delay(2000);
        for (const span of spans) {
            span.style.opacity = 0;
        }
        carouselTextEl.innerHTML = "";
    }
    await animateCarouselText();
}

animateCarouselText();

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
        triggerElement: "#new-trigger",
        offset: 50, // move trigger to center of element
        duration: 200
    })
    .setTween(
        new TimelineMax ()
            .add([
                TweenMax.fromTo(
                    "#intro-section .stroked-text",
                    1,
                    { marginTop: 0, opacity: 1 },
                    { marginTop: -100, opacity: 0, ease: Linear.easeNone }
                ),
                TweenMax.fromTo(
                    "#intro-section .intro-bg",
                    1,
                    { left: 0, opacity: 1 },
                    { left: 100, opacity: 0, ease: Linear.easeNone }
                )
            ])
    )
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: '#bio-section',
        triggerHook: 0.9, // show, when scrolled 10% into view
        offset: 50 // move trigger to center of element
    })
    .setClassToggle(".bio-bg", "visible")
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: '#bio-section',
        triggerHook: 0.9, // show, when scrolled 10% into view
        offset: 400 // move trigger to center of element
    })
    .setClassToggle(".bio-text", "visible")
    // .addIndicators()
    .addTo(controller);

const sellingPointsMotto = document.querySelectorAll("#selling-points h2 span");
for (let i = 0; i < sellingPointsMotto.length; i++) {
    new ScrollMagic.Scene({
            triggerElement: '#selling-points',
            offset: -50+i*50
        })
        .setClassToggle(sellingPointsMotto[i], "visible")
        // .addIndicators()
        .addTo(controller);
}

new ScrollMagic.Scene({
        triggerElement: '#selling-points',
        offset: -50
    })
    .setClassToggle(".selling-points-grid img", "visible")
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: '#selling-points',
        offset: 100
    })
    .setClassToggle(".sp--1 h3", "accented")
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: '#selling-points',
        offset: 300
    })
    .setClassToggle(".sp--2 h3", "accented")
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: '#selling-points',
        offset: 500
    })
    .setClassToggle(".sp--3 h3", "accented")
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: '#contacts',
        offset: -100
    })
    .setClassToggle(".top-left-deco", "adjusted")
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: '#contacts',
        offset: 50
    })
    .setClassToggle(".contact-list-item", "armed")
    // .addIndicators()
    .addTo(controller);

let pages = [...document.querySelectorAll(".carousel-page")];
let ctrL = document.querySelector(".carousel-control.left");
let ctrR = document.querySelector(".carousel-control.right");

let curr = 0;

ctrL.addEventListener("click", handleCtrlTouch(-1));
ctrR.addEventListener("click", handleCtrlTouch(1));

function handleCtrlTouch(increment) {
    return function() {
    
    pages[curr].classList.remove("active");
    
    if (curr === 0 && increment < 0) {
        curr = pages.length - 1;
    } else {
        curr = (curr + increment) % pages.length;
    }
    
    pages[curr].classList.add("active");
    
    }
}
