document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactoForm').addEventListener('submit', function() {
        setTimeout(function() {
            document.getElementById('nombre').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mensaje').value = '';
        }, 100);
    });
});