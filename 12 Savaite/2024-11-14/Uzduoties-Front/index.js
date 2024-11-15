import repo from "./repo.js";
const {
  getAllUsers,
  getOneUserById,
  createNewUser,
  addToBalance,
  removeFromBalance,
  deleteUser,
} = repo;

const allUsers = await getAllUsers();

//  Visi Users
displayAllUsers(allUsers);
function displayAllUsers(users) {
  const userList = document.querySelector("#user-list");
  let html = "";
  users.forEach((user) => {
    html += `<li class="click-me" id="${user.id}">${user.name} ${user.surname}</li>`;
  });
  userList.innerHTML = html;
}

// Priregistruoti user
function sendNewUserData() {
  const formElement = document.querySelector("#user-form");
  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const userDataObject = Object.fromEntries(formData.entries()); // Konvertinti i object
    await createNewUser(userDataObject);
    location.reload();
  });
}
sendNewUserData();

// Vienas User Balance
displayOneUserById();
function displayOneUserById() {
  const liElement = document.querySelector("ol");
  const tableElement = document.querySelector(".transaction-data");
  const balanceElement = document.querySelector(".balanceSum");

  liElement.addEventListener("click", async (event) => {
    const element = event.target.id;
    const user = await getOneUserById(element);
    balanceElement.id = user.id;
    cashIn(+balanceElement.id);
    cashOut(+balanceElement.id);
    deleteAccount(+balanceElement.id);
    const userBalanceFormatted = user.balance.toLocaleString();
    balanceElement.innerHTML = `${userBalanceFormatted}$`;

    let userTransactions = "";

    user.transactions.forEach((transaction) => {
      userTransactions += `<tr>
        <td class="${transaction.type === "Imoka" ? "green" : "red"}">${
        transaction.type
      }</td>
        <td>${transaction.amount} $</td>
        <td>${transaction.time}</td>
     </tr>
    `;
    });

    tableElement.innerHTML = userTransactions;
  });
}

// Cash-in
function cashIn(id) {
  const formElement = document.querySelector("#cash-in");
  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    formElement.action = `http://localhost:8080/saskaita/${id}/imoka`;
    const formData = new FormData(formElement);
    const userDataObject = Object.fromEntries(formData.entries()); // Konvertinti i object
    console.log(userDataObject);
    await addToBalance(userDataObject, id);
    location.reload();
  });
}

function cashOut(id) {
  const formElement = document.querySelector("#cash-out");
  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    formElement.action = `http://localhost:8080/saskaita/${id}/ismoka`;
    const formData = new FormData(formElement);
    const userDataObject = Object.fromEntries(formData.entries()); // Konvertinti i object
    console.log(userDataObject);
    await removeFromBalance(userDataObject, id);
    location.reload();
  });
}

function deleteAccount(id) {
  const deleteBtn = document.querySelector(".del");
  deleteBtn.addEventListener("click", async (event) => {
    console.log("clicked");
    event.preventDefault;
    await deleteUser(id);
    location.reload();
  });
}
