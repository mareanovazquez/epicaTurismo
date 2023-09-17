document.addEventListener("DOMContentLoaded", function() {

    var formulario = document.querySelector('#formulario');
    var nombre = document.querySelector('#nombre');
    var email = document.querySelector('#email');
    var mensaje = document.querySelector('#mensaje');

    function valNombre(e) {
        if (!nombre.value) {
            e.preventDefault();
            document.querySelector('input[type="text"] + .error').style.display = 'block';
        } else {
            document.querySelector('input[type="text"] + .error').style.display = 'none';
        }
    }

    function valEmail(e) {
        if (!email.value) {
            e.preventDefault();
            document.querySelector('input[type="email"] + .error').style.display = 'block';
        } else {
            document.querySelector('input[type="email"] + .error').style.display = 'none';
        }
    }

    function valMensaje(e) {
        if (!mensaje.value) {
            e.preventDefault();
            document.querySelector('textarea + .error').style.display = 'block';
        } else {
            document.querySelector('textarea + .error').style.display = 'none';
        }
    }

    function validacion(e) {
        valNombre(e);
        valEmail(e);
        valMensaje(e);
    }

    formulario.addEventListener('submit', validacion);

});
