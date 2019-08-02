/* Thanks to "whatsdev" on YouTube for providing this tutorial, definitly a solid piece of work... 
Entertaining, informative, and MOST IMPORTANTLY beginner freindly. :)
*/

/* Caching a lot of the info in the DOM with listing out the majority of these constints in one spot... 
    The benefit of caching these variables in the DOM is mainly for speed and... 
    reducing the amount of processes needed for the machine to do 
*/
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// Rounding down the random number choosen by Math.random, then placing it into either r, s, or p
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// converting the silly letters into proper words, so humans don't get mad at me (says the machine)
function convertToWord(letter) {
  if (letter === 'p') return 'Paper';
  if (letter === 's') return 'Scissors';
  return 'Rock';
}

// Incrementing the users score, populating it in on the screen, & adding some glowing ascetics (green)
function win(userChoice, computerChoice) {
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats
    ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

// Incrementing the computers score, populating it in on the screen, & adding some glowing ascetics (red)
function lose(userChoice, computerChoice) {
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to
      ${convertToWord(computerChoice)}${smallCompWord}. You lose... `;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

// No increment needed & adding some glowing ascetics (grey) to help the user know what happened
function draw(userChoice, computerChoice) {
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals
      ${convertToWord(computerChoice)}${smallCompWord}. it's a draw! `;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

//Comparing the computers choice with the users choice, to figure whose won, lost, or drawn
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

//Using Event Listeners to track when the user clicks on any of the buttons
function main() {
  rock_div.addEventListener('click', () => game('r'));
  paper_div.addEventListener('click', () => game('p'));
  scissors_div.addEventListener('click', () => game('s'));
}

main();
