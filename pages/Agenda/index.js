const openModal = () => {
  const openMod = document.getElementById("modal-content");
  openMod.style.display = "flex";
};

const closeModal = () => {
  const closeMod = document.getElementById("modal-content");
  closeMod.style.display = "none";
};

const newAppoint = () => {
  let pcte = {
    name: document.getElementById("name-add").value,
    date: document.getElementById("hour-add").value,
  };
  localStorage.setItem("pcte", JSON.stringify(pcte));
};

// let pcte = JSON.parse(localStorage.getItem("pcte"));
