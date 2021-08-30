// Slide

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

setInterval(nextSlide, 1000000);


// Social Medias


function wppHover(element) {
    if(element.src = "./imagens/wpp.png") {
        element.src = './imagens/wpp-hover.png';
    }
    
}
function wppOut(element) {
    element.src = './imagens/wpp.png'
}

function youtubeHover(element) {
    if(element.src = "./imagens/youtube.png"){
        element.src = './imagens/youtube-hover.png';
    }
}
function youtubeOut(element) {
    element.src = './imagens/youtube.png'
}

function instaHover(element) {
    if(element.src = "./imagens/insta.png"){
        element.src = './imagens/insta-hover.png';
    }
}
function instaOut(element) {
    element.src = './imagens/insta.png'
}








// Menu Mobile


let mobileContent = document.querySelector('.menu-mobile-content');
let menuMobile = document.querySelector('.menu-mobile');
let controlsSlide = document.querySelector('.controls-slide');
let apoiase = document.querySelector('.c-button');

function menuMobileClick() {

    mobileContent.style.display = "flex";
    menuMobile.style.display = "none";
    controlsSlide.style.display = "none";
    apoiase.style.display = "none";
    

    // Criar elemento html la no html com os menus, mas com display none;
    // Quando clicar no menumobile, mudar o display do elemento criado
    // Quando clicar em algum item do menu voltar pra display none e ir pra seção clicada.
}

function closeMobile() {
    mobileContent.style.display = "none";
    menuMobile.style.display = "flex";
    controlsSlide.style.display = "flex";
    apoiase.style.display = "flex";
}



// MODAL/PERFIL DOS JOGADORES

let kardeck = document.getElementById('modalKardeck');
let aleproven = document.getElementById('modalAleProven');
let edwardblake = document.getElementById('modalEdwardBlake');
let gabrielBS18 = document.getElementById('modalGabrielbs18');
let suricato = document.getElementById('modalSuricato');
let amzol = document.getElementById('modalAmzol');
let sandrojr = document.getElementById('modalSandrojr');
let cicco = document.getElementById('modalCicco');
let rai = document.getElementById('modalRai');
let yan = document.getElementById('modalYan');
let DL = document.getElementById('modalDL');
let bruninho = document.getElementById('modalBruninho');
let leoReis = document.getElementById('modalLeoReis');
let zilla = document.getElementById('modalZilla');
let ronaldinho = document.getElementById('modalRonaldinho');
let raulMazarim = document.getElementById('modalRaulMazarim');
let asafe = document.getElementById('modalAsafe');
let luizAndrade = document.getElementById('modalLuizAndrade');
let mik = document.getElementById('modalMik');
let jhon = document.getElementById('modalJhon');



function abrirModal(element) {

    let modalClick = element.id;

    if(modalClick == "button-kardeck") {
        kardeck.style.display = "flex";
    }
    else if(modalClick == "button-aleproven"){
        aleproven.style.display = "flex";
    }
    else if (modalClick == "button-edwardblake") {
        edwardblake.style.display = "flex";
    }
    else if (modalClick == "button-gabrielbs18") {
        gabrielBS18.style.display = "flex";
    }
    else if (modalClick == "button-suricato") {
        suricato.style.display = "flex";
    }
    else if (modalClick == "button-amzol") {
        amzol.style.display = "flex";
    }
    else if (modalClick == "button-sandrojr") {
        sandrojr.style.display = "flex";
    }
    else if (modalClick == "button-cicco") {
        cicco.style.display = "flex";
    }
    else if (modalClick == "button-rai") {
        rai.style.display = "flex";
    }
    else if (modalClick == "button-yan") {
        yan.style.display = "flex";
    }
    else if (modalClick == "button-DL") {
        DL.style.display = "flex";
    }
    else if (modalClick == "button-bruninho") {
        bruninho.style.display = "flex";
    }
    else if (modalClick == "button-leoReis") {
        leoReis.style.display = "flex";
    }
    else if (modalClick == "button-zilla") {
        zilla.style.display = "flex";
    }
    else if (modalClick == "button-ronaldinho") {
        ronaldinho.style.display = "flex";
    }
    else if (modalClick == "button-raulMazarim") {
        raulMazarim.style.display = "flex";
    }
    else if (modalClick == "button-asafe") {
        asafe.style.display = "flex";
    }
    else if (modalClick == "button-luizAndrade") {
        luizAndrade.style.display = "flex";
    }
    else if (modalClick == "button-mik") {
        mik.style.display = "flex";
    }
    else if (modalClick == "button-jhon") {
        jhon.style.display = "flex";
    }




    document.getElementById('modal').style.top = "0";
}



function fecharModal() {
    document.getElementById('modal').style.top = "-1000rem";

    kardeck.style.display = "none";
    aleproven.style.display = "none";
    edwardblake.style.display = "none";
    gabrielBS18.style.display = "none";
    suricato.style.display = "none";
    amzol.style.display = "none";
    sandrojr.style.display = "none";
    cicco.style.display = "none";
    rai.style.display = "none";
    yan.style.display = "none";
    DL.style.display = "none";
    bruninho.style.display = "none";
    leoReis.style.display = "none";
    zilla.style.display = "none";
    ronaldinho.style.display = "none";
    raulMazarim.style.display = "none";
    asafe.style.display = "none";
    luizAndrade.style.display = "none";
    mik.style.display = "none";
    jhon.style.display = "none";
}

// MODAL/PERFIL DOS JOGADORES






// APAGAR NOME E EMAIL DEPOIS QUE ENVIAR O FORMULÁRIO

