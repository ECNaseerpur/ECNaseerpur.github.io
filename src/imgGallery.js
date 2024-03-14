document.addEventListener("DOMContentLoaded", function() {
    fetch('/JSONs/imgGallery.json')
        .then(response => response.json())
        .then(data => {
            const carouselContainer = document.querySelector('.relative.h-56');
            data.forEach((image, index) => {
                const div = document.createElement('div');
                div.classList.add('hidden', 'duration-700', 'ease-in-out');
                if (index === 0) {
                    div.dataset.carouselItem = 'active';
                } else {
                    div.dataset.carouselItem = '';
                }
                div.innerHTML = `
                    <img src="${image.src}" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="${image.alt}">
                `;
                carouselContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});
