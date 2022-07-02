const CHOICES = [
  {
    move: 'Rock',
    beats: 'Scissor',
  },
  {
    move: 'Paper',
    beats: 'Rock',
  },
  {
    move: 'Scissor',
    beats: 'Paper',
  },
];

const choiceButtons = document.querySelectorAll('[data-choice]');
const userScoreElement = document.querySelector('[data-user-score]');
const computerScoreElement = document.querySelector('[data-computer-score');

choiceButtons.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    const usersChoice = CHOICES.find((obj) => {
      return obj.move === e.target.dataset.choice;
    });
    const computersChoice = randomChoice();

    if (isWinner(usersChoice, computersChoice)) {
      incrementScore(userScoreElement);
    } else {
      incrementScore(computerScoreElement);
    }
  });
});

function incrementScore(textContainer) {
  //   console.log(textContainer);
  const integerValue = parseInt(textContainer.innerText) + 1;
  textContainer.innerText = integerValue.toString();
}

function randomChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

function isWinner(firstChoice, secondChoice) {
  return firstChoice.beats === secondChoice.move;
}
