import "../styles/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".toptags", {
    x:-30,
    duration:1
});

gsap.to(".logo", {
    x:30,
    duration:1
});

gsap.to(".bigphoto", {
    scrollTrigger: {
        trigger: ".mapcardimg",
        scrub: "true",
        toggleActions: "restart none none none"
    },
    y: -100,
});

gsap.to(".mapcardimg", {
    scrollTrigger: {
        trigger: ".mapcardimg",
        scrub: "true",
        toggleActions: "restart none none none"
    },
    y: -100,
});

gsap.to(".gpscrollanim", {
    scrollTrigger: {
        trigger: ".gpscrollanim",
        scrub: "true",
        toggleActions: "restart none none none"
    },
    y: -100,
});

gsap.to(".mapcontainer", {
    scrollTrigger: {
        trigger: ".mapcontainer",
        scrub: "true",
        toggleActions: "restart none none none"
    },
    y: -100,
});