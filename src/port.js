
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Close the sidebar if clicked outside of it
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const navToggle = document.querySelector('.navv'); // The element that toggles the sidebar

    // Check if the click was outside the sidebar and the toggle button
    if (!sidebar.contains(event.target) && !navToggle.contains(event.target)) {
        sidebar.classList.remove('active'); // Close the sidebar
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL path
    const currentPath = window.location.pathname.split("/").pop();

    // Select all navigation links
    const navLinks = document.querySelectorAll('#navLinks a');

    // Loop through the links and add the 'active' class to the matching link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } 
        else {
            link.classList.remove('active'); 
        }
    });
});