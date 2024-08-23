// Add the on active functionality to the current page link

// We need to first get the current page URL
const currentLocation = location.href;

// Let's get all the anchor tags inside the navigation menu
const menuItems = document.querySelectorAll('.nav_menu ul li a');

// Let's now loop through the anchor tags and apply the 'active' class to the matching one
menuItems.forEach(item => {
    if (item.href === currentLocation) {
        // This will now Adds the 'active' class to the current page link
        item.classList.add("active");
    }
});