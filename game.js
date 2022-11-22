function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

function lowerAndCapitalize(text) {
  let lowCaseText = text.toLowerCase();
  return lowCaseText.charAt(0).toUpperCase() + lowCaseText.slice(1);
};

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
  }
}