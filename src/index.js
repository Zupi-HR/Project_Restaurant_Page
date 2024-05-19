import createNavigation from './navigation.js';
import createElements from './home.js';
import createMenu from './menu.js';
import './index.css';


const header = document.querySelector('header');
const nav = document.querySelector('nav');
const content = document.getElementById('content');


content.appendChild(createElements());

nav.addEventListener('click', function(event) {
  if (event.target.classList.contains("menu-btn")) {
    content.replaceChildren();
    content.appendChild(createMenu());
    
  } else if (event.target.classList.contains("home-btn")) {
    content.replaceChildren();
    content.appendChild(createElements());
  }
})


console.log("hello")

if (module.hot) {
    module.hot.accept();
  }



