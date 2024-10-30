let darkMode = document.querySelector("#dark-mode");

darkMode.onclick = () => {
    if(darkMode.classList.contains('bx-moon')) {
        darkMode.classList.replace('bx-moon', 'bx-sun');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--background-color', '#121212');
        document.documentElement.style.setProperty('--second-color', '#333333');
        document.documentElement.style.setProperty('--main-color', '#bb86fc');
    } else {
        darkMode.classList.replace('bx-sun', 'bx-moon');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--background-color', '#e5e5e5');
        document.documentElement.style.setProperty('--second-color', '#ffffff');
        document.documentElement.style.setProperty('--main-color', '#f29494');
    }
};

let menu = document.querySelector("#menu-icon");
let links = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    links.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove ('bx-x');
    links.classList.remove ('open')
};