let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

let enterEl = document.querySelector("#enter");

enterEl.addEventListener("click", () => {
  let itemEl = document.getElementById("item");
  createItem(itemEl);
});

function displayItems() {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="item">
    <div class="input-controller">
        <textarea rows='1'  disabled>${itemsArray[i]}</textarea>
        <div class="edit-controller">
            <i class="fa-solid fa-pen editBtn"></i> 
            <i class="fa-solid fa-trash deleteBtn"></i>
        </div>
    </div>
    <div class="update-controller">
        <button class="saveBtn">Save</button>
        <button class="CancelBtn">Cancel</button>
    </div>
</div>`;
    console.log(items);
  }
  document.querySelector(".to-do-list").innerHTML = items;

  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
}

function activateDeleteListeners() {
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  deleteBtn.forEach((db, i) => {
    db.addEventListener("click", () => {
      deleteItem(i);
    });
  });
}

function deleteItem(i) {
  itemsArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function activateEditListeners() {
  let editBtn = document.querySelectorAll(".editBtn");
  let updatecontroller = document.querySelectorAll(".update-controller");
  let inputs = document.querySelectorAll(".input-controller textarea");
  editBtn.forEach((eb, i) => {
    eb.addEventListener("click", () => {
      updatecontroller[i].style.display = "block";
      inputs[i].disabled = false;
    });
  });
}
function activateSaveListeners() {
  let saveBtn = document.querySelectorAll(".saveBtn");
  let inputs = document.querySelectorAll(".input-controller textarea");
  saveBtn.forEach((sb, i) => {
    sb.addEventListener("click", () => {
      updateItem(inputs[i].value, i);
    });
  });
}

function updateItem(text, i) {
  itemsArray[i] = text;
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function activateCancelListeners() {
  let CancelBtn = document.querySelectorAll(".cancelBtn");
  let updatecontroller = document.querySelectorAll(".update-controller");
  let inputs = document.querySelectorAll(".input-controller textarea");
  CancelBtn.forEach((cb, i) => {
    cb.addEventListener("click", () => {
      updatecontroller[i].style.display = "none";
      inputs[i].disabled = true;
    });
  });
}

function createItem(itemEl) {
  itemsArray.push(itemEl.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  date = date[1] + " " + date[2] + " " + date[3];
  document.getElementById("date").innerHTML = date;
}

window.onload = function () {
  displayDate();
  displayItems();
};
