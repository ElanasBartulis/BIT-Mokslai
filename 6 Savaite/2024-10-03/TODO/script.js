let selectedDay = "monday";
let editingTaskIndex = 0;


// LocalStorage gavimas
function getTodoTasks() {
  const input = localStorage.getItem('taskList');
  return input ? JSON.parse(input) : [] ;
}

// LocalStorage išsaugojimas
function saveTodoTasks(data) {
localStorage.setItem('taskList', JSON.stringify(data));
}

// Darbo sukūrimo mygtuko funkcija
function addNewTodoTask() {

  const data = {
    id: editingTaskIndex++,
    input: document.querySelector('#newTaskInput').value,
    select: document.querySelector('#assingListOption').value,
  }
  
  if(data.input === '' && data.select === ''){
    return;
  }

  const taskList = getTodoTasks();
  taskList.push(data);
  saveTodoTasks(taskList);
  updateTodoList();
}
  // Čia tūrėtumėte padaryti:
  // 2. Patikrinti, kad inputas nebūtų tuščias. DONE
  // 3. Gauti value iš select pasirinkto varianto - (#assingListOption - select elementas). DONE
  // 4. Patikrinti, kad select nebūtų tuščias. DONE
  // 5. Gauti iš funkcijos getTodoTasks sąrašą iš localStorage DONE
  // 6. Pridėti naują užduotį į localStorage naudojant funkcija saveTodoTasks(data) -- data siunčiame užduoties masyva DONE
  // 7. Atnaujiname sąraša


// Savaitės dienos pasirinkimas
function selectDay(day, dayText, element) {
  // Čia tūrėtumėte padaryti:
  // 1. Uždėti klasę active bei nuimti klase active šiems elementams (#weekListElement).
  // 2. Uždėti tekstą pagal parametra dayText į elementą (.selectedDayText)
  // 3. Atnaujinti selectedDay kintamajį į pasirinktą dieną
  // 4. Atnaujinti sąrašą
  const weekListElement = document.querySelector('.weekListElement');
  
}
selectDay('monday', 'Pirmadienio', this);

// Atnaujinti sąraša į HTML
function updateTodoList() {
  let getTodo = getTodoTasks();
  const listContainerElement = document.querySelector('.listContainer');
  const values = document.querySelector('#assingListOption');
  const selectDayText = document.querySelector('.selectedDayText');
  let htmlText = '';
  let divBlock;
  
  for(let i in getTodo) {
    if(getTodo === undefined) {
      return;
    }
    
    let todoInput = getTodo[i].input;

    divBlock = listContainerElement.innerHTML = htmlText += `  
    <div class="todo">
    <article>
        <input type="checkbox" onclick="markAsDoneTask(${getTodo[i].id})"/>
        <span>${todoInput}</span>
    </article>
    <div class="btnContainer">
        <button onclick="editTodoTask(${getTodo[i].id})">
        <i class="fa-solid fa-pen-to-square blue"></i>
        </button>
        <button onclick="deleteTodoTask(${getTodo[i].id})"><i class="fa-solid fa-trash red"></i></button>
    </div>
  </div>`

    if(values.value === 'monday') {
      selectDayText.innerText = 'Pirmadienis';
      divBlock;
    }
    if(values.value === 'tuesday') {
      selectDayText.innerText = 'Antradienis';
      divBlock;
    }
    if(values.value === 'wednesday') {
      selectDayText.innerText = 'Treciadienis';
      divBlock;
    }
    if(values.value === 'thursday') {
      selectDayText.innerText = 'Ketvirtadienis';
      divBlock;
    }
    if(values.value === 'friday') {
      selectDayText.innerText = 'Penktadienis';
      divBlock;
    }

}


  // Čia tūrėtumėte padaryti:
  // 1. Išskaidyti localStorage masyva bei patikrinti kad jis nebūtų null.
  // 2. Patikrinti kokia diena yra pasirinkta ir pagal ją išdėsti sąraša.
  // 3. Vietoj elementoId parašykite masyvo indeksa.
  // 4. Visą sąraša parodyti html (.listContainer - elemente).
  //   HTML PRADINĖ SARAŠO STRUKTŪRA
  // <div class="todo">
  //     <article class="${item.taskIsDone ? "taskDone" : ""}">
  //         <input type="checkbox" onclick="markAsDoneTask(${index})" ${item.taskIsDone ? "checked" : ""}/>
  //         <span>Užduotis #1</span>
  //     </article>
  //     <div class="btnContainer">
  //         <button onclick="editTodoTask(${index})">
  //         <i class="fa-solid fa-pen-to-square blue"></i>
  //         </button>
  //         <button onclick="deleteTodoTask(${index})"><i class="fa-solid fa-trash red"></i></button>
  //     </div>
  //   </div>
}

// Užduoties pažymėjimas, kad padarytą funkcija
function markAsDoneTask(id) {
  // Čia tūrėtumėte padaryti:
  // 1. Gauti iš localStorage sąrašą
  // 2. Pasiekti masyvo elementą ir jam uždėti taskIsDone true bei ją nuimti į false
  // 3. Išsaugoti masyvą į localStorage
  // 4. Atnaujinti sąrašą.
}

// Užduoties koregavimo funkcija
function editTodoTask(id) {
  const editContainer = document.querySelector(".editContainer");
  editContainer.style.display = "flex";

  // Čia tūrėtumėte padaryti:
  // 1. Gauti masyva iš localStorage
  // 2. Padaryti redagavima masyvo pagal indeksa
  // 3. Gauti iš masyvo kintamuosius ir juos priskirti (#editInputVal) bei (#assingListOption)
  // 4. Užpildyti (#editInputVal - inputas) value
  // 5. Parinkti kuris select'as naudojame .selected savybę buvo pasirinktas ir ją priskiriame forEach (#editAssingListOption > option)
  // 6. Priskiriame redaguojamo užduoties indeksa į kintamajį editingTaskIndex
}

// Užduoties ištrinimo funkcija
function deleteTodoTask(id) {
  // Čia tūrėtumėte padaryti:
  // 1. Gauti masyvą iš localStorage
  // 2. Ištrinti užduotį iš masyvo pagal užduoties masyvo indeksą
  // 3. Išsaugoti masyvą į localStorage
  // 4. Atnaujinti sąraša
}

// Užduoties pakeitimų išsaugojimo funkcija
function saveEdit() {
  // Čia tūrėtumėte padaryti:
  // 1. Gauti masyvą iš localStorage
  // 2. Gauti value iš šio (#editInputVal) input elemento
  // 3. Gauti value iš šio (#editAssingListOption) option elemento
  // 4. Atnaujinti masyvą pagal editingTaskIndex
  // 5. Išsaugoti masyvą į localStorage
  // 5. Atnaujinti sąraša
  // 6. Uždaryti redaguojamą kontainerį galime naudoti funkciją closeEditTodoTask
}

// Užduoties koregavimo lango uždarymas
function closeEditTodoTask() {
  const editContainer = document.querySelector(".editContainer");
  editContainer.style.display = "none";
}
