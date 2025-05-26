const images = [
    'spin/f.jpg',
    'spin/fr.jpg',
    'spin/r.jpg',
    'spin/br.jpg',
    'spin/b.jpg',
    'spin/bl.jpg',
    'spin/l.jpg',
    'spin/fl.jpg',
]

let i = 0;
const img = document.getElementById('spin-img');

setInterval(() => {
    i = (i + 1) % images.length;
    img.src = images[i];
}, 200);