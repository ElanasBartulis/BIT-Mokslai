let tekstas = "Eur";

tekstas.toLocaleUpperCase(); // Nekeicia orginalo
console.log(tekstas); // Eur
tekstas = tekstas.toLocaleUpperCase(); // Keicia orginalu teksta
console.log(tekstas); // EUR

let nesvarusTekstas = "     \n \t      Reikalingas tekstas ";
console.log(nesvarusTekstas.trim());