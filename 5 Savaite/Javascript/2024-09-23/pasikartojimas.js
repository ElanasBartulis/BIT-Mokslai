const vardoIvestis = document.querySelector('#vardo-ivestis');
const vaikuKiekioIvestis = document.querySelector('#vaiku-kiekis');

function gautiIvestiniIsIvestiesLaukelio() {
    const vardas = vardoIvestis.value;
    const vaikuKiekis = vaikuKiekioIvestis.value;
    const vaikuKiekisSk = +vaikuKiekis;

    if (vaikuKiekioIvestis === "" || vaikuKiekisSk < 0) return;


    console.log(vardas, vaikuKiekis);
    console.log(typeof vardas, typeof vaikuKiekis);


    if (vaikuKiekisSk === 0) {
        console.log("Siunceme jus i kita parduotuve.");
    } else if (vaikuKiekisSk >= 1 && vaikuKiekisSk < 5) {
        console.log("Siunceme i vaiku skyriu.");
    } else {
        console.log("Siunceme i VIP kambari.")
    }

}