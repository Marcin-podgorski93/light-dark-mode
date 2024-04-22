const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');

const toggleIcon = document.getElementById('toggle-icon');


// Dark Mode Style
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50% )';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
}

// Light Mode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50% )';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
}

// Switch Theme Dynamically

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
        // toggleIcon.classList.remove('fa-sun');
        // toggleIcon.classList.add('fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
        // toggleIcon.classList.remove('fa-moon');
        // toggleIcon.classList.add('fa-sun');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);