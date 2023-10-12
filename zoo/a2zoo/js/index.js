let zoo = null

let zooAnimalContainer = document.getElementById("zooAnimalContainer")
let zooNameElement = document.getElementById("zooName")
let zooCapacityElement = document.getElementById("zooCapacity")
let zooAnimalCountElement = document.getElementById("zooAnimalCount")
let zooGuestsElement = document.getElementById("zooGuests")

let zooAnimalTable = document.getElementById("zooAnimalTable")

let zooAnimalDropdown = document.getElementById("formAnimals")

function createZoo() {
    // Log to console
    console.log("Creating zoo...")

    // Create zoo object
    zoo = {
        name: "Como Zoo",
        capacity: 200,
        numGuests: 150,
        animals: [],
    }

    // Log to console
    console.log(zoo)

    updateDisplay()
}

function updateDisplay() {
    zooNameElement.innerText = zoo.name
    zooCapacityElement.innerText = zoo.capacity
    zooAnimalCountElement.innerText = zoo.animals.length
    zooGuestsElement.innerText = zoo.numGuests
}

function admitGuest() {
    zoo.numGuests++
    updateDisplay()
}

// Dynamically create a table row with the strings provided
function createTableRow(dataArr) {
    let row = document.createElement("tr")
    dataArr.forEach(function (v, i, arr) {
        let data = document.createElement("td")
        data.innerText = v
        row.appendChild(data)
    })

    // Add a remove and edit button
    let editBtnContainer = document.createElement("td")
    let editBtn = document.createElement("button")
    editBtn.innerText = "Edit"
    editBtn.addEventListener("click", (event) => {
        let index = Array.prototype.indexOf.call(zooAnimalTable.children, row) - 1
        populateEditForm(index)
    })
    editBtnContainer.appendChild(editBtn)
    row.appendChild(editBtnContainer)

    let removeBtnContainer = document.createElement("td")
    let removeBtn = document.createElement("button")
    removeBtn.innerText = "Remove"
    removeBtn.addEventListener("click", (event) => {
        let index = Array.prototype.indexOf.call(zooAnimalTable.children, row) - 1
        removeZooAnimal(index)
    })
    removeBtnContainer.appendChild(removeBtn)
    row.appendChild(removeBtnContainer)

    return row
}

function populateZoo() {
    // Push to array
    addZooAnimal({
        name: "Perry",
        type: "Platypus",
        age: 2,
        gender: "Female",
        weight: 3.2,
        isPregnant: true
    }, true)

    // Create object
    addZooAnimal({
        name: "Harry",
        type: "Hummingbird",
        age: 2,
        gender: "Male",
        weight: 3.2,
        isPregnant: false
    }, true)

    // Create object
    addZooAnimal({
        name: "Sherry",
        type: "Shark",
        age: 2,
        gender: "Female",
        weight: 852,
        isPregnant: true
    }, true)

    // Create object
    addZooAnimal({
        name: "Cherry",
        type: "Chimpanzee",
        age: 2,
        gender: "Female",
        weight: 3.2,
        isPregnant: true
    })

    // Log animals
    console.log(zoo.animals)

    updateDisplay()
}

// Add new animal on top
function addZooAnimal(animal, deferUpdate = false) {
    insertAnimal(animal, zoo.animals.length, deferUpdate)
}

// Insert a new animal at a specific index
function insertAnimal(animal, index, deferUpdate = false) {
    // Add animal and log it
    zoo.animals.splice(index, 0, animal)
    console.log(animal)

    // Add Animal HTML
    let newAnimal = document.createElement("p")
    newAnimal.innerText = `Name: ${animal.name}\nType: ${animal.type}\nAge: ${animal.age}\nGender: ${animal.gender}\nWeight: ${animal.weight}\nIs Pregnant: ${animal.isPregnant}`
    zooAnimalContainer.insertBefore(newAnimal, zooAnimalContainer.childNodes[index])

    // Update the animal table
    let animalRow = createTableRow([animal.name, animal.type, animal.age, animal.gender, animal.weight, animal.isPregnant])
    zooAnimalTable.insertBefore(animalRow, zooAnimalTable.childNodes[index + 2])

    // Update the animal choice form
    let animalChoice = document.createElement("option")
    animalChoice.value = zooAnimalDropdown.childElementCount.toString()
    animalChoice.innerText = animal.name
    zooAnimalDropdown.insertBefore(animalChoice, zooAnimalDropdown.childNodes[index])

    // Update zoo display if we're told to do so
    if (!deferUpdate)
        updateDisplay()
}

