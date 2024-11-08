window.addEventListener("scroll", function() {
    var header = document.querySelector("header");  
    // Usamos scrollY en lugar de scrolly
    header.classList.toggle("sticky", window.scrollY > 0);
});