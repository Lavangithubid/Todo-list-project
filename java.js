let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
console.log(itemsArray);

let enterEl = document.getElementById("enter");
enterEl.addEventListener("click", function () {
  let itemEl = document.getElementById("item");
  createItem(itemEl);
});
function createItem(itemEl) {
  itemsArray.push(itemEl.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}
function displayItems() {
  items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="item">
        <div class="input-controller">
            <textarea disabled rows='1'>${itemsArray[i]}</textarea>
            <div class="edit-controller">
                <i class="fa-solid fa-pen editBtn"></i>
                <i class="fa-solid fa-trash deleteBtn"></i>
            </div>
            <div class="update-controller">
                <button class="saveBtn">save</button>
                <button class="cancelBtn">cancel</button>
            </div>
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
  console.log(deleteBtn);

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

  let updateEl = document.querySelectorAll(".update-controller");
  let inputs = document.querySelectorAll(".input-controller textArea");

  console.log("inputs: ", inputs);

  editBtn.forEach((eb, i) => {
    console.log("editBtn: ", eb);
    eb.addEventListener("click", () => {
      updateEl[i].style.display = "block";
      inputs[i].disabled = false;
    });
  });
}

function activateSaveListeners() {
  let saveBtn = document.querySelectorAll(".saveBtn");
  let inputs = document.querySelectorAll(".input-controller textArea");
  saveBtn.forEach((sb, i) => {
    sb.addEventListener("click", () => {
      updateItem(inputs[i].value, i);
    });
  });
}

function activateCancelListeners() {
  let cancelBtn = document.querySelectorAll(".cancelBtn");
  let updatecontroller = document.querySelectorAll(".update-controller");
  let inputs = document.querySelectorAll(".input-controller textArea");
  cancelBtn.forEach((cb, i) => {
    cb.addEventListener("click", () => {
      updatecontroller[i].style.display = "none";
      inputs[i].disabled = true;
    });
  });
}

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  date = date[1] + " " + date[2] + " " + date[3];
  console.log(date);
  document.getElementById("date").innerHTML = date;
}

window.onload = function () {
  displayDate();
  displayItems();
};
