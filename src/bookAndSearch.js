let allBooks = []; // Global variable to store all books data
let filteredBooks = []; // Global variable to store filtered books data

// Fetch data from the JSON file
fetch('/JSONs/books.json')
  .then(response => response.json())
  .then(data => {
    allBooks = data; // Store all books data
    filteredBooks = data; // Initialize filteredBooks with all data
    changePage(1); // Display the first page initially
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to display items on the page
function displayItems(items) {
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML = ''; // Clear previous content

  // Iterate through each book in the data array
  items.forEach(book => {
    // Create a div element for each book 
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('max-h-52', 'md:max-h-96', 'relative');

    // Set the data attributes for book name and image
    bookDiv.setAttribute('data-book-name', book.title);

    // Create an img element for the book image
    const imgElement = document.createElement('img');
    imgElement.src = book.image;
    imgElement.classList.add('w-full', 'h-[75%]', 'object-contain');
    imgElement.alt = 'Image Not Available - ECN';

    // Create a div element for book details
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('text-center', 'flex', 'flex-col', 'absolute', 'bottom-0', 'mx-auto', 'left-0', 'right-0', 'book');

    // Create a p element for book title
    const titlePara = document.createElement('p');
    titlePara.classList.add('bg-teal-400', 'text-slate-900', 'sm:font-bold', 'text-[10px]', 'sm:text-sm');
    titlePara.textContent = book.title;

    // Create a link element for PDF download
    const downloadLink = document.createElement('a');
    downloadLink.href = book.pdfLink;
    downloadLink.classList.add('bg-red-500', 'text-white', 'font-bold', 'px-4', 'hover:bg-red-800');
    downloadLink.textContent = 'Download';

    // Append elements to their respective parents
    detailsDiv.appendChild(titlePara);
    detailsDiv.appendChild(downloadLink);
    bookDiv.appendChild(imgElement);
    bookDiv.appendChild(detailsDiv);

    // Append the book element to the container
    bookContainer.appendChild(bookDiv);
  });
}

// Function to create pagination
function createPagination(totalPages, activePage) {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = ''; // Clear previous pagination

  // Create "previous" button
  const prevButton = document.createElement('a');
  prevButton.href = '#';
  prevButton.innerHTML = '&laquo;';
  prevButton.onclick = (event) => {
    event.preventDefault();
    changePage(activePage - 1);
  };
  paginationContainer.appendChild(prevButton);

  // Create page buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('a');
    pageButton.href = '#';
    pageButton.innerText = i;
    pageButton.className = (i === activePage) ? 'active' : '';
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
    changePage(activePage + 1);
  };
  paginationContainer.appendChild(nextButton);
}

// Function to handle page change
function changePage(page) {
  const totalPages = Math.ceil(filteredBooks.length / 10); // Calculate total pages
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

  // Filter books based on search term
  filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchTerm));

  changePage(1); // Display the first page of the filtered results
}

// Add event listener for search input
document.getElementById('search-input').addEventListener('input', filterBooks);

// Initialize pagination with the first page as active
changePage(1);







// // Fetch data from the JSON file
// fetch('/JSONs/books.json')
//   .then(response => response.json())
//   .then(data => {
//     const bookContainer = document.getElementById('book-container');
//     const searchInput = document.getElementById('search-input');

//     // Function to filter books based on search query
//     const filterBooks = () => {
//       const searchTerm = searchInput.value.toLowerCase();

//       // Get all book elements
//       const bookElements = document.querySelectorAll('.max-h-52');

//       // Iterate through each book element and show/hide based on search query
//       bookElements.forEach(bookElement => {
//         const bookTitle = bookElement.getAttribute('data-book-name').toLowerCase();
//         const isVisible = bookTitle.includes(searchTerm);

//         // Toggle visibility based on search result
//         bookElement.style.display = isVisible ? 'block' : 'none';
//       });
//     };

//     // Add event listener for search input
//     searchInput.addEventListener('input', filterBooks);
//   })
//   .catch(error => console.error('Error fetching data:', error));
