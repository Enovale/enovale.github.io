let zoo = null

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
    document.getElementById("zooName").innerText = zoo.name
    document.getElementById("zooCapacity").innerText = zoo.capacity
    document.getElementById("zooGuests").innerText = zoo.numGuests
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
}