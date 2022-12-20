const round = document.getElementById("round");
const displayPlayerChoice = document.getElementById("playerChoice")
const displayPcChoice = document.getElementById("pcChoice")
const allPlayerChoices = document.getElementById("choose")

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
  console.log(choices[Math.floor(Math.random() * 3)]);
  return choices[Math.floor(Math.random() * 3)];
};

function getPlayerChoice() {
  let allChoices = Array.from(allPlayerChoices.children)
  let currChoice = {}
  allChoices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
      currChoice[choice.alt] = choice;
      let displCh = document.createElement("img");
      displCh.src = choice.src;
      displayPlayerChoice.appendChild(displCh)
      return currChoice
    })
  })
} 

function oneRound(currPlayerSelection, computerSelection) {
  const playerSelection = Object.keys(currPlayerSelection)
  console.log(playerSelection)
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
      const thisChoice = getPlayerChoice();
      console.log(Object.keys(thisChoice))
      // let currRes = oneRound(thisChoice, computerPlay());
      // console.log(currRes)
      // while(currRes === 2) {
      //   currRes = oneRound(getPlayerChoice(), computerPlay());
      // }
      // if(currRes === 0) {
      //   computerWins++;
      // } else if(currRes === 1) {
      //   playerWins++;
      // } else {
      //   computerWins++;
      //   playerWins++;
      // }
      // round.innerHTML = `${i+1}`;
      // console.log(round)
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
