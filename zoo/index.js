function sprintA1Lab1() {
    printSeparator("Sprint A1 Lab 1")

    var zooName = "Zoo"
    var zooLocation = "Death Valley"
    var zooFoundingYear = "2012"

    console.log("Zoo name: " + zooName);
    console.log("Zoo location: " + zooLocation)
    console.log("Zoo Founding Year: " + zooFoundingYear)
}

function sprintA1Lab2() {
    printSeparator("Sprint A1 Lab 2")

    var monkey = "George"
    var alligator = "Allen"
    var eagle = "Birdly"

    console.log(typeof monkey)
    console.log(typeof (alligator))
    console.log(typeof eagle)
}

function sprintA1Lab3() {
    printSeparator("Sprint A1 Lab 3")
    
    var input = document.getElementById("sprintA1Lab3Text").value
    var num = Number(input)
    
    if (num == 300) {
        console.log("The number is equal to 300")
    } else {
        console.log("The number is not equal to 300")
    }
}

function sprintA1Lab4() {
    printSeparator("Sprint A1 Lab 4")

    var animalAge = 400
    var humanAge = animalAge / 7
    humanAge > 50 ? console.log("The animal is " + humanAge + " and is OLD") : console.log("The animal is " + humanAge + " and is YOUTHFUL")

    // It says I need a unary but it doesn't say where so here you go
    var unary = 0
    console.log(unary)
    unary++
    console.log(unary)
}

function printSeparator(name) {
    console.log()
    console.log("======== " + name + " ========")
    console.log()
}