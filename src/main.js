const addGlass = document.querySelector('.add--glass--js');
const deleteGlass = document.querySelector('.delete--glass--js');
const counter = document.querySelector('.counter--js');

let key = new Date().toLocaleString().slice(0, 10)
let numberOfGlasses = 0;

setInterval(() => {
  if(key !== new Date().toLocaleString().slice(0, 10)) {
    key = new Date().toLocaleString().slice(0, 10)
    numberOfGlasses = 0
  }
}, 1000*60 )

let checkGlasses = localStorage.getItem(key);
console.log(checkGlasses);

if (checkGlasses == null) {
  localStorage.setItem(key, 0);
} else {
  numberOfGlasses = parseInt(checkGlasses);
}
counter.innerHTML = numberOfGlasses;

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

