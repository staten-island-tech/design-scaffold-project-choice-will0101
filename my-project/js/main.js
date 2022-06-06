import "../styles/style.css";
import { gsap } from "gsap";


gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box",
        toggleActions: "restart none none none"
    },
    x:400,
    rotation: 360,
    duration:3
});


