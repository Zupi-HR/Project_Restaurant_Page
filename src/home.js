
import Icon from './honeycomb.svg';
import './home.css';

const classNames = ["firstDiv", "secondDiv", "thirdDiv"];

const divContent = [
    "<p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p><p>Goldilocks</p>",
    "<h3>Hours</h3><p>Sunday: 8am - 8pm</p><p>Monday: 6am - 6pm</p><p>Tuesday: 6am - 6pm</p><p>Wednesday: 6am - 6pm</p><p>Thursday: 6am - 10pm</p><p>Friday: 6am - 10pm</p><p>Saturday: 8am - 10pm</p>",
    "<h3>Location</h3><p>123 Forest Drive, Forestville, Maine</p>"
]

function createElements() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('honey-comb');
    mainContent.appendChild(myIcon);
    const h1 = document.createElement('h1');
    h1.textContent = "Beary's Breakfast bar";
    mainContent.appendChild(h1);

    for (let index = 0; index < 3; index++) {
        const div = document.createElement('div');
        div.classList.add(classNames[index]);
        div.innerHTML = `${divContent[index]}`;
        mainContent.appendChild(div);
    }




    return mainContent;
}



function createContent() {

    return createElements();



}



export default createContent;