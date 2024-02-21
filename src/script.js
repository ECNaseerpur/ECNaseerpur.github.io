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