document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar ul li a");

    hamburger.onclick = function() {
        navBar.classList.toggle("active");
    };

    navLinks.forEach(link => {
        link.onclick = function() {
            navBar.classList.remove("active");
        };
    });
});