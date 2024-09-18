const GBPEUR = 1.19;
const USDEUR = 0.9;
const GBPUSD = 1.32;


const valiuta1 = prompt('Kokia valiuta norite keisti i kita?');
const valiuta2 = prompt('I kokia valiuta norite keisti?');
const valiutos1_Kiekis_Text = prompt(`Kiek ${valiuta1} norite pakeisti i ${valiuta2}?`);
const valiutos1_Kiekis_Number = +valiutos1_Kiekis_Text;

let result;

if(valiuta1 == "EUR" && valiuta2 == "USD") {
    result = valiutos1_Kiekis_Number / USDEUR;
}else if (valiuta1 == "USD" && valiuta2 == "EUR") {
    result = valiutos1_Kiekis_Number * USDEUR;
} else if (valiuta1 == "EUR" && valiuta2 == "GBP") {
    result = valiutos1_Kiekis_Number / GBPEUR;
} else if (valiuta1 == "GBP" && valiuta2 == "EUR") {
    result = valiutos1_Kiekis_Number * GBPEUR;
} else if (valiuta1 == "USD" && valiuta2 == "GBP") {
    result = valiutos1_Kiekis_Number / GBPUSD;
}  else if (valiuta1 == "GBP" && valiuta2 == "USD") {
    result = valiutos1_Kiekis_Number * GBPEUR;
} else {
    console.log("Neteisingai ivesti duomenys")
}

console.log(`Keiciame: ${valiutos1_Kiekis_Number}${valiuta1} => ${valiutos1_Kiekis_Number}${valiuta2} `);
console.log(`${valiutos1_Kiekis_Number}${valiuta1} = ${result.toFixed(2)}${valiuta2} `);
