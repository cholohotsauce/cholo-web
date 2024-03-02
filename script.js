document.addEventListener('DOMContentLoaded', function() {
    // Get the menu toggle button and the navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');

    // Check if both elements exist
    if (menuToggle && navMenu) {
        // Add an event listener to the menu toggle button for click events
        menuToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the navigation menu to show or hide it
            navMenu.classList.toggle('active');
        });
    }
});
