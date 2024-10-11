let selectedDay = "monday"; // Default day selection

let editingTaskIndex = 0;
 
// Retrieve tasks from LocalStorage

function getTodoTasks() {

  const tasks = localStorage.getItem('taskList');

  return tasks ? JSON.parse(tasks) : []; // Return parsed tasks or an empty array if none exist

}
 
// Save tasks to LocalStorage

function saveTodoTasks(data) {

  localStorage.setItem('taskList', JSON.stringify(data)); // Save tasks as a string in LocalStorage

}
 
// Function to add a new task

function addNewTodoTask() {

  const inputTask = document.querySelector('#newTaskInput').value;

  const assignedDay = document.querySelector('#assingListOption').value;
 
  // Simple validation: Ensure both fields are filled

  if (inputTask === '' || assignedDay === 'default') {

    alert("Please provide a task and select a day!");

    return;

  }
 
  // Create task object

  const taskData = {

    id: editingTaskIndex++, // Incrementing ID for each new task

    taskName: inputTask,    // Task name

    day: assignedDay,       // Day assignment

    taskIsDone: false       // By default, new tasks are not done

  };
 
  // Retrieve the current task list and add the new task

  const taskList = getTodoTasks();

  taskList.push(taskData);
 
  // Save the updated task list to LocalStorage

  saveTodoTasks(taskList);
 
  // Update the displayed to-do list

  updateTodoList();
 
  // Clear the input field after adding the task

  document.querySelector('#newTaskInput').value = '';

  document.querySelector('#assingListOption').value = 'default'; // Reset the dropdown

}
 
// Function to update the to-do list display

function updateTodoList() {

  const taskList = getTodoTasks(); // Retrieve all tasks

  const filteredTasks = taskList.filter(task => task.day === selectedDay); // Filter tasks by selected day
 
  const listContainer = document.querySelector('.listContainer');

  listContainer.innerHTML = ''; // Clear the existing list
 
  // Loop through filtered tasks and build the task HTML

  filteredTasks.forEach((task, index) => {

    const taskHtml = `
<div class="todo">
<article class="${task.taskIsDone ? 'taskDone' : ''}">
<input type="checkbox" onclick="markAsDoneTask(${index})" ${task.taskIsDone ? 'checked' : ''} />
<span>${task.taskName}</span> <!-- Use taskName instead of input -->
</article>
<div class="btnContainer">
<button onclick="editTodoTask(${index})">
<i class="fa-solid fa-pen-to-square blue"></i>
</button>
<button onclick="deleteTodoTask(${index})">
<i class="fa-solid fa-trash red"></i>
</button>
</div>
</div>

    `;

    listContainer.innerHTML += taskHtml;

  });

}
 
// Mark a task as done or not done

function markAsDoneTask(index) {

  const taskList = getTodoTasks();

  taskList[index].taskIsDone = !taskList[index].taskIsDone; // Toggle the task's 'done' status

  saveTodoTasks(taskList); // Save the updated tasks

  updateTodoList(); // Update the displayed list

}
 
// Function to show the Edit Task modal (editContainer)

function showEditContainer() {

  document.querySelector('.editContainer').style.display = 'block'; // Show the edit container

}
 
// Function to hide the Edit Task modal (editContainer)

function closeEditTodoTask() {

  document.querySelector('.editContainer').style.display = 'none'; // Hide the edit container

}
 
// Edit a task

function editTodoTask(index) {

  const taskList = getTodoTasks(); // Get the task list from localStorage

  const taskToEdit = taskList[index]; // Get the specific task to edit

  // Check if task exists and set the values in the modal

  if (taskToEdit) {

    document.querySelector('#editInputVal').value = taskToEdit.taskName; // Set task input

    document.querySelector('#editAssingListOption').value = taskToEdit.day; // Set task day

  }
 
  // Store the task's index so the save function knows which task to update

  editingTaskIndex = index;
 
  // Show the edit modal

  showEditContainer();

}
 
// Save the edited task

function saveEdit() {

  const taskList = getTodoTasks(); // Get task list from localStorage
 
  // Ensure the task index is valid

  if (taskList[editingTaskIndex]) {

    // Retrieve updated values from the input fields

    taskList[editingTaskIndex].taskName = document.querySelector('#editInputVal').value; // Update taskName

    taskList[editingTaskIndex].day = document.querySelector('#editAssingListOption').value; // Update day
 
    // Save the updated task list back to localStorage

    saveTodoTasks(taskList);
 
    // Update the to-do list display in the UI

    updateTodoList();
 
    // Close the edit modal

    closeEditTodoTask();

  } else {

    console.error("Task not found at index:", editingTaskIndex);

  }

}
 
// Delete a task

function deleteTodoTask(index) {

  const taskList = getTodoTasks();

  taskList.splice(index, 1); // Remove the task at the specified index

  saveTodoTasks(taskList); // Save the updated tasks

  updateTodoList(); // Update the displayed list

}
 
// Select a day and update the displayed tasks

function selectDay(day, dayName, element) {

  selectedDay = day; // Update the selected day

  document.querySelector('.selectedDayText').textContent = `${dayName} užduotys:`; // Update the header with the selected day

  document.querySelectorAll('.weekListElement').forEach(el => el.classList.remove('active')); // Remove 'active' from all day elements

  element.classList.add('active'); // Add 'active' to the selected day element

  updateTodoList(); // Update the task list for the selected day

}

 