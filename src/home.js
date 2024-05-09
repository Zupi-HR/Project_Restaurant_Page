import beeIcon from './bee.svg';

const navListData = ["Home", "About", "Contact"];

const classNames = ["firstDiv", "secondDiv", "thirdDiv"];



function createContent() {
    const container = document.createElement('div');
    container.classList.add("container");
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    nav.appendChild(ul);
    container.appendChild(nav);
    navListData.forEach((text) => {
        const li = document.createElement('li');
        li.classList.add(text.toLowerCase());
        li.textContent = text;
        ul.appendChild(li);
    })

    const h1 = document.createElement('h1');
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    h1.textContent = "Beary's Breakfast bar";
    mainContent.appendChild(h1);
    
    for (let index = 0; index < 3; index++) {
        const div = document.createElement('div');
        div.classList.add(classNames[index]);
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

       div.append(h1, p);
     
     mainContent.appendChild(div);
    }

    container.appendChild(mainContent);

   

    return container;
}



export default createContent;