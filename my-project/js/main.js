import "../styles/style.css";
import { store } from "./shop";
console.log(store);
const DOMSelectors = {
    all: document.getElementById("all"),
    outofstock: document.getElementById("featured"),
    shoes: document.getElementById("shoes"),
    jewelry: document.getElementById("jewelry"),
    shop: document.querySelector('.storedisplay'),
    featured: document.querySelector('.home'),
    card: document.querySelector('.card'),
    price: document.querySelector('.price'),
}

window.addEventListener("DOMContentLoaded", function() {
    displayItems(store);
});

function displayItems(store) {
    let displayStore = store.map(function(item) {
        return `<article class="card">
    <h2 class="itemname">${item.name}</h2>
    <h3 class="itemcolor">${item.color}</h3>
    <img class="itemimg" src="${item.img}" alt="${item.name}"/>
    <h4 class="price">$${item.price}</h4>
    </article>`
    });
    displayStore = displayStore.join("");
    DOMSelectors.shop.innerHTML = displayStore;
    console.log(displayStore);
};

DOMSelectors.shoes.addEventListener('click', function() {
    const shoes = store.filter((store) => store.category === "shoe");
    DOMSelectors.shop.innerHTML = ""
    shoes.forEach((shoe) => {
        DOMSelectors.shop.insertAdjacentHTML("afterbegin", `<article class="card">
    <h2 class="itemname">${shoe.name}</h2>
    <h3 class="itemcolor">${shoe.color}</h3>
    <img class="itemimg" src="${shoe.img}" alt="${store.name}"/>
    <h4 class="price">$${shoe.price}</h4>
    </article>`)
    });
});

DOMSelectors.all.addEventListener('click', function() {
    displayItems(store)
});

DOMSelectors.jewelry.addEventListener('click', function() {
    const jewelry = store.filter((store) => store.category === "jewelry");
    DOMSelectors.shop.innerHTML = ""
    jewelry.forEach((jewelry) => {
        DOMSelectors.shop.insertAdjacentHTML("afterbegin", `<article class="card">
        <h2 class="itemname">${jewelry.name}</h2>
        <h3 class="itemcolor">${jewelry.color}</h3>
        <img class="itemimg" src="${jewelry.img}" alt="${store.name}"/>
        <h4 class="price">$${jewelry.price}</h4>
        </article>`)
    });
});

DOMSelectors.outofstock.addEventListener('click', function() {
    const outofstock = store.filter((store) => store.inStock === false);
    DOMSelectors.shop.innerHTML = ""
    outofstock.forEach((outitem) => {
        DOMSelectors.shop.insertAdjacentHTML("afterbegin", `<article class="card">
    <h2 class="itemname">${outitem.name}</h2>
    <h3 class="itemcolor">${outitem.color}</h3>
    <img class="itemimg" src="${outitem.img}"alt="${outitem.name}"/>
    <h4 class="price">$${outitem.price} <span class="   outofstock"> out of stock</span></h4>
    </article>`)
    });
});