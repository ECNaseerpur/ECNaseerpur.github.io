document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle
    const menuToggle = document.querySelector("[data-collapse-toggle]");
    const menuTarget = document.getElementById(menuToggle.getAttribute("data-collapse-toggle"));
    menuToggle.addEventListener("click", function () {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
        menuToggle.setAttribute("aria-expanded", !expanded);
        menuTarget.classList.toggle("hidden");
    });


});



const tabs = document.querySelectorAll('.tab');
  
tabs.forEach(tab => {
  // Get the input checkbox inside the tab
  const checkbox = tab.querySelector('input[type="checkbox"]');

  // Add event listener to the checkbox
  checkbox.addEventListener('change', () => {
    // Toggle the 'active' class on the tab
    tab.classList.toggle('active');
    
    // Hide other tabs
    tabs.forEach(otherTab => {
      if (otherTab !== tab) {
        otherTab.classList.remove('active');
      }
    });
  });
});