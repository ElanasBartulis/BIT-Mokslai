function random(minimalValue, maximalValue){
    const min = Math.floor(minimalValue);
    const max = Math.ceil(maximalValue);
    const randomNumber = Math.floor(Math.random()*(max-min+1))+min;
    return randomNumber;
}

console.log(`1#: ${random(120, 240)}`);

// 1. Sukurkite funkciją generateRandomNumberArray(length), kuri sugeneruos atsitiktinių skaičių masyvą iš length elementų;

function generateRandomNumberArray(length){
    const masyvas = [];
    for(let i = 1; i <= length; i++) {
        const randomNumber = Math.floor( (Math.random() * length));
        masyvas.push(randomNumber);
    }
    return masyvas;
}

console.log(generateRandomNumberArray(100));

// 2. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų, kiek kartų pateiktame skaičių masyve yra pasikartojantis skaičius 3;

function countAllThrees(array) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 3) result.push(array[i]);
    }
    return result.length;
}

console.log(countAllThrees(generateRandomNumberArray(100)));

// 3. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array). 
//    Pirmoji funkcija suskaičiuoja, kiek yra lyginių skaičių pateiktame masyve. Kita suskaičiuoja kiek yra nelyginių skaičių;

function countAllEven(array){
    const even = [];
    for(let i = 1; i < array.length; i++) {
        if(array[i] % 2 === 0) even.push(array[i]);
    }
    return even;
}

console.log(countAllEven(generateRandomNumberArray(100)));

function countAllOdd(array){
    const odd = [];
    for(let i = 1; i < array.length; i++) {
        if(array[i] % 2 === 1) odd.push(array[i]);
    }
    return odd;
}

console.log(countAllOdd(generateRandomNumberArray(100)));

// 4. Sukurkite funkciją countAllEvenUnderSix(array), kuri suskaičiuoja, kiek yra lyginių skaičių, kurių reikšmė yra  6 arba mažesnė  pateiktame masyve

function countAllEvenUnderSix(array) {
    const result = []
    for(let i = 1; i < array.length; i++) {
        if(array[i] === 6 || array[i] < 6) result.push(array[i])
    }
return result;
}

console.log(countAllEvenUnderSix(generateRandomNumberArray(100)))

// 5. Sukurkite funkciją throwCoin(), kuri imituoja monetos metimą. funkcijos gražinama reikšmė: “H” - Herbas arba “S” - Skaičius;

function throwCoin() {
    const randomNumber = Math.ceil(Math.random() * 2);
    let result = '';
    if(randomNumber === 1) result = 'H';
    else result = 'S';
    return result;
}

console.log(throwCoin());

// 6. Sukurkite funkciją, kuri imituoja monetos metimą 20 kartų, suskaičiuokite kiek kartų iškrito skaičius, kiek kartų iškrito herbas. 
//    Paskaičiuokite procentaliai, kokiu dažnumu krito skaičius, kokiu dažnumu krito skaičius; (pasiūlymas patobulinimui mini-game - > pridėti puslapyje mygtuką, 
//    leisiantį pasirinkti kokios pusės monetos tikitės, ir pridėti mesti monetą mygtukus, tada atitinkamai atvaizduoti, buvo laimėta - ar pralaimėta)

function monetosMetimas(moneta, kartai = 20) {
    const result = [];
    const skaiciai = [];
    const herbai = []
    for(let i = 1; i <= kartai; i++){
        let save = moneta();
        result.push(save);
        if(result[i-1] === 'S') skaiciai.push(result[i-1]);
        else if(result[i-1] === 'H') herbai.push(result[i-1]);
    }

    const hDaznis = (herbai.length / result.length) * 100;
    const sDaznis = (skaiciai.length / result.length) * 100;
    let statistika = '';

    if(hDaznis > sDaznis) statistika = `Herbai iskrito ${(hDaznis - sDaznis).toPrecision(2)}% dazniau nei Skaiciai`;
    else if (sDaznis > hDaznis) statistika = `Skaiciai iskrito ${(sDaznis - hDaznis).toPrecision(2)}% dazniau nei Herbai`;
    else statistika = `Ir herbai ir skaiciai iskrito po vienodai`;

    const total = `Skaiciai: ${skaiciai.length}, Herbai: ${herbai.length}.  Herbai: ${hDaznis.toPrecision(2)}%  .Skaiciai : ${sDaznis.toPrecision(2)}% \n${statistika}`
    return total;
}

console.log(monetosMetimas(throwCoin));

// 7. Sukurkite funkciją sumAll(masyvas), kuri susumuoja visus masyvo elementus, bei gražina šią sumą kaip rezultatą;

function sumAll(masyvas) {
    const total = masyvas.reduce((prev, next) => prev + next);
    return total;
}

console.log(sumAll(generateRandomNumberArray(100)));

//8. Sukurkite funkciją swap(masyvas, a, b), kuri gražina tą patį masyvą, tik apkeista elemento a ir b pozicija. (a ir b yra elementų indeksai masyve)
//   PVZ:
//   swap([1,2,3,4,5], 0, 3); //[4, 2, 3, 1, 5]

function swap(masyvas, a, b) {

    let temp = masyvas[a];
    masyvas[a] = masyvas[b];
    masyvas[b] = temp;
    return masyvas;
}

console.log(swap([1,2,3,4], 0,2));

// 9. Sukurkite funkciją average(arr), kuri atranda visų masyve pateiktų skaičių vidurkį; PVZ: average([1,2,3,4,5])//3


function average(arr){
    for(let i of arr) {
        const sum = arr.reduce((prev, next) => prev + next);
        const result = sum / arr.length
        return result;
    }
}

console.log(average([1,2,3,4,5]))

// 10. Sukurkite funkciją findAllUniqueNumbers(masyvas), kuri atranda masyve esančius unikalius skaičius. 
// gražina juos masyvo pavidalu: pvz: findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]) // [1,2,8,4,6];

function findAllUniqueNumbers(masyvas) {
    return [...new Set(masyvas)];
}

console.log(findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]));