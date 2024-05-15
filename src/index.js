import createNavigation from './navigation';
import createContent from './home';
import createMenu from './menu';
import './index.css';


const header = document.querySelector('header');
const nav = document.querySelector('nav');
const content = document.getElementById('content');


nav.addEventListener('click', function(event) {
  if (event.target.classList.contains("menu-btn")) {
    content.innerHTML = "";
     content.appendChild = createMenu();
  }
})

content.append(createContent());




console.log("hello")

if (module.hot) {
    module.hot.accept();
  }



