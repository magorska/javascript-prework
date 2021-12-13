function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  printMessage('Twój ruch to: ' + argButtonName);

  /* ruch komputera */
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  function getMoveName(argMoveId) {
      console.log('Wywołano funkcję getMoveName z argumentem: ' + argMoveId);

      if (argMoveId == 1) {
          return 'kamień';
      } else if (argMoveId == 2) {
          return 'papier';
      } else if (argMoveId == 3) {
          return 'kamień';
      }
  }

  const computerMove = getMoveName(randomNumber);
  printMessage('Ruch komputera to: ' + computerMove);

  /* sprawdzenie wyniku */

  function displayResults(argPlayerMove, argComputerMove) {
      console.log('Wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
        printMessage('Przegrywasz :(');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
        printMessage('Przegrywasz :(');
      } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
        printMessage('Przegrywasz :(');
      } else if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
        printMessage('O rety, remis!');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
        printMessage('O rety, remis!');
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce') {
        printMessage('O rety, remis!');
      }
  }
  displayResults(argButtonName, computerMove);

}

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });



