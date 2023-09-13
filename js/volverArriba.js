document.addEventListener('DOMContentLoaded', function() {

    // Mostrar y ocultar botón "Volver arriba"
    var btnVolverArriba = document.getElementById('btnVolverArriba');

    window.addEventListener('scroll', function() {
        var experiencias = document.getElementById('experiencias');
        var proyectosOffsetTop = experiencias.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY >= proyectosOffsetTop) {
            btnVolverArriba.style.marginLeft = '0px';
        } else if (window.scrollY <= proyectosOffsetTop / 2) {
            btnVolverArriba.style.marginLeft = '-60px';
        }

    });

});
