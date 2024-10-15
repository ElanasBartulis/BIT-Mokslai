
// Yra tik šešios falsy reikšmės JavaScript:

// false – logiškai klaidinga reikšmė.
// 0 – skaičius nulis.
// - 0 – neigiama nulio reikšmė.
// 0n – BigInt nulis.
// "" – tuščias stringas.
// null – nerodo jokios reikšmės.
// undefined – reikšmė, kuri nėra priskirta.
// NaN – Ne skaičius(Not - a - Number).
// Pastaba: Techniniu požiūriu - 0, 0n, ir NaN taip pat yra falsy, tačiau dažniausiai nurodoma tik šešios pagrindinės.


// Visos kitos reikšmės, kurios nėra falsy, yra truthy.Tai apima:

// Ne tuščios eilutės("Hello", "0", "false", " ")
// Skaičiai, skirtingi nuo 0(1, -1, 3.14)
// Objektai({}, [])
// Funkcijos
// Infinity ir - Infinity
// Data(new Date())

// const sk = '0';

// if (sk) {
//     console.log("True");
// } else {
//     console.log("False");
// }



// if/else:

// Naudojimas: Kai reikia atlikti paprastas arba kompleksines logines sąlygas, kurios gali turėti kelis šakotus veiksmus.
// Geroji praktika: Naudokite, kai reikia atlikti daugiau nei dvi sąlygas arba kai sąlygos yra sudėtingos.Rekomenduojama vengti daug if/else blokų – vietoj to svarstyti apie switch arba kitas struktūras.
// Sintaksė:

// if (condition) {
//     // veiksmai, jei sąlyga true
// } else {
//     // veiksmai, jei sąlyga false
// }

// switch:
// Naudojimas: Kai turite daugiau nei dvi galimybes ir reikia palyginti vieną kintamąjį su keliais galimais atvejais.
// Geroji praktika: Naudokite, kai turite daug aiškiai apibrėžtų galimų reikšmių, kurias reikia palyginti su vienu kintamuoju.Patogu, kai kiekvienas atvejis yra atskiras ir nepriklauso nuo kitų sąlygų.
// Sintaksė:

// const day = 16;

// switch (day) {
//     case 1:
//         console.log("Pirmadienis");
//         break;
//     case 2:
//         console.log("Antradienis");
//         break;
//     case 3:
//         console.log("Trečiadienis");
//         break;
//     case 4:
//         console.log("Ketvirtadienis");
//         break;
//     case 5:
//         console.log("Penktadienis");
//         break;
//     case 6:
//         console.log("Šeštadienis");
//         break;
//     case 7:
//         console.log("Sekmadienis");
//         break;
//     default:
//         console.log("Nežinoma diena");
// }


// const day1 = 2;

// switch (day1) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Darbo diena");
//         break;
//     case 6:
//     case 7:
//         console.log("Savaitgalis");
//         break;
//     default:
//         console.log("Nežinoma diena");
// }

// ternary operatorius:
// Naudojimas: Kai reikia parašyti trumpą ir paprastą sąlygą, dažniausiai priskiriant reikšmę kintamajam.
// Geroji praktika: Naudoti tik tada, kai sąlyga ir veiksmai yra trumpi ir aiškūs.Jei sąlyga tampa ilga ar neaiški, geriau naudoti if/else struktūrą.
// Sintaksė:

// condition ? expressionIfTrue : expressionIfFalse;
// condition ? expressionIfTrue : condition ? expressionIfTrue : expressionIfFalse;

// const day2 = 3;

// day2 === 1 ? console.log("Pirmadienis") : day2 === 2 ? console.log("Antradienis") : console.log("Kita diena")

// Geroji praktika:
// if/else struktūra suteikia didžiausią lankstumą, todėl ji yra tinkamiausia sudėtingesnėms sąlygoms ir kai reikia patikrinti kelias skirtingas sąlygas.
// switch struktūra yra naudinga, kai reikia palyginti vieną kintamąjį su daugybe konkrečių reikšmių.Ji padeda išvengti ilgo if/else if sekos ir padaro kodą skaitomesnį.
// Ternary operatorius(condition ? exprIfTrue : exprIfFalse) yra naudingas trumpiems sprendimams ir kai reikia greitai priskirti reikšmę kintamajam.Tačiau, jei sąlyga tampa sudėtinga arba reikia atlikti daugiau nei vieną veiksmą, geriau naudoti if/else.


// Užduotys:

// Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą: 
// "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias?
const kaskas = 7;
function vartBalas(value) {
    switch (value) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log('Nepatenkinamai');
            break;
        case 6:
        case 7:
            console.log('Patenkinamai');
            break;
        case 8:
        case 9:
            console.log('Gerai');
            break;
        case 10:
            console.log('Labai gerai');
            break;
        default:
            console.log('The number is not in range 1-10');
    }
}
// vartBalas(kaskas);



// Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).
// Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias?
const amzius = 17;
function arGaliBalsuoti(value) {
    return amzius >= 18 ? "Gali balsuoti" : "Negali balsuoti";
}
// console.log(arGaliBalsuoti(amzius));



// Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.
// Kurį metodą čia patartumėte naudoti?
const diena = 7;
function savaitesDiena(value) {
    switch (value) {
        case 1:
            console.log('Pirmadienis');
            break;
        case 2:
            console.log('Antradienis');
            break;
        case 3:
            console.log('Treciadienis');
            break;
        case 4:
            console.log('Ketvirtadienis');
            break;
        case 5:
            console.log('Penktadienis');
            break;
        case 6:
            console.log('Sestadienis');
            break;
        case 7:
            console.log('Sekmadienis');
            break;
        default:
            console.log('The number is not in range 1-7');
    }
}
// savaitesDiena(diena);



// Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, 
// ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?
const skaicius = -2;
function arGaliBalsuoti(value) {
    return value > 0 ? 'teigiamas' : value === 0 ? 'Lygus Nuliui' : 'Neigiamas';
}
// console.log(arGaliBalsuoti(skaicius));



// Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių: 
// "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).Koks operatorius geriausiai tinka šiam atvejui?
const vartAmzius = 18;
function amziausPatikra(value){
    return (value >=13 || value <=19) ? 'Jaunuolis(13-19)' : (value >=20 || value <=64) ? 'Suauges(20-64)' : 'Pensininkas(65+)';
}
// console.log(amziausPatikra(vartAmzius));


// Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, 
// ir atspausdina atitinkamą pranešimą.Kuris operatorius čia tinkamiausias?
const skaicius1 = 101;
function arLyginis(value){
    return value % 2 === 0 ? 'Lyginis' : 'Nelyginis';
}
// console.log(arLyginis(skaicius1));



// Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) 
// išveda sezono pavadinimą("Pavasaris", "Vasara", "Ruduo", "Žiema").Kuri struktūra geriausiai tinka šiam uždaviniui?
const menuo = 7;
function koksMenuo(value){
    switch(value){
        case 1: return 'Sausis';
        case 2: return 'Vasaris';
        case 3: return 'Kovas';
        case 4: return 'Balandis';
        case 5: return 'Geguze';
        case 6: return 'Birzelis';
        case 7: return 'Liepa';
        case 8: return 'Rugpjutis';
        case 9: return 'Rugsejis';
        case 10: return 'Spalis';
        case 11: return 'Lapkritis';
        case 12: return 'Gruodis';
    }
}
// console.log(koksMenuo(menuo));



// Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, 
// ar ne, ir atitinkamai išveda pranešimą.Kuris operatorius naudoti?
const skaicius2 = 10;
function arLygus(value){
    const skaicius = 7;
    return value === skaicius ? 'Lygus' : 'Nelygus';
}
// console.log(arLygus(skaicius2));



// Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis yra balsė, 
// priebalsė ar nėra raidė.Koks operatorius geriausiai tinka?
const balses = 'aeiouąęėįūų';
function arBalse(value){
    return balses.includes(value.toLowerCase()) ? 'Balse' : 'Priebalse';
}
// console.log(arBalse('i'))



// Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) 
// išveda, ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?
const xDiena = 'Sekmadienis';
function arSavaitgalis(input){
    switch(input){
        case 'Pirmadienis': return 'Darbo diena';
        case 'Antradienis': return 'Darbo diena';
        case 'Treciadienis': return 'Darbo diena';
        case 'Ketvirtadienis': return 'Darbo diena';
        case 'Penktadienis': return 'Darbo diena';
        case 'Sestadienis': return 'Savaitgalis';
        case 'Sekmadienis': return 'Savaitgalis';
    }
}
// console.log(arSavaitgalis(xDiena));



// Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: 
// "Šalta"(< 10°C), "Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka?
const celcius = 37;
function arSalta(value){
    return (value <= 10) ? "Slata" : (value >= 10 && value <= 25) ? "Silta" : 'Karsta';
}
// console.log(arSalta(celcius));



// Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3, tiek 5. Kurį operatorių naudoti?
const skaicius3 = 130;
function arDaliklis(value){
    return (value % 3 == 0 && value % 5 == 0) ? "Daliklis" : 'Ne Daliklis';
}
// console.log(arDaliklis(skaicius3));



// Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") 
// išveda atitinkamą veiklą: "Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka?
function arDirbti(input){
    return input.toLowerCase() === "darbo diena" ? "Dirbti" : 'Ilsetis';
}
// console.log(arDirbti("darbo diena"));



// Parašykite programą, kuri nustato, ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti?
function arKelemieji(metai){
    return ((metai % 4 === 0 && metai % 100 !== 0) || (metai % 400 === 0)) 
    ? `${metai} yra keliamieji metai.` 
    : `${metai} nėra keliamieji metai.`
}
// console.log(arKelemieji(18));



// Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos rekomendaciją: 
// "Kepurių nereikia", "Kepurės reikalingos", "Geriau neik į lauką".Koks operatorius geriausiai tinka?
const temp = -7;
function aprankgosRekomendacija(value){
    return (value <= -10) ? "Geriau neik į lauką" : (value >= -10 && value <= 0) ? "Kepurės reikalingos" : 'Kepurių nereikia';
}
console.log(aprankgosRekomendacija(temp));