// Fetch data from the JSON file
fetch('/JSONs/books.json')
  .then(response => response.json())
  .then(data => {
    const bookContainer = document.getElementById('book-container');
    const searchInput = document.getElementById('search-input');

    // Function to filter books based on search query
    const filterBooks = () => {
      const searchTerm = searchInput.value.toLowerCase();

      // Get all book elements
      const bookElements = document.querySelectorAll('.max-h-52');

      // Iterate through each book element and show/hide based on search query
      bookElements.forEach(bookElement => {
        const bookTitle = bookElement.getAttribute('data-book-name').toLowerCase();
        const isVisible = bookTitle.includes(searchTerm);

        // Toggle visibility based on search result
        bookElement.style.display = isVisible ? 'block' : 'none';
      });
    };

    // Add event listener for search input
    searchInput.addEventListener('input', filterBooks);
  })
  .catch(error => console.error('Error fetching data:', error));
