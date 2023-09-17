function sprintA1Lab1() {
    printSeparator("Sprint A1 Lab 1")

    let zooName = "Zoo"
    let zooLocation = "Death Valley"
    let zooFoundingYear = "2012"

    console.log("Zoo name: " + zooName);
    console.log("Zoo location: " + zooLocation)
    console.log("Zoo Founding Year: " + zooFoundingYear)
}

function sprintA1Lab2() {
    printSeparator("Sprint A1 Lab 2")

    let monkey = "George"
    let alligator = "Allen"
    let eagle = "Birdly"

    if (typeof monkey === 'string')
    {
        console.log("The monkey is a string")
    }

    console.log(typeof monkey)
    console.log(typeof alligator)
    console.log(typeof eagle)
}

function sprintA1Lab3() {
    printSeparator("Sprint A1 Lab 3")
    
    // Get the user input
    let input = document.getElementById("sprintA1Lab3Text").value
    let num = Number(input)
    
    // Check if the number is over
    if (num > 300) {
        console.log("The number is over 300")
    } else if (num < 300) { // Check if its under
        console.log("The number is less than 300")
    } else { // Check if it's equal
        console.log("The number is equal to 300")
    }
}

function sprintA1Lab4() {
    printSeparator("Sprint A1 Lab 4")

    // Define and calculate ages.
    let humanAge = 20
    let animalAge = humanAge * 7
    // Print age
    console.log("Human Age: " + humanAge + ", Animal Age: " + animalAge)

    // Print whether old or not
    animalAge > 50 ? console.log("The animal is old") : console.log("The animal is youthful")

    // Defines a variable and uses a unary operator.
    let unary = 0
    console.log(unary)
    unary++
    console.log(unary)
}

function sprintA1Lab5() {
    printSeparator("Sprint A1 Lab 5")

    // Intentional errors
    try {
        myasfdsfkdla;jfaskfasfsakfjas;lkfjaslfsdajfl;sa += 2 == 3;
    }
    catch(e) {
        // Explain the error.
        if (e.name === 'ReferenceError') {
            console.error("A reference error has occured: " + e.message)
        }
        else {
            console.error("An error has occurred: " + e)
        }
    }
}

function sprintA2Lab1() {
    printSeparator("Sprint A2 Lab 1")

    // Define array
    let arr = [];

    // Add starter animals
    arr.push("Slug")
    arr.push("Cat")
    arr.push("Dog")

    // Remove the last element
    arr.pop()

    // Add two elements to the start of the array
    arr.unshift("Aligator", "Peacock")

    // Remove the first element of the array
    arr.shift()

    // Display the array in the console
    console.log(arr)
}

function sprintA2Lab2() {
    printSeparator("Sprint A2 Lab 2")

    // Define, and manipulate animals in the zoo.
    let zooAnimals =
        [
            {
                name: "Sally",
                species: "Beaver",
                age: 4,
                habitat: "Warm"
            },
            {
                name: "Dave",
                species: "Dog",
                age: 5,
                habitat: "Average"
            },
        ]

    zooAnimals.push({
        name: "Margaret",
        species: "Cat",
        age: 3,
        habitat: "Average"
    })

    // Edit the second animal's habitat.
    zooAnimals.splice(1, 1, {
        name: "Dave",
        species: "Dog",
        age: 5,
        habitat: "Room Temperature"
    })

    // Find the oldest animal in the zoo.
    let maxVal = 0
    let maxIndex = 0
    for (let i = 0; i < zooAnimals.length; i++) {
        if (maxVal < zooAnimals[i].age) {
            maxVal = zooAnimals[i].age
            maxIndex = i
        }
    }

    // Sort the animals by age in ascending order
    zooAnimals.sort(function (a, b) {
        return a.age - b.age
    })

    console.log(zooAnimals)

    // Display the oldest animal
    console.log(zooAnimals[maxIndex])
}

function A2Lab3Enclosure() {
    printSeparator("A2 Lab 3 Enclosure")

    // Calculate the enclosure area
    let enclosureLength = 10
    let enclosureWidth = 6
    let enclosureArea = Math.imul(enclosureLength, enclosureWidth)

    console.log("Enclosure Area: " + enclosureArea)
}

function A2Lab3Date() {
    printSeparator("A2 Lab 3 Date")

    // Get the current datetime and display it
    let date = new Date(Date.now())
    console.log(date)
}

function A2Lab3String() {
    printSeparator("A2 Lab 3 String")

    // Convert names to uppercase to fit on documents
    let legalName = "James"
    let processedName = legalName.toUpperCase()

    console.log(processedName)
}

function A2Lab3EvenOdd() {
    printSeparator("A2 Lab 3 Even Odd")

    for(let i = 0; i < 5; i++) {
        console.log(i + " is " + ((i % 2) ? "Odd" : "Even"))
    }
}

function printSeparator(name) {
    console.log()
    console.log("======== " + name + " ========")
    console.log()
}