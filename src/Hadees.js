document.addEventListener("DOMContentLoaded", () => {
    let allBooks = [];
    let filteredBooks = [];
  
    // Fetch data from the JSON file
  fetch('/JSONs/Hadees.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        allBooks = data;
        filteredBooks = data;
        changePage(1);
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  
    // Function to display items on the page
    function displayItems(items) {
       
      const bookContainer = document.getElementById('book-container');
      bookContainer.innerHTML = '';
  
      items.forEach(book => {
        const template = document.getElementById('book-template').content.cloneNode(true);
        template.querySelector('img').src = book.image;
        template.querySelector('h5').textContent = book.title;
        template.querySelector('#viewOnline').href = book.viewOnline; // Adjusted to use pdfLink
        template.querySelector('#download').href = book.pdfLink;
  
        bookContainer.appendChild(template);
      });
    }
  
    // Function to create pagination
    function createPagination(totalPages, activePage) {
      const paginationContainer = document.getElementById('pagination');
      paginationContainer.innerHTML = '';
  
      // Create "previous" button
      const prevButton = document.createElement('a');
      prevButton.href = '#';
      prevButton.innerHTML = '&laquo;';
      prevButton.onclick = (event) => {
        event.preventDefault();
        if (activePage > 1) changePage(activePage - 1);
      };
      paginationContainer.appendChild(prevButton);
  
      // Create page buttons
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('a');
        pageButton.href = '#';
        pageButton.innerText = i;
        if (i === activePage) pageButton.classList.add('active');
        pageButton.onclick = (event) => {
          event.preventDefault();
          changePage(i);
        };
        paginationContainer.appendChild(pageButton);
      }
  
      // Create "next" button
      const nextButton = document.createElement('a');
      nextButton.href = '#';
      nextButton.innerHTML = '&raquo;';
      nextButton.onclick = (event) => {
        event.preventDefault();
        if (activePage < totalPages) changePage(activePage + 1);
      };
      paginationContainer.appendChild(nextButton);
    }
  
    // Function to handle page change
    function changePage(page) {
      const totalPages = Math.ceil(filteredBooks.length / 10);
      if (page < 1) page = 1;
      if (page > totalPages) page = totalPages;
  
      const start = (page - 1) * 10;
      const end = start + 10;
      const itemsToDisplay = filteredBooks.slice(start, end);
  
      displayItems(itemsToDisplay);
      createPagination(totalPages, page);
    }
  
    // Function to filter books based on search query
    function filterBooks() {
      const searchInput = document.getElementById('search-input');
      const searchTerm = searchInput.value.toLowerCase();
      filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchTerm));
      changePage(1);
    }
  
    // Add event listener for search input
    document.getElementById('search-input').addEventListener('input', filterBooks);
  
    // Initialize pagination with the first page as active
    changePage(1);
  });
  