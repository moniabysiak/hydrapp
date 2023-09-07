const addGlass = document.querySelector('.add--glass--js');
const deleteGlass = document.querySelector('.delete--glass--js');
const counter = document.querySelector('.counter--js');

const key = new Date().toISOString().slice(0, 10)
var numberOfGlasses = 0;

addGlass.addEventListener("click", function () {
  numberOfGlasses += 1;
  counter.innerHTML = numberOfGlasses;
  localStorage.setItem(key, numberOfGlasses);
}
)

deleteGlass.addEventListener("click", function () {
  if (numberOfGlasses > 0) {
    numberOfGlasses -= 1;
  }
  counter.innerHTML = numberOfGlasses;
  localStorage.setItem(key, numberOfGlasses);
})

let checkGlasses = localStorage.getItem(parseInt(numberOfGlasses));

if (!checkGlasses) {
  localStorage.setItem(key, 0);
}
