function toggleMenu() {
    var navbarLinks = document.getElementById("navbar-links");
    if (navbarLinks.style.display === "flex") {
        navbarLinks.style.display = "none";
    } else {
        navbarLinks.style.display = "flex";
    }
}

function closeMenu() {
    var navbarLinks = document.getElementById("navbar-links");
    navbarLinks.style.display = "none";
}