// Remove existing animal and insert a new one to edit it.
function editZooAnimal(index, animal) {
    removeZooAnimal(index)
    insertAnimal(animal, index)
}

// Remove animal nodes and update the DOM
function removeZooAnimal(index) {
    console.log(index)
    zoo.animals.splice(index, 1)
    zooAnimalContainer.children[index].remove()
    zooAnimalTable.children[index + 1].remove()
    zooAnimalDropdown.children[index].remove()
    updateDisplay()
}

let a4Form = document.getElementById('a4Form');
let formThankYou = document.getElementById("formThankYou")
let formError = document.getElementById("formError")

// Prevent form but submitting and display the thank you message.
a4Form.addEventListener('submit', event => {
    // prevent the browser from submitting
    event.preventDefault();

    // Make sure the user put in a username
    let username = a4Form.elements['userName'].value
    if (!username) {
        formThankYou.style = "display: none;"

        formError.innerText = "Name cannot be blank."
        return
    }

    formError.innerText = ""
    formThankYou.style = ""
});

let animalForm = document.getElementById('animalForm');
let animalError = document.getElementById("animalError")

// Prevent form but submitting and display the thank you message.
animalForm.addEventListener('submit', event => {
    // prevent the browser from submitting
    event.preventDefault();

    // Make sure the user put in a username
    let name = animalForm.elements['animalName'].value
    if (!name) {
        animalError.innerText = "Name cannot be blank."
        return
    }

    // Make sure the user put in a type
    let type = animalForm.elements['animalType'].value
    if (!type) {
        animalError.innerText = "Type cannot be blank."
        return
    }

    // Make sure the user put in an age
    let age = Number(animalForm.elements['animalAge'].value)
    if (!age || age <= 0) {
        animalError.innerText = "Age cannot be blank and must be greater than 0."
        return
    }

    // Make sure the user put in a gender
    let gender = animalForm.elements['animalGender'].value
    if (!gender) {
        animalError.innerText = "Gender cannot be blank."
        return
    }

    // Make sure the user put in a weight
    let weight = Number(animalForm.elements['animalWeight'].value)
    if (!weight || weight <= 0) {
        animalError.innerText = "Weight cannot be blank and must be greater than 0."
        return
    }

    // No need for validation as a checkbox can only have two states
    let isPregnant = animalForm.elements['animalPregnant'].checked

    let animal = {
        name: name,
        type: type,
        age: age,
        gender: gender,
        weight: weight,
        isPregnant: isPregnant
    }

    if (animalForm.elements['animalIndex'].value) {
        let index = Number(animalForm.elements['animalIndex'].value)

        editZooAnimal(index, animal)
        animalForm.reset()
    }
    else {
        addZooAnimal(animal)
    }

    animalForm.elements['animalIndex'].value = ""
    animalError.innerText = ""
});

// Fill in existing values into edit form
function populateEditForm(index) {
    let animal = zoo.animals[index]
    animalForm.elements['animalIndex'].value = index.toString()
    animalForm.elements['animalName'].value = animal.name
    animalForm.elements['animalType'].value = animal.type
    animalForm.elements['animalAge'].value = animal.age
    animalForm.elements['animalGender'].value = animal.gender
    animalForm.elements['animalWeight'].value = animal.weight
    animalForm.elements['animalPregnant'].checked = animal.isPregnant
}