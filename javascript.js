//setting the variable for the score that will update based on who won the round
let playerscore = 0
let computerscore = 0


// function that plays a round and tells the user what 
function playround(playerselection){
    //setting the option that they computer chose
    let options = ["egg","gc","rage"]
    let computerplay = options[Math.floor(Math.random() * options.length)]

    //getting the result for the thing
    let result = document.getElementById('result')
    

    //scenario when player and computer chose the same thing
    if (computerplay == playerselection){
        //const div = document.createElement('div')
        //div.textContent = `You both chose ${computerplay}. you tie!`
        //container.appendChild(div)
        result.innerHTML = `You both chose ${computerplay}. you tie!`
            

    }

    else if (computerplay != playerselection){
       
        if (playerselection === "egg" && computerplay === "rage"){
            //const div = document.createElement('div')
            //div.textContent = `The computer chose ${computerplay}. you win!`
            //container.appendChild(div)
            result.innerHTML = `The computer chose ${computerplay}. you win!`
            ++playerscore 
        }

        if (playerselection === "egg" && computerplay === "gc"){
            //const div = document.createElement('div')
            //div.textContent = `The computer chose ${computerplay}. you lost!`
            //container.appendChild(div)
            result.innerHTML = `The computer chose ${computerplay}. you lost!`
            ++computerscore 

        }

        if (playerselection === "rage" && computerplay === "egg"){
            //const div = document.createElement('div')
            //div.textContent = `The computer chose ${computerplay}. you lost!`
            //container.appendChild(div)
            result.innerHTML = `The computer chose ${computerplay}. you lost!`
            ++computerscore 
        }

        if (playerselection === "rage" && computerplay === "gc"){
            //const div = document.createElement('div')
            //div.textContent = `The computer chose ${computerplay}. you win!`
            //container.appendChild(div)
            result.innerHTML = `The computer chose ${computerplay}. you win!`
            ++playerscore
        }
        
        if (playerselection === "gc" && computerplay === "rage"){
            //const div = document.createElement('div')
            //div.textContent = `The computer chose ${computerplay}. you lost!`
            //container.appendChild(div)
            result.innerHTML = `The computer chose ${computerplay}. you lost!`
            ++computerscore
        }

        if (playerselection === "gc" && computerplay === "egg"){
            //const div = document.createElement('div')
            //div.textContent = `The computer chose ${computerplay}. you lost!`
            //container.appendChild(div)
            result.innerHTML = `The computer chose ${computerplay}. you lost!`
            ++computerscore 
        }
            
        //selecting the score class from the html
        let playscore = document.getElementById('playerscore')
        let compscore = document.getElementById('compscore')

        playscore.innerHTML = playerscore;
        compscore.innerHTML = computerscore;




        //creating an element for the computer score and adding the score from the playround function
        //const displaycomp = document.createElement('p');
        //displaycomp.textContent = computerscore;
                                     


        //creating an element for the player score and adding the score from the playround function
        //const displayplayer = document.createElement('p');
        //displayplayer.textContent = playerscore;

        //compscore.appendChild(displaycomp);
        //playscore.appendChild(displayplayer);
        }
        
    }









//let comp = computerplay()
const container = document.querySelector('.container')
//let player = playerselection()

//playround(comp,player)


//here is the js for the gui, first I am trying to play RPS with the buttons that I have created

//assigning variables to RPS
const egg = document.querySelector('#egg');
const gc = document.querySelector('#gc');
const rage = document.querySelector('#rage');

//telling the JS what the player selected so the game can run, at this point at would only display the results in the console
egg.addEventListener('click', () => {
    player = "egg";
    playround(player);

});

gc.addEventListener('click', () => {
    player = "gc";
    playround(player);

});

rage.addEventListener('click', () => {
    player = "rage";
    playround(player);

});

