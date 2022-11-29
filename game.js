const round = document.getElementById("round");
const displayPlayerChoice = document.getElementById("playerChoice")
const displayPcChoice = document.getElementById("pcChoice")
const allPlayerChoices = document.getElementById("choose")
//console.log(currPlayerChoice)
console.log(allPlayerChoices)


function computerPlay() {
  const img1 = new Image()
  img1.src = "./Assets/img/rock.png"
  img1.alt = "Rock"
  const img2 = new Image()
  img2.src = "./Assets/img/paper.png"
  img2.alt = "Paper"
  const img3 = new Image()
  img3.src = "./Assets/img/scissors.png"
  img3.alt = "Scissors"
  const choices = [img1, img2, img3];
  return choices[Math.floor(Math.random() * 3)];
};

console.log(computerPlay())
console.log(computerPlay().getAttribute(["alt"]))

function getPlayerChoice(allPlayerChoices) {
  allPlayerChoices.addEventListener('click', () => {
    
  })
} 

function oneRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    console.log("It\'s a tie!")
    return -1;
  } else {
    if(playerSelection === "Rock") {
      if(computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors!");
        return 1;
      } else {
        console.log("You lose! Paper beats Rock!");
        return 0;
      }
    } else if(playerSelection === "Paper") {
      if(computerSelection === "Rock") {
        console.log("You win! Paper beats Rock!")
        return 1;
      } else {
        console.log("You lose! Scissors beat Paper!")
        return 0;
      }
    } else if(playerSelection === "Scissors") {
      if(computerSelection === "Paper") {
        console.log("You win! Scissors beat Paper!")
        return 1;
      } else {
        console.log("You lose! Rock beats Scissors!")
        return 0;
      }
    } else {
      console.log("Please enter a valid choice!")
      return 2;
    }
  };
}

  function game() {
    let playerWins = 0;
    let computerWins = 0;
    for(let i=0; i < 5; i++) {
      let playerSelection = prompt("Enter your choice: ");
      let currPlayerSelection = lowerAndCapitalize(playerSelection);
      let currRes = oneRound(currPlayerSelection, computerPlay());
      while(currRes === 2) {
        let newChoice = prompt("Enter your new choice: ");
        let lowerNewChoice = lowerAndCapitalize(newChoice);
        currRes = oneRound(lowerNewChoice, computerPlay());
      }
      if(currRes === 0) {
        computerWins++;
      } else if(currRes === 1) {
        playerWins++;
      } else {
        computerWins++;
        playerWins++;
      }
      console.log(`This is the ${i+1} round!`);
    }
    console.log(`Results: Computer points: ${computerWins} - Your points: ${playerWins}`);
    if(computerWins > playerWins) {
      console.log("Computer wins!");
    } else if(playerWins > computerWins) {
      console.log("Player wins!")
    } else {
      console.log("It\'s a tie!")
    }
    console.log("Refresh the page for a new game!")
  };

game();
