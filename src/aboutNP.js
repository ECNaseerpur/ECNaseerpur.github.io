const englishButton = document.getElementById('english-button');
const urduButton = document.getElementById('urdu-button');
const hindiButton = document.getElementById('hindi-button');

const englishText = document.getElementById('english-text');
const urduText = document.getElementById('urdu-text');
const hindiText = document.getElementById('hindi-text');

// Function to switch language to English
function switchToEnglish() {
    urduText.classList.add('hidden');
    hindiText.classList.add('hidden');
    englishButton.classList.remove('bg-gray-500');
    englishButton.classList.add('bg-blue-500');
    englishText.classList.remove('hidden');
    urduButton.classList.remove('bg-blue-500');
    hindiButton.classList.remove('bg-blue-500');
    urduButton.classList.add('bg-gray-500');
    hindiButton.classList.add('bg-gray-500');
    
}

// Function to switch language to Urdu
function switchToUrdu() {
    hindiText.classList.add('hidden');
    englishText.classList.add('hidden');
    urduText.classList.remove('hidden');
    urduButton.classList.remove('bg-gray-500');
    urduButton.classList.add('bg-blue-500');
    englishButton.classList.remove('bg-blue-500');
    hindiButton.classList.remove('bg-blue-500');
    englishButton.classList.add('bg-gray-500');
    hindiButton.classList.add('bg-gray-500');
}

// Function to switch language to Hindi
function switchToHindi() {
    urduText.classList.add('hidden');
    englishText.classList.add('hidden');
    hindiText.classList.remove('hidden');
    hindiButton.classList.remove('bg-gray-500');
    hindiButton.classList.add('bg-blue-500');
    englishButton.classList.remove('bg-blue-500');
    urduButton.classList.remove('bg-blue-500');
    englishButton.classList.add('bg-gray-500');
    urduButton.classList.add('bg-gray-500');


}

// Event listeners for language buttons
englishButton.addEventListener('click', switchToEnglish);
urduButton.addEventListener('click', switchToUrdu);
hindiButton.addEventListener('click', switchToHindi);

// Call switchToUrdu function by default
switchToUrdu();