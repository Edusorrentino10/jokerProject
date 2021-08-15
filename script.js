let qtd_slides = document.querySelectorAll('.slide-item').length;
let initalSlide = 0;

document.querySelector('.slide-width').style.width = `calc(100vw * ${qtd_slides})`;
document.querySelector('.controls-slide').style.height = `${document.querySelector('.slider').clientHeight}px`;


function backSlide() {
    initalSlide--;
    if(initalSlide < 0) {
        initalSlide = qtd_slides - 1;
    }
    atualizaMargin();
}

function nextSlide() {
    initalSlide++;
    if(initalSlide > (qtd_slides - 1)) {
        initalSlide = 0;
    }
    atualizaMargin();
}

function atualizaMargin() {
    let slide_width = document.querySelector('.slide-item').clientWidth;
    let novaMargin = (initalSlide * slide_width);
    document.querySelector('.slide-width').style.marginLeft = `-${novaMargin}px`;

}

setInterval(nextSlide, 3000);