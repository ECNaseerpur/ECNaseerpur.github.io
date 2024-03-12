// Fetch data from the JSON file
fetch('./src/books.json')
  .then(response => response.json())
  .then(data => {
    const bookContainer = document.getElementById('book-container');

    // Iterate through each book in the data array
    data.forEach(book => {
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
  })
  .catch(error => console.error('Error fetching data:', error));
