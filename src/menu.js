import './menu.css';
import Icon from './bee.svg';


const beverages = [
    {
        name: 'Honey Tea',
        description: 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!',
        price: '$2',
        image: './menuImages/honey-tea.jpg'
    },
    {
        name: 'Beary Tea',
        description: 'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.',
        price: '$3',
        image: './menuImages/beary-tea.jpg'
    },
]

function createMenu() {
    const div = document.createElement('div');
    div.classList.add('mainContent');
    const h1 = document.createElement('h1');
    h1.textContent = "Menu";
    div.appendChild(h1);
    
   const beveragesH2 = document.createElement('h2');
   beveragesH2.textContent = 'Beverages';

   return div;
}

export default createMenu;