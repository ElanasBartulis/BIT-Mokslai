let kainaUzVnt = 4.99;
let kiekis = 20;
let pvm = 21;

let kainaBePvm = kainaUzVnt * kiekis;
// kainaBePvm = kainaBePvm.toFixed(2);

let mokesciai = (kainaBePvm * pvm) / 100;
let kainaSuPvm = kainaBePvm + mokesciai;

kainaBePvm = kainaBePvm.toFixed(2);
kainaSuPvm = kainaSuPvm.toFixed(2);

console.log("Kaine be PVM: " + kainaBePvm);
console.log("Kaine su PVM: " + kainaSuPvm);