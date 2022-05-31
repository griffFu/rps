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
        const div = document.createElement('div')
        div.textContent = `You both chose ${computerplay}. you tie!`
        container.appendChild(div)

    }

    else if (computerplay != playerselection){
        if (playerselection === "rock" && computerplay === "scissors"){
            const div = document.createElement('div')
            div.textContent = `The computer chose ${computerplay}. you win!`
            container.appendChild(div)
        }

        if (playerselection === "rock" && computerplay === "paper"){
            const div = document.createElement('div')
            div.textContent = `The computer chose ${computerplay}. you lost!`
            container.appendChild(div)
        }

        if (playerselection === "scissors" && computerplay === "rock"){
            const div = document.createElement('div')
            div.textContent = `The computer chose ${computerplay}. you lost!`
            container.appendChild(div)
        }

        if (playerselection === "scissors" && computerplay === "paper"){
            const div = document.createElement('div')
            div.textContent = `The computer chose ${computerplay}. you win!`
            container.appendChild(div)
        }
        
        if (playerselection === "paper" && computerplay === "scissors"){
            const div = document.createElement('div')
            div.textContent = `The computer chose ${computerplay}. you lost!`
            container.appendChild(div)
        }

        if (playerselection === "paper" && computerplay === "rock"){
            const div = document.createElement('div')
            div.textContent = `The computer chose ${computerplay}. you lost!`
            container.appendChild(div)
        }
            

        }
        
    }




let comp = computerplay()
const container = document.querySelector('.container')
//let player = playerselection()

//playround(comp,player)


//here is the js for the gui, first I am trying to play RPS with the buttons that I have created

//assigning variables to RPS
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//telling the JS what the player selected so the game can run, at this point at would only display the results in the console
rock.addEventListener('click', () => {
    player = "rock";
    playround(comp,player);

});

paper.addEventListener('click', () => {
    player = "paper";
    playround(comp,player);

});

scissors.addEventListener('click', () => {
    player = "scissors";
    playround(comp,player);

});

