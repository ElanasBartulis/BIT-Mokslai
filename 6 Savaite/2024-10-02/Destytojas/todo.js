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

let tasks = [];
let taskId = 1;

function pridetiTask() {
    const ivestisElement = document.querySelector('.ivestis');
    const ivestis = ivestisElement.value;

    const newIvestis = {
        id: taskId++,
        title: ivestis,
        status: 'active',
        date: gautiDabartineDataTekstu(),
    }

    tasks.push(newIvestis);
    renderHtml();
    ivestis.value = '';
}


function renderHtml() {
    const activeTask = document.querySelector('.active-tasks');
    const finsihedTask = document.querySelector('.finished-tasks');

    activeTask.innerHTML = '';
    finsihedTask.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = 
        `<div class="task mt-3 p-2 d-flex justify-content-between align-items-center rounded bg-white">
				<span class="title">${task.title}</span>
				<i class="task-date ms-4 d-inline-block">${task.date}</i>
				<div class="btn-group">
                    ${task.status === 'active' ? `<button class="btn btn-primary" onclick='atliktaUzduotis(${task.id})'>Atlikta užduotis</button>` 
                    : `<button class="btn btn-primary" onclick='grazintiUzduoti(${task.id})'>Grazinti užduoti</button>`}
					<button class="btn btn-danger" onclick='istrinti(${task.id})' >Ištrinti</button>
				</div>
		</div>`;

        if(task.status === 'active'){
            activeTask.innerHTML += taskItem;
        } else {
            finsihedTask.innerHTML += taskItem;
        }
    })
}


function atliktaUzduotis(id) {
    const findId = tasks.find(task => {
        if(task.id === id) {
            console.log(task);
            task.status = 'finished';
        }
        renderHtml();
    });

    return findId;
}

function grazintiUzduoti(id) {
    console.log('veikiu')
}

function istrinti(id) {
    const findTask = tasks.find(task => {
        if(task.id === id) {
            tasks.splice(task, 1);
            console.log(task);
        }
        renderHtml()
    })

    return findTask;
}

function gautiDabartineDataTekstu() {
	const dabartineData = new Date();
	const metai = dabartineData.getFullYear(),
		menuo = dabartineData.getMonth() + 1, 
		diena = dabartineData.getDate(); 
	return `${metai}-${`${menuo}`.padStart(2, "0")}-${`${diena}`.padStart(2,"0")}`;
}
