function calculateBmi() {
    const svoris = document.querySelector('.svoris').value;
    const ugis = document.querySelector('.ugis').value;
    const result = document.querySelector('.result');

    const calculations = +(svoris / (ugis ** 2)).toFixed(2);

    if(calculations < 18.5) {
        result.innerHTML += `${calculations} - Nepakankamas`;
    } else if (calculations >= 18.5 && calculations < 25) {
        result.innerHTML += `${calculations} - Normalus Svoris`;
    } else if (calculations >= 25 && calculations < 30) {
        result.innerHTML += `${calculations} - Antsvoris`;
    } else {
        result.innerHTML += `${calculations} - Nutukimas`;
    }

}