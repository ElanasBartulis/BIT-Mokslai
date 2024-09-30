// 1.
const spalvos = {red: 0, green: 255, blue: 255};

function getRgb(spalva) {
    return `rgb(${spalva.red}, ${spalva.green}, ${spalva.blue})`;
}

console.log(getRgb(spalvos));


// 2-3

let redValue;
let greenValue;
let blueValue;

init();
function init() {
    const red = getSpalvos('red');
    const green = getSpalvos('green');
    const blue = getSpalvos('blue');

    if(red === null) {
        setSpalvos('red', 0);
        redValue = 0;
    } else redValue = +red;

    if(green === null) {
        setSpalvos('green', 0);
        greenValue = 0;
    } else greenValue = +green;

    if(blue === null) {
        setSpalvos('blue', 0);
        blueValue = 0;
    } else blueValue = +blue;

    updateHtml();
}

function getSpalvos(value) {
    return localStorage.getItem(`${value}`);
}


function setSpalvos(spalva, sk) {
    return localStorage.setItem(`${spalva}`, sk);
}

function save() {
    const red = document.querySelector('#red');
    const green = document.querySelector('#green');
    const blue = document.querySelector('#blue');

    redValue = red.value;
    greenValue = green.value;
    blueValue = blue.value;

    updateHtml();
    setSpalvos('red', redValue);
    setSpalvos('green', greenValue);
    setSpalvos('blue', blueValue);
}

function updateHtml() {
    const KvadratoDiv = document.querySelector('.kvadratoKonteineris');
    KvadratoDiv.innerHTML = `<div class="kvadratas" style="width: 100px; height: 100px; background: rgb(${redValue}, ${greenValue}, ${blueValue});"></div>`
}





