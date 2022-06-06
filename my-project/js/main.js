import "../styles/style.css";
import { gsap } from "gsap";


gsap.registerPlugin(ScrollTrigger);

gsap.to(".mapcardimg", {
    scrollTrigger: {
        trigger: ".mapcardimg",
        toggleActions: "restart none none none"
    },
    x:400,
    rotation: 360,
    duration:3
});


