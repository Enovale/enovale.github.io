let animalDiv = document.getElementById("animalList")

function addAnimal() {
    let newAnimalName = document.getElementById("newAnimalName").value
    
    // Create new animal info block
    let newAnimal = document.createElement("div")
    let animalName = document.createElement("p")
    animalName.innerText = newAnimalName
    newAnimal.appendChild(animalName)
    
    // Add remove button to new animal
    let removeBtn = document.createElement("button")
    removeBtn.innerText = "Remove"
    removeBtn.addEventListener("click", function () {removeAnimal(newAnimal)}, false)
    newAnimal.appendChild(removeBtn)
    
    // Add the new animal to the list
    animalDiv.appendChild(newAnimal)
}

function removeAnimal(obj) {
    // Remove the animal object from the list of animals
    animalDiv.removeChild(obj)
}