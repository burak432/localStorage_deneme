const liste = document.querySelector("#liste");
const form = document.querySelector("#myForm");
const input1 = document.querySelector("#input1");
const btnEkle = document.querySelector("#btnEkle");
const btnSil = document.querySelector("#btnSil");

let itemsArr = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

function listeUpdate(itemsArr) {
  liste.innerHTML = "";
  for (let i = 0; i < itemsArr.length; i++) {
    newLi = document.createElement("li");
    newLi.innerHTML = itemsArr[i];
    liste.appendChild(newLi);
  }

  localStorage.setItem("items", JSON.stringify(itemsArr));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input1.value !== "") {
    itemsArr.push(input1.value);

    listeUpdate(itemsArr);
  }
});

btnSil.addEventListener("click", () => {
  liste.innerHTML = "";
  itemsArr = [];
  localStorage.clear();
});




listeUpdate(itemsArr);
