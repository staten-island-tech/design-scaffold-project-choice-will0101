import "../styles/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DOMSelectors = {
    checkbox: document.querySelector('.checkbox'),
    wrap: document.querySelector('.hoveralbum'),
    img1: document.querySelector('.img-1'),
    img2: document.querySelector('.img-2'),
    bigtitle: document.querySelector('.bigtitle'),
    bigtitle2: document.querySelector('.bigtitle2')
}

DOMSelectors.checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});



ScrollTrigger.defaults({
    scrub: "true",
    toggleActions: "restart none none none"
});

gsap.to(".toptags", {
    x:-30,
    duration:1
});

gsap.to(".logo", {
    x:30,
    duration:1
});
 
gsap.to(".scrolleranim", {
    scrollTrigger: {
        trigger: ".scrolleranim",
    },
    y: -200,
});
 
gsap.to(".gpscrollanim", {
    scrollTrigger: {
        trigger: ".gpscrollanim",
    },
    y: -200,
});
 
gsap.to(".mapcontainer", {
    scrollTrigger: {
        trigger: ".mapcontainer",
    },
    y: -200,
});
 
gsap.to("p1", {
    scrollTrigger: {
        trigger: "p1",
    },
    y: -200,
});
 
gsap.to(".p1", {
    scrollTrigger: {
        trigger: ".p1",
    },
    y: -200,
});
 
gsap.to(".p2", {
    scrollTrigger: {
        trigger: ".p2",
    },
    y: -200,
});
 
gsap.to(".p3", {
    scrollTrigger: {
        trigger: ".p3",
    },
    y: -200,
});
 
gsap.to(".p4", {
    scrollTrigger: {
        trigger: ".p4",
    },
    y: -200,
});
 
gsap.to(".p5", {
    scrollTrigger: {
        trigger: ".p5",
    },
    y: -200,
});
 
gsap.to(".item1", {
    scrollTrigger: {
        trigger: ".item1",
    },
    y: -200,
});
 
gsap.to(".item2", {
    scrollTrigger: {
        trigger: ".item2",
    },
    y: -200,
});

gsap.to(".right1", {
    scrollTrigger: {
        trigger: ".left1",
        scrub: false,
        toggleActions: "restart none complete none"
    },
    y: -5,
    duration: 1
});

gsap.to(".left1", {
    scrollTrigger: {
        trigger: ".left1",
        scrub: false,
        toggleActions: "restart none complete none"
    },
    y: 5,
    duration: 1
});

gsap.to(".right2", {
    scrollTrigger: {
        trigger: ".left2",
        scrub: false,
        toggleActions: "restart none complete none"
    },
    y: -5,
    duration: 1
});

gsap.to(".left2", {
    scrollTrigger: {
        trigger: ".left2",
        scrub: false,
        toggleActions: "restart none complete none"
    },
    y: 5,
    duration: 1
});

gsap.to(".right3", {
    scrollTrigger: {
        trigger: ".left3",
        scrub: false,
        toggleActions: "restart none complete none"
    },
    y: -5,
    duration: 1
});

gsap.to(".left3", {
    scrollTrigger: {
        trigger: ".left3",
        scrub: false,
        toggleActions: "restart none complete none"
    },
    y: 5,
    duration: 1
});

/* hover */

gsap.set(".img-1", {width:"50%"});
gsap.set(".img-2", {width:"50%"});

DOMSelectors.img1.addEventListener("mouseenter", () => {
    gsap.to(".img-1", {duration: .5, width: "60%"});
    gsap.to(".img-2", {duration: .5, width: "40%"});
});

DOMSelectors.img2.addEventListener("mouseenter", () => {
    gsap.to(".img-1", {duration: .5, width: "40%"});
    gsap.to(".img-2", {duration: .5, width: "60%"});
});

DOMSelectors.wrap.addEventListener("mouseleave", () => {
    gsap.to(".img-1", {duration: .5, width: "50%"});
    gsap.to(".img-2", {duration: .5, width: "50%"});
});

DOMSelectors.bigtitle.addEventListener("mouseenter", () => {
    gsap.to(".titlecontainer", {duration: .5, opacity:"0"});
})

DOMSelectors.bigtitle.addEventListener("mouseleave", () => {
    gsap.to(".titlecontainer", {duration: .5, opacity:"1"});
})

DOMSelectors.bigtitle2.addEventListener("mouseenter", () => {
    gsap.to(".titlecontainer", {duration: .5, opacity:"0"});
})

DOMSelectors.bigtitle2.addEventListener("mouseleave", () => {
    gsap.to(".titlecontainer", {duration: .5, opacity:"1"});
})