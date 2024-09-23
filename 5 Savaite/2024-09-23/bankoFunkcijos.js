////////// - Isleisti - //////////
function isleistiPinigus() {
    const islaiduElementas = document.querySelector('#islaiduInput');
    const islaidos = +islaiduElementas.value;
    atimtiNuoBalanco(islaidos);
    islaiduElementas.value = "";
}

function atimtiNuoBalanco(islaidos) {
    const balanceElement = document.querySelector('#balance');
    if (isNaN(islaidos) || islaidos < 0) return;
    balancas -= islaidos;

    if (balancas <= 0) {
        balancas = 0;
        balanceElement.innerText = `Jusu balansas: ${balancas.toFixed(2)}$`;
    } else {
        balanceElement.innerText = `Jusu balansas: ${balancas.toFixed(2)}$`;
    }


}
////////// - Inesti - //////////
function inestiPinigus() {
    const inasoElementas = document.querySelector('#inasoInput');
    const inesimai = +inasoInput.value;
    pridetiPrieBalanco(inesimai);
    inasoElementas.value = "";
}

function pridetiPrieBalanco(inasas) {
    if (isNaN(inasas) || inasas < 0) return;
    balancas += +inasas;
    const balanceElement = document.querySelector('#balance');
    balanceElement.innerText = `Jusu balansas: ${balancas.toFixed(2)}$`;
}

////////// - Gauti Alga - //////////
function gautiAlga() {
    let apskaiciavimas = balancas += algosDydis;
    const balanceElement = document.querySelector('#balance');
    balanceElement.innerText = `Jusu balansas: ${apskaiciavimas.toFixed(2)}$`;
}

////////// - Meto Kaina - //////////
function pridetiMetaloKaina() {
    const metaloElement = document.querySelector('#metaloInput');
    const metaloKiekis = metaloElement.value;
    apskaiciuotiMetaloKaina(metaloKiekis);
    metaloElement.value = "";
}

function apskaiciuotiMetaloKaina(kg) {
    if (isNaN(kg) || kg < 0) return;
    const bendraKaina = kainasUzTona * (kg / 1000);
    balancas += +bendraKaina;
    const balanceElement = document.querySelector('#balance');
    balanceElement.innerText = `Jusu balansas: ${balancas.toFixed(2)}$`;
}

////////// - INITIALIZE - //////////
function init() {
    const greetingElement = document.querySelector('#greeting');
    //innerText tik atiduoda reiksmia bet nepakeicia, todel reikia priskirti.
    greetingElement.innerText = greetingElement.innerText.replace("{vardas}", vardas);

    const balanceElement = document.querySelector('#balance');
    balanceElement.innerText = balanceElement.innerText.replace("{x}", balancas);
}