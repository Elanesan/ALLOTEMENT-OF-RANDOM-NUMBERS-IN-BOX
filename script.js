let numbers = [];
let selectedNumbers = [];

function startGame() {
  resetGame();
  generateNumbers();
  displayNumbers();
}

function resetGame() {
  numbers = [];
  selectedNumbers = [];
  let cells = document.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}

function generateNumbers() {
  for (let i = 1; i <= 9; i++) {
    numbers.push(i);
  }
  numbers.sort(() => Math.random() - 0.5);
}

function displayNumbers() {
  let cells = document.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = numbers[i];
  }
}

function selectNumber(cell) {
  if (selectedNumbers.length === 9) {
    return;
  }

  let number = cell.innerHTML;
  cell.innerHTML = "";
  cell.style.backgroundColor = "#ccc";
  selectedNumbers.push(number);

  if (selectedNumbers.length === 9) {
    checkBingo();
  }
}

function checkBingo() {
  let isBingo = false;
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    let [a, b, c] = combination;
    if (
      selectedNumbers.includes(numbers[a]) &&
      selectedNumbers.includes(numbers[b]) &&
      selectedNumbers.includes(numbers[c])
    ) {
      isBingo = true;
      break;
    }
  }

  if (isBingo) {
    alert("Bingo! You won the game!");
    resetGame();
  }
}
