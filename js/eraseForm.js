/* document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactoForm').addEventListener('submit', function() {
        setTimeout(function() {
            document.getElementById('nombre').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mensaje').value = '';
        }, 100);
    });
}); */

document.addEventListener('DOMContentLoaded', function () {

    function enviarFormulario(event) {
        event.preventDefault(); // Evita el envío regular del formulario

        // Aquí puedes añadir alguna validación adicional si lo deseas

        // Envía el formulario manualmente usando Fetch API
        fetch('https://formspree.io/f/xpzgkagn', {
            method: 'POST',
            body: new FormData(document.getElementById('contactoForm')),
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    // Si el envío fue exitoso, limpia el formulario
                    document.getElementById('nombre').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('mensaje').value = '';
                    document.getElementById('mensajeConfirmacion').textContent = '¡Gracias por tu mensaje! Te responderemos lo antes posible.';
                    document.getElementById('mensajeError').textContent = '';
                } else {
                    // Aquí puedes manejar errores, como mostrar un mensaje al usuario
                    console.error('Error enviando el formulario:', data.error);
                    document.getElementById('mensajeError').textContent = 'Completa los datos requeridos antes de enviar el formulario';
                }
            })
            .catch(error => {
                console.error('Hubo un error al enviar el formulario:', error);
            });
    }

    // Vinculamos la función al formulario
    document.getElementById('contactoForm').addEventListener('submit', enviarFormulario);
});
