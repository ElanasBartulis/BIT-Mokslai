async function getAllUsers() {
  const promise = await fetch("http://localhost:8080/saskaita");
  try {
    const response = await promise.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getOneUserById(id) {
  const promise = await fetch(`http://localhost:8080/saskaita/${id}`);
  try {
    const response = await promise.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function createNewUser(user) {
  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  const promise = await fetch(
    `http://localhost:8080/saskaita/sukurti`,
    options
  );
  try {
    const response = await promise.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function addToBalance(amount, id) {
  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(amount),
  };
  const promise = await fetch(
    `http://localhost:8080/saskaita/${id}/imoka`,
    options
  );
  try {
    const response = await promise.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function removeFromBalance(amount, id) {
  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(amount),
  };
  const promise = await fetch(
    `http://localhost:8080/saskaita/${id}/ismoka`,
    options
  );
  try {
    const response = await promise.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function deleteUser(id) {
  const option = {
    method: "delete",
  };
  const promise = await fetch(`http://localhost:8080/saskaita/${id}`, option);
  try {
    const response = await promise.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getAllUsers,
  getOneUserById,
  createNewUser,
  addToBalance,
  removeFromBalance,
  deleteUser,
};
