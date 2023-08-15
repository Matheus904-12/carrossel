let imgIndice = 0;
const IMAGENS = ['image1.png', 'image2.png', 'image3.png', 'image4.png'];
const prevButton = document.getElementById('anterior');
const nextButton = document.getElementById('proximo');
const carouselInner = document.querySelector('.carousel-inner');
const carrosselImagem = document.getElementById('carrosselImagem');

function ajustarTamanhoImagens() {
    const larguraPadrao = carouselInner.offsetWidth;
    carrosselImagem.style.width = `calc(${larguraPadrao}px - 10000px)`; /* Ajusta para o tamanho com espaçamento */
    carrosselImagem.style.height = 'auto';
}

function carregar() {
    carouselInner.style.transform = `translateX(-${imgIndice * 100}%)`;
    ajustarTamanhoImagens();
}

prevButton.addEventListener('click', () => {
    imgIndice = (imgIndice - 1 + IMAGENS.length) % IMAGENS.length;
    carregar();
});

nextButton.addEventListener('click', () => {
    imgIndice = (imgIndice + 1) % IMAGENS.length;
    carregar();
});

window.addEventListener('resize', ajustarTamanhoImagens);
carregar();
