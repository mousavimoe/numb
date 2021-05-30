'use strict';

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').style.color = 'white';
});

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 7;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please enter a number dumbass!🍑';
    console.log(guess);
  }

  if (guess > 20) {
    document.querySelector('.message').textContent =
      'I said between 1 to 20 Dickhead!🖕';
    document.querySelector('.message').style.color = 'Red';
  }

  //   WHEN GUESS IS CORRECT
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🏆Congrats Bitch!🖕';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //   WHEN GUESS IS TOO LOW
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High! 🔼🖕 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Game Over Bitch! You lost the game 😆 ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#ff0027';
    }

    //   WHEN GUESS IS TOO HIGH
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! 🔽 🖕 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Game Over Bitch! You lost the game 😆 ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#ff0027';
    }
  }
});
