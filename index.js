

 

let useScore = 0;
let spock ="./images/icon-spock.svg"
let scissors = "./images/icon-scissors.svg"
let paper = "./images/icon-paper.svg"
let lizard = "./images/icon-lizard.svg"
let rock = "./images/icon-rock.svg"


let gameImage =  [
 spock , scissors , paper , lizard, rock 
]

let youPickedDisplay = document.getElementById("youImage")
let housePickDisplay = document.getElementById("houseImage")
let randomPick = document.getElementById("randomPick")
let resultDisplay = document.getElementById("result")
let userScoreDisplay = document.getElementById("useScoreDisplay")
let userChoice
let computerChoice
let result




randomPick.addEventListener("click" ,function(){
    let randomIndexOne = Math.floor(Math.random() * gameImage.length)
    let randomIndexTwo = Math.floor(Math.random() * gameImage.length)
    youPickedDisplay.src = gameImage[randomIndexOne]
    housePickDisplay.src = gameImage[randomIndexTwo]
    getResult()
})





function getResult(){
    drawResult()
    winResult()
 
}




function drawResult(){
    if ( youPickedDisplay.src == housePickDisplay.src){
         result = 'it a draw'
         useScore++;
         userScoreDisplay.innerHTML =   useScore

    }
     resultDisplay.innerHTML = result 
    }


//     function winResult(){
//         if (youPickedDisplay.src === gameImage.length[1] && housePickDisplay.src === gameImage.length[2]){
//         result = 'You Win'
//     }
//     else if (youPickedDisplay.src === gameImage.length[2] && housePickDisplay.src === gameImage.length[4]){
//         result = 'You Win'
//     }
//    else if (youPickedDisplay.src === gameImage.length[4] && housePickDisplay.src === gameImage.length[1]){
//         result = 'You Win'
//     }

//     resultDisplay.innerText = result 
//     }




















