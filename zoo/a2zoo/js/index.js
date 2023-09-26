let zoo = null

let zooAnimalContainer = document.getElementById("zooAnimalContainer")
let zooNameElement = document.getElementById("zooName")
let zooCapacityElement = document.getElementById("zooCapacity")
let zooGuestsElement = document.getElementById("zooGuests")

let zooAnimalTable = document.getElementById("zooAnimalTable")

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
    zooGuestsElement.innerText = zoo.numGuests

    // Add an HTML representation of all animals.
    zoo.animals.forEach(function (v, i, arr) {
        let newAnimal = document.createElement("p")
        newAnimal.innerText = `Name: ${v.name}\nType: ${v.type}\nAge: ${v.age}\nGender: ${v.gender}\nWeight: ${v.weight}\nIs Pregnant: ${v.isPregnant}`
        zooAnimalContainer.appendChild(newAnimal)

        let animalRow = createTableRow([v.name, v.type, v.age, v.gender, v.weight, v.isPregnant])
        zooAnimalTable.appendChild(animalRow)
    })
}

function createTableRow(dataArr) {
    let row = document.createElement("tr")
    dataArr.forEach(function (v, i, arr) {
        let data = document.createElement("td")
        data.innerText = v
        row.appendChild(data)
    })

    return row
}

function populateZoo() {
    // Push to array
    zoo.animals.push({
        name: "Perry",
        type: "Platypus",
        age: 2,
        gender: "Female",
        weight: 3.2,
        isPregnant: true
    })

    // Create object
    zoo.animals.push({
        name: "Harry",
        type: "Hummingbird",
        age: 2,
        gender: "Male",
        weight: 3.2,
        isPregnant: false
    })

    // Create object
    zoo.animals.push({
        name: "Sherry",
        type: "Shark",
        age: 2,
        gender: "Female",
        weight: 852,
        isPregnant: true
    })

    // Create object
    zoo.animals.push({
        name: "Cherry",
        type: "Chimpanzee",
        age: 2,
        gender: "Female",
        weight: 3.2,
        isPregnant: true
    })

    // Log animals
    zoo.animals.forEach(animal => {
        console.log(animal)
    });

    // Log animals
    console.log(zoo.animals)

    updateDisplay()
}