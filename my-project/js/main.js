import "../styles/style.css";
import { store } from "./shop";
console.log(store);
const DOMSelectors = {
    all: document.getElementById("all"),
    all2: document.getElementById("all2"),
    loved: document.getElementById("featured"),
    classics: document.getElementById("classic"),
    modern: document.getElementById("modern"),
    checkbox: document.querySelector('.checkbox'),
    shop: document.querySelector('.storedisplay'),
    featured: document.querySelector('.home'),
    card: document.querySelector('.card'),
    year: document.querySelector('.year'),
    searchbar: document.getElementById("searchBar"),
    itemimg: document.getElementsByClassName("itemimg")
}


