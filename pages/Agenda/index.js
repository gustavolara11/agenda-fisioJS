const openModal = () => {
  const modal = document.getElementById("modal-content");
  modal.style.display = "flex";
};

const closeModal = () => {
  const modal = document.getElementById("modal-content");
  modal.style.display = "none";
};

const agenda = [];

const newAppoint = () => {
  const name = document.getElementById("name-add").value;
  const date = document.getElementById("date-add").value;
  const hour = document.getElementById("hour-add").value;

  const appointment = {
    name: name,
    date: date,
    hour: hour,
  };

  agenda.push(appointment);

  const table = document.getElementById("table1");

  const newRow = document.createElement("tr");

  const newHour = document.createElement("td");
  newHour.textContent = hour;

  const newName = document.createElement("td");
  newName.textContent = name;

  const newActions = document.createElement("td");

  const editButton = document.createElement("button");
  editButton.className = "button-2";
  editButton.textContent = "Alterar";

  const deleteButton = document.createElement("button");
  deleteButton.className = "button-2";
  deleteButton.textContent = "Excluir";
  deleteButton.addEventListener("click", () => {
    deleteAppointment(newRow);
  });

  newActions.appendChild(editButton);
  newActions.appendChild(deleteButton);

  newRow.appendChild(newHour);
  newRow.appendChild(newName);
  newRow.appendChild(newActions);

  table.appendChild(newRow);

  closeModal();
};

const deleteAppointment = (row) => {
  const table = document.getElementById("table1");
  table.removeChild(row);
};
