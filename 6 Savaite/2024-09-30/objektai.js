const masina = {
    marke: 'Audi',
    modelis: 'A7',
    metai: 2023,
};

// Sukuriama tekstine israiska to paties objekto.
const objektasKaipTekstas = JSON.stringify(masina);
// Serveris
// Pavercia teksta i objekta.
const gautasObjektas = JSON.parse(objektasKaipTekstas);

// Pridejome nauja objekta
gautasObjektas.dureliuSkaicius = 4;
console.log(gautasObjektas)