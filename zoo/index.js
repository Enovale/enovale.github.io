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
    
    let input = document.getElementById("sprintA1Lab3Text").value
    let num = Number(input)
    
    if (num > 300) {
        console.log("The number is over 300")
    }
    else if (num < 300) {
        console.log("The number is less than 300")
    } else {
        console.log("The number is equal to 300")
    }
}

function sprintA1Lab4() {
    printSeparator("Sprint A1 Lab 4")

    /*
    // Set the age
    let animalAge = 400
    let humanAge = animalAge / 7 // This is 57.7 or so
    console.log("Animal age: " + animalAge + ", Human age: " + humanAge)

    // Check the age and print to console
    humanAge > 50 ? console.log("The animal is OLD") : console.log("The animal is YOUTHFUL")
    */

    // The rubric says to calculate the human age but apparently thats wrong so i'll do it in reverse this time
    let humanAge = 20
    let animalAge = humanAge * 7
    // Print age
    console.log("Human Age: " + humanAge + ", Animal Age: " + animalAge)

    // Print whether old or not
    animalAge > 50 ? console.log("The animal is old") : console.log("The animal is youthful")

    // It says I need a unary but it doesn't say where so here you go
    let unary = 0
    console.log(unary)
    unary++
    console.log(unary)
}

function sprintA1Lab5() {
    printSeparator("Sprint A1 Lab 5")

    try {
        myasfdsfkdla;jfaskfasfsakfjas;lkfjaslfsdajfl;sa += 2 == 3;
    }
    catch(e) {
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