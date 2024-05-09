import createContent from './home';
import './style.css';

document.body.appendChild(createContent());


console.log("hello")

if (module.hot) {
    module.hot.accept();
  }



