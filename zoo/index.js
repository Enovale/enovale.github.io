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
    
    if (num == 300) {
        console.log("The number is equal to 300")
    } else {
        console.log("The number is not equal to 300")
    }
}

function sprintA1Lab4() {
    printSeparator("Sprint A1 Lab 4")

    let animalAge = 400
    let humanAge = animalAge / 7
    humanAge > 50 ? console.log("The animal is " + humanAge + " and is OLD") : console.log("The animal is " + humanAge + " and is YOUTHFUL")

    // It says I need a unary but it doesn't say where so here you go
    let unary = 0
    console.log(unary)
    unary++
    console.log(unary)
}

function printSeparator(name) {
    console.log()
    console.log("======== " + name + " ========")
    console.log()
}