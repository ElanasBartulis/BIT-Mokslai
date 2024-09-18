let turimaValiuta = prompt('Kokia valiuta turite? (Galimi pasirinkimai : GBP, USD, EUR)');

const gbpEur = 1.19;
const eurGbp = 0.84;
const usdEur = 0.90;
const eurUsd = 1.11;
const gbpUsd = 1.32;
const usdGbp = 0.76;


if(turimaValiuta == "GBP" || turimaValiuta == "USD" || turimaValiuta == "EUR") {
    let trokstamaValiuta = prompt(`I Kokia valiuta norite pakeisti ${turimaValiuta} (Galimi pasirinkimai : GBP, USD, EUR)`);
    if(trokstamaValiuta == "GBP" || trokstamaValiuta == "USD" || trokstamaValiuta == "EUR") {
        let valiutosKiekis = prompt('Kiek Valiutos norime pakeisti?')
        
        if(turimaValiuta == "GBP" && trokstamaValiuta == "EUR"){
           let result = valiutosKiekis * gbpEur;
            result = Number(result).toFixed(2);
            document.write(`Jus pakeitet <br> <b>${valiutosKiekis} ${turimaValiuta}</b> <br>I<br><b>${result} ${trokstamaValiuta}</b> `);
        } else if (turimaValiuta == "USD" && trokstamaValiuta == "EUR"){
            let result = valiutosKiekis * usdEur;
            result = Number(result).toFixed(2);
            document.write(`Jus pakeitet <br> <b>${valiutosKiekis} ${turimaValiuta}</b> <br>I<br><b>${result} ${trokstamaValiuta}</b> `);
        } else if (turimaValiuta == "GBP" && trokstamaValiuta == "USD") {
            let result = valiutosKiekis * gbpUsd;
            result = Number(result).toFixed(2);
            document.write(`Jus pakeitet <br> <b>${valiutosKiekis} ${turimaValiuta}</b> <br>I<br><b>${result} ${trokstamaValiuta}</b> `);
        } else if (turimaValiuta == "EUR" && trokstamaValiuta == "USD") {
            let result = valiutosKiekis * eurUsd;
            result = Number(result).toFixed(2);
            document.write(`Jus pakeitet <br> <b>${valiutosKiekis} ${turimaValiuta}</b> <br>I<br><b>${result} ${trokstamaValiuta}</b> `);
        } else if (turimaValiuta == "EUR" && trokstamaValiuta == "GBP") {
            let result = valiutosKiekis * eurGbp;
            result = Number(result).toFixed(2);
            document.write(`Jus pakeitet <br> <b>${valiutosKiekis} ${turimaValiuta}</b> <br>I<br><b>${result} ${trokstamaValiuta}</b> `);
        } else if (turimaValiuta == "USD" && trokstamaValiuta == "GBP") {
            let result = valiutosKiekis * usdGbp;
            result = Number(result).toFixed(2);
            document.write(`Jus pakeitet <br> <b>${valiutosKiekis} ${turimaValiuta}</b> <br>I<br><b>${result} ${trokstamaValiuta}</b> `);
        }
    }
}else {
    document.write('Neteisingtai ivesti duomenys');
}