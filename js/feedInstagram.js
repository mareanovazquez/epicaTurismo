
const feed = document.querySelector('.contenidoInstagram');
const posts = document.querySelectorAll('.postsInstagram');

const token = 'IGQWROT3hXbTg4MU1maFBHX0Q1cEJZASnBTZAW9MLXBjUXVYRHNSQndkVlN1dWRqeUlIbk9xbW1YWTZAucm8wc2dJUmZAxNnprOVhHOHV6akpsTUlGOFp3NUNSaEczTUVEWWhFMVlaTjdPend1RjQwV2k3RW9CY2pEOFkZD';

const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink,username,id&limit=4&access_token=${token}`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        const dataPub = data.data;
        console.log(dataPub);
        dataPub.forEach((imageData, index) => {
            // Crear un contenedor para la imagen y la leyenda
            const posts = document.createElement('div');
            posts.classList.add('postsInstagram'); // Agregar la clase 'postsInstagram' al contenedor

            // Establecer el fondo del contenedor con la imagen
            posts.style.background = `linear-gradient(180deg, rgba(0,4,40,0) 37%, rgba(0,4,40,0.8156512605042017) 92%),url(${imageData.media_url})`; // Suponiendo que media_url contiene la URL de la imagen
            posts.style.backgroundPosition = 'center';
            posts.style.backgroundSize = 'cover';
            posts.style.backgroundRepeat = 'no-repeat';

            // Crear un elemento para la leyenda
            const caption = document.createElement('p');

            // Crear un enlace para el permalink
            const permalinkLink = document.createElement('a');
            permalinkLink.href = imageData.permalink; // Suponiendo que permalink contiene la URL del permalink
            permalinkLink.textContent = imageData.caption; // Texto del enlace
            permalinkLink.target = "_blank"; // Abrir el enlace en una nueva pestaña
            

            // Envolver el texto de la leyenda con el enlace al permalink
            caption.appendChild(permalinkLink);

            // Añadir la leyenda al contenedor
            posts.appendChild(caption);

            // Añadir el contenedor al contenedor de la galería
            feed.appendChild(posts); // Suponiendo que 'feed' es tu contenedor .contenedor-galeria
        });

    });