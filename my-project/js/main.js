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
    scale: 1.025,
    duration:1
});

gsap.to(".mapcardimg", {
    scrollTrigger: {
        trigger: ".mapcardimg",
    },
    y: -50,
    duration:.5
});

gsap.to(".gpscrollanim", {
    scrollTrigger: {
        trigger: ".mapcardimg",
    },
    y: -50,
    duration:.5
});