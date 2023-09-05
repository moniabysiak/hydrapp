const addGlass = document.querySelector('.add--glass--js');
console.log(addGlass)

const deleteGlass = document.querySelector('.delete--glass--js');
console.log(deleteGlass)

const counter = document.querySelector('.counter--js');
console.log(counter)

var numberOfGlasses = 0;

addGlass.addEventListener("click", function() { 
    numberOfGlasses += 1;
    counter.innerHTML = numberOfGlasses; 
  }
)

deleteGlass.addEventListener("click", function() {
  if (numberOfGlasses >0) {
    numberOfGlasses -= 1;
  }
  counter.innerHTML = numberOfGlasses; 
})