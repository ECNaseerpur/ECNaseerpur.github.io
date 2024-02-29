document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('book-box');
    const noBooksMessage = document.getElementById('no-books-message');

    searchBox.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const bookContainers = document.querySelectorAll('.book-container > div');
        let found = false; // Flag to check if any book matches the search

        bookContainers.forEach(function(container) {
            const bookName = container.getAttribute('data-book-name').toLowerCase();

            if (bookName.includes(query)) {
                container.style.display = 'block';
                found = true; // At least one book matches
            } else {
                container.style.display = 'none';
            }
        });

        // Show or hide the "Book not available" message based on the search results
        noBooksMessage.style.display = found ? 'none' : 'block';
    });
});
