const liste = document.querySelector("#liste");
const form = document.querySelector("#myForm");
const input1 = document.querySelector("#input1");
const btnEkle = document.querySelector("#btnEkle");
const btnSil = document.querySelector("#btnSil");

//check if there are existing localstorage items, store them into an array
let itemsArr = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

// update dom and localstorage function
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
    input1.value = "";
  }
});

btnSil.addEventListener("click", () => {
  liste.innerHTML = "";
  itemsArr = [];
  localStorage.clear();
});

// delete "li" elements from dom. its now also delete from localstorage and array. 
liste.addEventListener("click", (e) => {
   if (e.target.tagName === "LI") {
    let silinecek = e.target.innerHTML;
    itemsArr.splice(itemsArr.indexOf(silinecek), 1);
    e.target.remove();
    localStorage.setItem("items", JSON.stringify(itemsArr));
   }
});


listeUpdate(itemsArr);
