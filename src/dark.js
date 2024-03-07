const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('change', () => {
    console.log('changed');
    document.body.classList.toggle('dark');
})