import "../styles/style.css";
import { store } from "./shop";
console.log(store);
const DOMSelectors = {
    all: document.getElementById("all"),
    outofstock: document.getElementById("featured"),
    classics: document.getElementById("classic"),
    modern: document.getElementById("modern"),
    checkbox: document.querySelector('.checkbox'),
    shop: document.querySelector('.storedisplay'),
    featured: document.querySelector('.home'),
    card: document.querySelector('.card'),
    year: document.querySelector('.year'),
}

DOMSelectors.checkbox.addEventListener('change', () => {
    document.body.classList.toggle('purple');
});

window.addEventListener("DOMContentLoaded", function() {
    displayItems(store);
});

function displayItems(store) {
    let displayStore = store.map(function(item) {
        return `<article class="card">
    <h2 class="itemname">${item.name}</h2>
    <h3 class="itemcolor">${item.color}</h3>
    <img class="itemimg" src="${item.img}" alt="${item.name}"/>
    <h4 class="year">${item.year}</h4>
    </article>`
    });
    displayStore = displayStore.join("");
    DOMSelectors.shop.innerHTML = displayStore;
    console.log(displayStore);
};

DOMSelectors.classics.addEventListener('click', function() {
    const classics = store.filter((store) => store.category === "classic");
    DOMSelectors.shop.innerHTML = ""
    classics.forEach((classic) => {
        DOMSelectors.shop.insertAdjacentHTML("afterbegin", `<article class="card">
    <h2 class="itemname">${classic.name}</h2>
    <h3 class="itemcolor">${classic.color}</h3>
    <img class="itemimg" src="${classic.img}" alt="${store.name}"/>
    <h4 class="year">${classic.year}</h4>
    </article>`)
    });
});

DOMSelectors.all.addEventListener('click', function() {
    displayItems(store)
});

DOMSelectors.modern.addEventListener('click', function() {
    const modern = store.filter((store) => store.category === "modern");
    DOMSelectors.shop.innerHTML = ""
    modern.forEach((modern) => {
        DOMSelectors.shop.insertAdjacentHTML("afterbegin", `<article class="card">
        <h2 class="itemname">${modern.name}</h2>
        <h3 class="itemcolor">${modern.color}</h3>
        <img class="itemimg" src="${modern.img}" alt="${store.name}"/>
        <h4 class="year">${modern.year}</h4>
        </article>`)
    });
});

DOMSelectors.outofstock.addEventListener('click', function() {
    const outofstock = store.filter((store) => store.loved === false);
    DOMSelectors.shop.innerHTML = ""
    outofstock.forEach((outitem) => {
        DOMSelectors.shop.insertAdjacentHTML("afterbegin", `<article class="card">
    <h2 class="itemname">${outitem.name}</h2>
    <h3 class="itemcolor">${outitem.color}</h3>
    <img class="itemimg" src="${outitem.img}"alt="${outitem.name}"/>
    <h4 class="year">${outitem.year} <span class="outofstock"> <img class="favstar" src="https://freepngimg.com/save/608-gold-star-png-image/256x256"</span></h4>
    </article>`)
    });
});