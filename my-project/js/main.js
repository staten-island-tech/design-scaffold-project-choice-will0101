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
    itemimg: document.getElementById("itemimg")
}



window.addEventListener("DOMContentLoaded", function() {
    displayItems(store);
});

DOMSelectors.all.addEventListener('click', function() {
    displayItems(store)
});

DOMSelectors.all2.addEventListener('click', function() {
    displayItems(store)
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

DOMSelectors.loved.addEventListener('click', function() {
    const loved = store.filter((store) => store.loved === true);
    DOMSelectors.shop.innerHTML = ""
    loved.forEach((heart) => {
        DOMSelectors.shop.insertAdjacentHTML("afterbegin", `<article class="card">
    <h2 class="itemname">${heart.name}</h2>
    <h3 class="itemcolor">${heart.color}</h3>
    <img class="itemimg" src="${heart.img}"alt="${heart.name}"/>
    <h4 class="year">${heart.year} <span class="outofstock"> <img class="favstar" src="https://freepngimg.com/save/608-gold-star-png-image/256x256"</span></h4>
    </article>`)
    });
});
