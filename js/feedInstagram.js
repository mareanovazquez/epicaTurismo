const feed = document.querySelector('.contenidoInstagram');

const token = 'IGQWRQcDd3cUllNm1GSzlsd2dmSndHY3lvaHFJX2RtQzZAXcm1kOUpFZAkhveVRoaHdIS0NNOGVncnhMOXM4Y2YxRDFEZA21xQTQ1SXBWLTNUaEFGR1ZA1cDFOWEhudWNhZADdCWDRITm4xNXoxTEFhbU41Qjd3ejJvSU0ZD';

const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_type,media_url,caption,permalink,username,id&limit=4&access_token=${token}`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        const dataPub = data.data;
        dataPub.forEach((imageData, index) => {
            // Verificar si el tipo de medio es VIDEO
            if (imageData.media_type === 'VIDEO') {
                // Establecer el fondo del contenedor con la miniatura del video
                const posts = document.createElement('div');
                posts.classList.add('postsInstagram'); // Agregar la clase 'postsInstagram' al contenedor
                posts.style.background = `url(${imageData.thumbnail_url})`; 
                posts.style.backgroundPosition = 'center';
                posts.style.backgroundSize = 'cover';
                posts.style.backgroundRepeat = 'no-repeat';
                posts.style.cursor = 'pointer'; // Cambiar el cursor a una manito
                posts.addEventListener('click', () => {
                    window.open(imageData.permalink, '_blank');
                });

                   // Cambiar el tamaño del fondo en el evento mouseover con transición suave
            posts.addEventListener('mouseover', () => {
                posts.style.backgroundSize = '110%'; // Cambiar el tamaño al 110%
                posts.style.transition = 'background-size 0.9s ease'; // Agregar una transición suave de 0.3 segundos
            });

            // Restaurar el tamaño del fondo en el evento mouseout con transición suave
            posts.addEventListener('mouseout', () => {
                posts.style.backgroundSize = 'cover'; // Restaurar el tamaño original 'cover'
            });
                feed.appendChild(posts); // Agregar el contenedor al contenedor de la galería
            } else {
                // Si no es un video, establecer el fondo del contenedor con la imagen
                const posts = document.createElement('div');
                posts.classList.add('postsInstagram'); // Agregar la clase 'postsInstagram' al contenedor
                posts.style.background = `url(${imageData.media_url})`; 
                posts.style.backgroundPosition = 'center';
                posts.style.backgroundSize = 'cover';
                posts.style.backgroundRepeat = 'no-repeat';
                posts.style.cursor = 'pointer'; // Cambiar el cursor a una manito
                posts.addEventListener('click', () => {
                    window.open(imageData.permalink, '_blank');
                });

                   // Cambiar el tamaño del fondo en el evento mouseover con transición suave
            posts.addEventListener('mouseover', () => {
                posts.style.backgroundSize = '110%'; // Cambiar el tamaño al 110%
                posts.style.transition = 'background-size 0.9s ease'; // Agregar una transición suave de 0.3 segundos
            });

            // Restaurar el tamaño del fondo en el evento mouseout con transición suave
            posts.addEventListener('mouseout', () => {
                posts.style.backgroundSize = 'cover'; // Restaurar el tamaño original 'cover'
            });
                feed.appendChild(posts); // Agregar el contenedor al contenedor de la galería
            }
        });
    });
