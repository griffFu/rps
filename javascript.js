// giving the computer a selection between the three options
function computerplay(){
    let options = ["rock","paper","scissors"]
    let valueToUse = options[Math.floor(Math.random() * options.length)]
    return valueToUse
}

// function that prompts player to chose their option for rock paper scissors
function playerselection(){
    let selection = prompt("What do you choose?")
    newSelection = selection.toLowerCase()
    return newSelection

}




// function that plays a round and tells the user what 
function playround(computerplay, playerselection){
    if (computerplay == playerselection){
        console.log("You both chose " + computerplay + ". You tie!")
    }

    else if (computerplay != playerselection){
        if (playerselection === "rock" && computerplay === "scissors"){
            console.log("The computer chose " +  computerplay + ". You win!")
        }

        if (playerselection === "rock" && computerplay === "paper"){
            console.log("The computer chose " +  computerplay + ". You lost!")
        }

        if (playerselection === "scissors" && computerplay === "rock"){
            console.log("The computer chose " +  computerplay + ". You lost!")
        }

        if (playerselection === "scissors" && computerplay === "paper"){
            console.log("The computer chose " +  computerplay + ". You win!")
        }
        
        if (playerselection === "paper" && computerplay === "scissors"){
            console.log("The computer chose " +  computerplay + ". You lost!")
        }

        if (playerselection === "paper" && computerplay === "rock"){
            console.log("The computer chose " +  computerplay + ". You lost!")
        }
        
    }

}

function playgame(){
    for (let i = 0; i<5; i++){
        let comp = computerplay()
        let player = playerselection()
        console.log(playround(comp,player))
    }
}

playgame()

