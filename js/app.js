/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelector('.sections');
const ul = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
let allSections = [...sections.children];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function selectSections(sec) {
    allSections.forEach(remover => {
        remover.classList.remove('your-active-class')
    })
    sec.classList.add('your-active-class');
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavBar() {
    allSections.forEach(element => {
        const dataNav = element.getAttribute('data-nav');
        const newLi = document.createElement('li');
        const newLink = document.createElement('a');
        const text = document.createTextNode(dataNav);

        newLink.addEventListener('click', (event) => {
            event.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
        })

        newLink.appendChild(text);
        newLink.style.color = 'black'
        newLi.appendChild(newLink)
        fragment.appendChild(newLi)

    });

    ul.appendChild(fragment)
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrolling() {
    window.addEventListener('scroll', (event) => {
        //event.preventDefault();
        allSections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top >= -50 && rect.top <= 200) {
                selectSections(sec)
                selectFromNavMenu(sec)
            }
        })

    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
function selectFromNavMenu(sec) {
    const allLinks = document.querySelectorAll('a')
    allLinks.forEach(link => {
        if (sec.getAttribute('data-nav') == link.textContent) {
            link.classList.add('nav-item-active')
        } else {
            link.classList.remove('nav-item-active')
        }
    })
}

// Set sections as active

function init() {
    createNavBar()
    scrolling()
}

init()


const btn = document.getElementById("btn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}