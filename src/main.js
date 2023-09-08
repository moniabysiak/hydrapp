const addGlass = document.querySelector('.add--glass--js');
const deleteGlass = document.querySelector('.delete--glass--js');
const counter = document.querySelector('.counter--js');

const key = new Date().toISOString().slice(0, 10)
var numberOfGlasses = 0;

let checkGlasses = localStorage.getItem(key);
console.log(checkGlasses);

if (checkGlasses == null) {
  localStorage.setItem(key, 0);
  counter.innerHTML = numberOfGlasses;
} else {
  numberOfGlasses = parseInt(checkGlasses);
  counter.innerHTML = numberOfGlasses;
}

addGlass.addEventListener("click", function () {
  numberOfGlasses += 1;
  counter.innerHTML = numberOfGlasses;
  localStorage.setItem(key, numberOfGlasses);
})

deleteGlass.addEventListener("click", function () {
  if (numberOfGlasses > 0) {
    numberOfGlasses -= 1;
  }
  counter.innerHTML = numberOfGlasses;
  localStorage.setItem(key, numberOfGlasses);
})

