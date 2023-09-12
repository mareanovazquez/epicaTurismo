document.addEventListener("scroll", function() {
    // Obtener todos los elementos con la clase 'sticky-top'
    var stickyElements = document.querySelectorAll('.sticky-top');
    
    for (var i = 0; i < stickyElements.length; i++) {
        if (window.scrollY > 250) {
            stickyElements[i].classList.add('sticky-nav');
            stickyElements[i].style.top = '0px';
        } else {
            stickyElements[i].classList.remove('sticky-nav');
            stickyElements[i].style.top = '-100px';
        }
    }
});
