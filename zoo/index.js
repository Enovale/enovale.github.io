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

function printSeparator(name) {
    console.log()
    console.log("======== " + name + " ========")
    console.log()
}