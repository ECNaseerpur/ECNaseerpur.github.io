const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
    if (darkMode.checked) {
        document.body.classList.add('dark:text-white', 'dark:bg-gray-900');   
    }
    else {
        document.body.classList.remove('dark:text-white', 'dark:bg-gray-900');
    }
})