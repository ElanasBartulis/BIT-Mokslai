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

function info(infoObjektas = {title: '', date: '', status: ''}) {
    const result = {
        title: infoObjektas.title,
        date: infoObjektas.date,
        status: infoObjektas.status,
    }
    return result;
}

function getIvestis() {
    const ivestiesElement = document.querySelector('.ivestis').value;
    const data = gautiDabartineDataTekstu();

    const ivestiesInformacija = {
        title: ivestiesElement,
        date: data,
        status: 'active',
    }

    const tasks = document.querySelector('.tasks');

    const task = `<div class="task active mt-3 bg-white p-2 d-flex justify-content-between align-items-center rounded">
						<span class="title">${ivestiesInformacija.title}</span>
						<i class="task-date ms-4 d-inline-block">${ivestiesInformacija.date}</i>
						<div class="btn-group">
							<button class="btn btn-primary" onclick="uzduotisAtlikta()">Užduotis atlikta</button>
							<button class="btn btn-danger" onclick='istrinti()'>Ištrinti</button>
						</div>
					</div>`

    tasks.innerHTML += task;
}



function gautiDabartineDataTekstu() {
	const dabartineData = new Date();
	const metai = dabartineData.getFullYear(),
		menuo = dabartineData.getMonth() + 1, 
		diena = dabartineData.getDate(); 
	return `${metai}-${`${menuo}`.padStart(2, "0")}-${`${diena}`.padStart(2,"0")}`;
}
