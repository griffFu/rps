function computerplay(){
    let options = ["Rock","Paper","Scissors"]
    let valueToUse = options[Math.floor(Math.random() * options.length)]
    return valueToUse
}


function playerselection(){
    let selection = prompt("What do you choose?")
    newSelection = selection.toLowerCase()
    return newSelection

}


playerselection()

function playround(computerplay, newSelection){



}
let computer = computerplay

//hey griff, so as of now you need to create a round of play where the comparison is made between the two variables
//then, you can create the game where the user will play 5 rounds. Also, maybe keep a tally. 