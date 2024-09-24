const colors = [
  "red",
  "magenta",
  "violet",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "teal",
  "indigo",
  "lime",
  "navy",
  "gold",
  "silver",
];

//2. Sukurkite funkciją first(masyvas), kuri gražina pirmojo elemento masyve reikšmę;
//TEST:
//console.log(first(colors));// 'red'
//Jei konsolėje matote red, jūsų funkcija veikia teisingai, tas pats kartojasi ir su kitomis užduotimis...

function firts(masyvas) {
  return `First: ${masyvas[0]}`;
}
console.log(firts(colors));

//3. Sukurkite funkciją last(masyvas), kuri gražina paskutiojo elemento masyve reikšmę;
//TEST:
//console.log(last(colors));// 'silver'

function last(masyvas) {
  const last = masyvas[masyvas.length - 1];
  return `Last: ${last}`;
}
console.log(last(colors));

/*
4. Sukurkite funkciją secondLast(masyvas), kuri gražina priešpaskutinio elemento masyve reikšmę bei patikrina ar masyvas turi bent 2 elementus. Jei masyve yra mažiau nei 2 elementai, gražinkite reikšmę false, kitu atveju grąžinkite priešpaskutinį elementą;
TEST1:
console.log(secondLast(colors)); // 'gold'
TEST2:
console.log(secondLast(['tekstas'])) // false

*/

function secondLast(masyvas) {
  const priesPasukutinis = masyvas[masyvas.length - 2];
  if (masyvas.length >= 2) return priesPasukutinis;
  return false;
}

/*
5. Sukurkite funkciją doesExist(masyvas, reiksme), kuri atlieka patikrinimą, ar parametre masyvas egzistuoja reiksme. Priklausomai nuo to ar egzistuoja, gražinti tekstinę reikšmę "Rastas elementas masyvo indekse X" arba "Elementas masyve buvo nerastas"
TEST1:
console.log(doesExist([1,2,3], 4)); // "Elementas masyve buvo nerastas"
TEST2:
console.log(doesExist([1,2,3], 2)); // "Rastas elementas masyvo indekse 1"
TEST3:
console.log(doesExist(colors, 'yellow')); // "Rastas elementas masyvo indekse 5"
TEST4:
console.log(doesExist(colors, 'infrared')); // "Elementas masyve buvo nerastas"
*/

console.log(secondLast(colors));
console.log(secondLast(["tekstas"]));

function doesExist(masyvas, reiksme) {
  const rastiReiksme = masyvas.includes(reiksme);
  const rastiMasyvoIndex = masyvas.indexOf(reiksme);
  if (rastiReiksme)
    return `Rastas elementas masyvo indekse ${rastiMasyvoIndex}`;
  return "Elementas masyve buvo nerastas";
}

console.log(doesExist(colors, "infrared"));

/*
6. console.log'inkite visas spalvas, atskirtas kableliu su tarpu, rezultatas konsolėje turėtų atrodyti taip:

'red, magenta, violet, blue, green, yellow, orange, purple, pink, brown, black, white, gray, cyan, teal, indigo, lime, navy, gold, silver'
 */

console.log(colors.join(", "));

/*
7. console.log'inkite darbuotojų masyvą employees, kurį sugeneruosite iš šio teksto:
'Alice_ . _Bob_ . _Charlie_ . _David_ . _Eve_ . _Frank_ . _Grace_ . _Hannah_ . _Isaac_ . _Jack_ . _Karen_ . _Liam_ . _Mia_ . _Nathan_ . _Olivia_ . _Peter_ . _Quinn_ . _Rachel_ . _Sophia_ . _Tom'

Rezultatas konsolėje turėtų atrodyti taip:
[
  'Alice', 'Bob', 'Charlie', 'David', 'Eve', 
  'Frank', 'Grace', 'Hannah', 'Isaac', 'Jack', 
  'Karen', 'Liam', 'Mia', 'Nathan', 'Olivia', 
  'Peter', 'Quinn', 'Rachel', 'Sophia', 'Tom'
]
*/

