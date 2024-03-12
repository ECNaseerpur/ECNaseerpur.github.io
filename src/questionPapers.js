fetch('/JSONs/questionPapers.json')
    .then(response => response.json())
    .then(data => {
        const tabsContainer = document.querySelector('.tabs');

        // Function to filter subjects by name
        function filterSubjects(searchTerm) {
            const filteredSubjects = data.subjects.filter(subject => {
                return subject.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            renderTabs(filteredSubjects);
        }

        // Function to render tabs
        function renderTabs(subjects) {
            tabsContainer.innerHTML = ''; // Clear existing tabs
            subjects.forEach(subject => {
                const tab = document.createElement('div');
                tab.classList.add('border-b', 'tab', 'hover:text-blue-900');

                const tabContent = `
                <div class="border-l-2 border-transparent relative">
                    <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" onclick="togglePaperVisibility(this)">
                        <span class="text-grey-darkest font-thin text-xl">${subject.name}</span>
                        <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                            <!-- Icon here -->
                            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24"
                                stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </header>
                    <div class="tab-content hidden">
                        <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                            <ul class="sm:pl-4">
                                ${subject.papers.map(paper => `<li class="pb-2"><a href="${paper.url}" class="hover:underline text-blue-500" onclick="openPaper(event)">${paper.year}</a></li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                `;

                tab.innerHTML = tabContent;
                tabsContainer.appendChild(tab);
            });
        }

        renderTabs(data.subjects); // Initial rendering

        

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            filterSubjects(searchTerm);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

    // Function to toggle visibility of paper content
    function togglePaperVisibility(tab) {
      tab.nextElementSibling.classList.toggle('hidden');
  }

  // Function to open paper URL
  function openPaper(event) {
      event.preventDefault();
      const paperUrl = event.target.href;
      window.open(paperUrl, '_blank');
  }