const ViewOnline = document.querySelector('.viewOnline');
const boxContainer = document.getElementById('book-container');
const onlineBook = document.querySelector('.online-book');
const searchbar = document.getElementById('search-bar');

ViewOnline.addEventListener('click', () => {
    boxContainer.classList.add('hidden');
    onlineBook.classList.remove('hidden');
    searchbar.classList.add('hidden');
})