// Fetch data from JSON file
fetch('./src/notices.json')
  .then(response => response.json())
  .then(data => {
    const noticesContainer = document.getElementById('notices');

    // Loop through each notice and create HTML elements
    data.forEach(notice => {
      const noticeDiv = document.createElement('div');
      noticeDiv.className = 'bg-white mx-2 rounded text-red-600 p-4 my-4';

      const dateParagraph = document.createElement('p');
      dateParagraph.className = 'font-bold text-sm';
      dateParagraph.textContent = notice.date;

      const link = document.createElement('a');
      link.href = notice.link;
      link.download = true;
      link.className = 'text-blue-700';
      link.textContent = notice.title;

      noticeDiv.appendChild(dateParagraph);
      noticeDiv.appendChild(link);
      noticesContainer.appendChild(noticeDiv);
    });
  })
  .catch(error => console.error('Error fetching notices:', error));
