import "../styles/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DOMSelectors = {
    checkbox: document.querySelector('.checkbox'),

}

DOMSelectors.checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

ScrollTrigger.defaults({
    scrub: "true",
    toggleActions: "restart none complete none"
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
