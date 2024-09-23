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
    if (islaidos >= balancas) {
        balancas = 0;
        balanceElement.innerText = `Jusu balansas: ${balancas}$`;
    } else {
        balanceElement.innerText = `Jusu balansas: ${balancas}$`;
    }
}

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
    balanceElement.innerText = `Jusu balansas: ${balancas}$`;
}

function gautiAlga() {
    let apskaiciavimas = balancas += algosDydis;
    const balanceElement = document.querySelector('#balance');
    balanceElement.innerText = `Jusu balansas: ${apskaiciavimas}$`;
}

function init() {
    const greetingElement = document.querySelector('#greeting');
    //innerText tik atiduoda reiksmia bet nepakeicia, todel reikia priskirti.
    greetingElement.innerText = greetingElement.innerText.replace("{vardas}", vardas);

    const balanceElement = document.querySelector('#balance');
    balanceElement.innerText = balanceElement.innerText.replace("{x}", balancas);
}