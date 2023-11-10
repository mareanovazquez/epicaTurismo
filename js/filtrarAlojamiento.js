function filtrarAlojamiento() {
    let filtro = document.getElementById("filtroLocalidad").value;
    let fotos = document.querySelectorAll(".itemAlojamiento");
    let contenedor = document.querySelector(".contenedorGaleria");

    fotos.forEach(function (foto) {
        foto.style.display = "none"; // Oculta todas las imágenes inicialmente
    });

    if (filtro === "todas") {
        // Si se selecciona "Todas", muestra todas las imágenes y ajusta el contenedor
        fotos.forEach(function (foto) {
            foto.style.display = "flex";
        });
        contenedor.style.justifyContent = "space-between"; // o cualquier otro estilo que desees
    } else {
        // Muestra solo las imágenes que tienen la clase seleccionada y ajusta el contenedor
        let fotosFiltradas = document.querySelectorAll("." + filtro);
        fotosFiltradas.forEach(function (foto) {
            foto.style.display = "flex";
        });
        contenedor.style.justifyContent = "space-around"; // o cualquier otro estilo que desees
    }
}