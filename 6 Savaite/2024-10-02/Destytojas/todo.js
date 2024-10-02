// Prideti uzduoti, istrinti uzduoti,
// atlikta uzduotis, grazinti uzduoti
// Gauti dabartine data tekstu

// UZDUOTIS
/*
{
    title: "pavadinimas",
    date: "2024-10-02",
    statusas: "active"|"finished"
}
*/

let informacija = {
    title: '',
    date: '',
    status: '',
}

function pridetiUzduoti() {
    //gauti ivesti
    const ivestiesElement = document.querySelector('.ivestis');
    const ivestis = ivestiesElement.value;

    // ideti ivesti text
    const titleElement = document.querySelector('.title');
    titleElement.innerText = ivestis;
    
    // ideti ivesties date
    const taskDateElement = document.querySelector('.task-date');
    taskDateElement.innerText = gautiDabartineDataTekstu();
}

function uzduotisAtlikta() {

}

function gautiDabartineDataTekstu() {
	const dabartineData = new Date();
	const metai = dabartineData.getFullYear(),
		menuo = dabartineData.getMonth() + 1, 
		diena = dabartineData.getDate(); 
	return `${metai}-${`${menuo}`.padStart(2, "0")}-${`${diena}`.padStart(2,"0")}`;
}
