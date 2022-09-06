// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
list.innerHTML = elemnt(galleryItems);

function elemnt(gallery) {
    const imageEl = gallery.map(
        ({ preview, original, description }) =>
            `<a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>`
    ).join('');

    return imageEl;
};

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionsDelay: 250 });

