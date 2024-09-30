// Local Storage
let x;
init();

function padidintiSkaiciu(){
    x++;
    updateHTML();
    setSkaicius(x);
}

function pamazintiSkaiciu(){
    x--;
    updateHTML();
    setSkaicius(x);
}

function init() {
    const skaicius = getSkaicius() //tekstas!!

    if(skaicius===null) {
        setSkaicius(0);
        x = 0;
    } else x = +skaicius;

    updateHTML();
}

function getSkaicius() {
    return localStorage.getItem('skaicius');
}

function setSkaicius(sk) {
    localStorage.setItem('skacius', sk);
    
}

function updateHTML() {
    const skaiciausElementas = document.querySelector('#skaicius');
    skaiciausElementas.innerHTML = x;
}