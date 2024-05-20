import './common.css';
import './menu.css';
import Icon from './honeycomb.svg';
import honeyTea from './menuImages/beary-tea.jpeg';
import bearyTea from './menuImages/honey-tea.jpg';
import toastAndJam from './menuImages/toast_and_jam.jpg';
import freshFruit from './menuImages/fresh_fruit.jpeg';

class Item {
    constructor(name, description, price, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}

const beverages = [
    new Item('Honey Tea', 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!', '$2', honeyTea),
    new Item('Beary Tea', 'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.', '$3', bearyTea)
];



const sides = [
    new Item('Toast and Jam', 'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam', '$1', toastAndJam),
    new Item('Fresh Fruit', 'A small bowl of fresh fruit, whatever we find at the market for the day', '$3', freshFruit)
]



function createMenu() {
    const mainContent = document.createElement('mainContent');
    mainContent.classList.add('mainContent');
    const h1 = document.createElement('h1');
    h1.textContent = "Menu";
    mainContent.appendChild(h1);
    let honeyComb_beverages = document.createElement('img');
    honeyComb_beverages.classList.add('honeyComb');
    honeyComb_beverages.src = Icon

    const beveragesH2 = document.createElement('h2');
    beveragesH2.textContent = 'Beverages';
    beveragesH2.classList.add('home_h2');
    beveragesH2.appendChild(honeyComb_beverages);
    mainContent.appendChild(beveragesH2);

    const beveragesContent = beverages.map((item) => {
        return `
   <div class="menu-item">
     <h3 class="menu-item__name">${item.name}</h3>
     <p class="menu-item__description">${item.description}</p>
     <p class="menu-item__price">${item.price}</p>
     <img class="menu-item__image" src="${item.image}" width="254" height="254">
     </div>
    `
    }).join("");
    const beveragesContainer = document.createElement('div');
    beveragesContainer.classList.add('beverages-container');
    beveragesContainer.innerHTML = beveragesContent;
    mainContent.appendChild(beveragesContainer);

    const sidesH2 = document.createElement('h2');
    sidesH2.classList.add('home_h2');
    sidesH2.textContent = "Sides";
    const honeyComb_sides = document.createElement('img');
    honeyComb_sides.src = Icon;
    honeyComb_sides.classList.add('honeyComb');
    sidesH2.appendChild(honeyComb_sides);
    mainContent.appendChild(sidesH2);

    const sidesContent = sides.map((item) => {
        return `
        <div class="menu-item">
          <h3 class="menu-item__name">${item.name}</h3>
          <p class="menu-item__description">${item.description}</p>
          <p class="menu-item__price">${item.price}</p>
          <img class="menu-item__image" src="${item.image}" width="254" height="254">
          </div>
          `
    }).join("");
    
    const sidesContainer = document.createElement('div');
    sidesContainer.classList.add('sides-container');
    sidesContainer.innerHTML = sidesContent;
    mainContent.appendChild(sidesContainer);
    return mainContent;
}

export default createMenu;