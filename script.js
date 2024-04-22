const toggleSwitch = document.querySelector('input[type="checkbox"]');

const themeIcon = document.getElementById('themeIcon');

// Event Listener
toggleSwitch.addEventListener('change', (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});