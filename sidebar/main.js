document.addEventListener("DOMContentLoaded", function() {
    
    // Select elements
    let menuIcon = document.querySelector(".sec1");
    let menu = document.querySelector(".sec2");
    let section = document.querySelector("sec3");
    let menuItems = document.querySelectorAll(".sec4");

    // Toggle menu visibility
    menuIcon.addEventListener("click", function() {
        menu.classList.toggle("ul_show");
        section.classList.toggle("slide_image");
    });

    // Highlight active menu item
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove 'active' class from all items
            menuItems.forEach(li => li.classList.remove("active"));
            // Add 'active' class to clicked item
            this.classList.add("active");
        });
    });

});
