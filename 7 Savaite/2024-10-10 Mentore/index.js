// Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą: "Labai gerai", 
// "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias?

const number = 10;


function balas(x) {
    switch(x){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Blogai');
            break;
        case 7:
        case 8:
            console.log('Gerai');
            break;
        case 9:
        case 10:
            console.log('Labai gerai');
            break;
        default:
            console.log('x');
    }
}

// balas(number);
// --------------------------- 

const amzius = 18;
// console.log(amzius >= 18 ? "Gali Balsuoti" : "Negali Balsuoti"); 

// ---------------------------

// Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, 
// neigiamas ar lygus nuliui, ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?

const skaicius = 0;

function teigiamasNeigiamas(x) {
    console.log(x > 0 ? "Teigiamas" : x < 0 ? "Neigiamas" : "Skaicius yra");
}

// teigiamasNeigiamas(skaicius);

function arKeliamieji(metai){
    console.log((metai % 4 === 0) ? "Metai yra keliamieji" : "Metai nera keliamieji");
}

arKeliamieji(4);