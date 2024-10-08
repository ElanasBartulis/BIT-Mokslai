const prekes = [  
    { barkodas: "4061615651", pavadinimas: "Degtukai", kaina: 0.2 },  
    { barkodas: "4061615652", pavadinimas: "Dantų šepetėlis", kaina: 1.5 },  
    { barkodas: "4061615653", pavadinimas: "Kava", kaina: 4.99 },  
    { barkodas: "4061615654", pavadinimas: "Vandens butelis", kaina: 0.89 },  
    { barkodas: "4061615655", pavadinimas: "Šokoladas", kaina: 1.79 },  
    { barkodas: "4061615656", pavadinimas: "Tualetinis popierius", kaina: 2.5 },  
    { barkodas: "4061615657", pavadinimas: "Makaronai", kaina: 0.99 },  
    { barkodas: "4061615658", pavadinimas: "Ryžiai", kaina: 1.2 },  
    { barkodas: "4061615659", pavadinimas: "Kondicionierius", kaina: 3.5 },  
    { barkodas: "4061615660", pavadinimas: "Šampūnas", kaina: 3.99 }
];

// 1. Kiekvienai prekei masyve pritaikykite metodą, kuris modifikuoja kiekvienos prekės barkodą.
// Barkodai prasideda pirmąja prekės pavadinimo raide ir atskiriamas brūkšneliu, pvz:
// D-4061615651 (degtukai).
// Rezultatą console.log’inkite

const modifikuotiBarkodai = prekes.map(value => {
    const pavadinimoPirmosRaides = value.pavadinimas.at(0);

    return {
        barkodas: `${pavadinimoPirmosRaides}-${value.barkodas}`, 
        pavadinimas: value.pavadinimas, 
        kaina: value.kaina
    }
})

// 2. Išfiltruokite prekes, kurios prasideda pirmąja raide 'D'. Rezultate turi likti 2 prekės: ‘Degtukai’ ir ‘Dantų šepetėlis’. 
// Rezultatą console.log’inkite

const prekesFIltrasPagalPirmaRaide = prekes.filter(value => value.pavadinimas.startsWith('D'));

// 3. Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur

const prekesDaugiauNei1 = prekes.filter(value => value.kaina > 1);

// 4. Išfiltruokite prekes, kurios kainuoja mažiau nei 3 eur.

const prekesZemiauNei3 = prekes.filter(value => value.kaina < 3);

// 5. Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur ir mažiau nei 3 eur.

const prekesDaugiau1IrZemiau3 = prekes.filter(value => (value.kaina > 1 && value.kaina < 3));

// 6.  Raskite prekę, kurios pavadinimas: ‘Kava’. Jos reikšmę pakeiskite į ‘Kavos pupelės’.

const pakeistiReiksme = (v) => {
    const surastiKava = v.find(value => value.pavadinimas == "Kava");
    const paverskStringIrPakeisk = surastiKava.pavadinimas.replace(surastiKava.pavadinimas, 'Kavos pupelės');
    v.map(value => {
        
    })
}


console.log(pakeistiReiksme(prekes));