const employees =
  "Alice_ . _Bob_ . _Charlie_ . _David_ . _Eve_ . _Frank_ . _Grace_ . _Hannah_ . _Isaac_ . _Jack_ . _Karen_ . _Liam_ . _Mia_ . _Nathan_ . _Olivia_ . _Peter_ . _Quinn_ . _Rachel_ . _Sophia_ . _Tom";

console.log(employees.split("_ . _"));

/*
8. Sukurkite funknciją createHtmlList(masyvas), kuri kuria HTML kodą. Kuriamas sunumeruotas sąrašas iš visų masyve esančių elementų. 
Raskite būdą, kaip protingai panaudoti .join() metodą bei teksto sujungimą, kad sudaryti HTML kodą iš darbuotojų sąrašo su viena eilute:
return rezultatas:
'<ol>
  <li>Alice</li>
  <li>Bob</li>
  <li>Charlie</li>
  <li>David</li>
  <li>Eve</li>
  <li>Frank</li>
  <li>Grace</li>
  <li>Hannah</li>
  <li>Isaac</li>
  <li>Jack</li>
  <li>Karen</li>
  <li>Liam</li>
  <li>Mia</li>
  <li>Nathan</li>
  <li>Olivia</li>
  <li>Peter</li>
  <li>Quinn</li>
  <li>Rachel</li>
  <li>Sophia</li>
  <li>Tom</li>
</ol>;'

HTML dokumente sukurkite sąrašas1 klasę turintį div elementą, kuriame pridėsite šio sunumeruoto sąrašo HTML. Rezultatas turi matytis pačiame puslapyje.

*/

const darbuotojai = [
  'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah', 
  'Isaac', 'Jack', 'Karen', 'Liam', 'Mia', 'Nathan', 'Olivia', 'Peter', 
  'Quinn', 'Rachel', 'Sophia', 'Tom'
];

function createHtmlList(masyvas, rezimas) {
  const element = document.querySelector(".sarasas1");

  if (rezimas === undefined) element.innerHTML = `<ol>${masyvas.map((x) => `<li>${x}</li>`).join("")}</ol>`;
  else if (rezimas === "ne skaicius") "";
  else if (rezimas === 1) element.innerHTML = `<ul>${masyvas.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  else if (rezimas === 2) element.innerHTML = `<ol>${masyvas.map((x) => `<li>${x}</li>`).join("")}</ol>`;
}

createHtmlList(darbuotojai);

/* 
9. Patobulinkite funkciją createHtmlList pridėdami jai papildomą parametrą rezimas. createHtmlList(masyvas, rezimas). Jei rezimas yra 
undefined: grąžinkite tą patį numeruotą sąrašą
ne skaičius: grąžinkite tuščią string reikšmę: “”
1: grąžinkite nenumeruotą sąrašą.
2: grąžinkite numeruotą sąrašą.
*/

/* 
IŠŠŪKIS (neprivaloma):
reikalingas .map metodas. Antrasis callback  funkcijos parametras - elemento indeksas
10. Sukurkite funkciją generateHtmlTable(people, colors), kuri sugeneruoja HTML lentelę iš 2 stulpelių: žmogus, spalva.  Turint masyvus colors, employees atitinkamai stulpeliuose atvaizduokite reikšmes.
kiekvienam žmogui priskiriama spalva yra atvirkštiniu būdu.
pvz:
pirmas žmogus privalo turėti paskutinę spalvą masyve.
antras žmogus privalo turėti priešpaskutinę spalvą masyve.
trečias žmogus privalo turėti trečią nuo galo spalvą masyve.
...
paskutinis žmogus privalo turėti pirmą spalvą masyve
Palengvinimai: const apverstasMasyvas = [1,2,3].reverse(); // [3,2,1]

Rezultatas turi matytis naršyklėje.
*/

function generateHtmlTable(people, colors) {
  const sarasoElement = document.querySelector('.sarasas2');
  colors.reverse();
  sarasoElement.innerHTML = 
  `<table>
      <tr>
        ${people.map(x => `<td>${x}</td>`).join('')} 
      </tr>
      <tr>
        ${colors.map(x => `<td>${x}</td>`).join('')} 
      </tr>
  </table>`
}

generateHtmlTable(darbuotojai, colors);