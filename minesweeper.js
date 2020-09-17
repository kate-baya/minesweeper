document.addEventListener('DOMContentLoaded', startGame)

//Difficulty levels

function onoff(){
  currentvalue = document.getElementById('onoff').value;
  if(currentvalue == "Off"){
    document.getElementById("onoff").value="On";
  }else{
    document.getElementById("onoff").value="Off";
  }
}

var boardLength = 4
var booleanNum = 4

function selectDifficulty(difficulty, booleanDifficulty) {
  boardLength = difficulty
  booleanNum = booleanDifficulty
  resetBoard()
  return boardLength, booleanDifficulty;
}

function resetBoard () {
  var boardNode = document.getElementsByClassName("board")[0]
  boardNode.innerHTML = ""
  startGame()
}

function startGame () {
  createBoard(boardLength)
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
    }
  document.addEventListener("contextmenu", checkForWin)
  document.addEventListener("click", checkForWin)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()

}

//Audio files
var winAudio = new Audio()
winAudio.src = "cleverGirl_1.wav"

var loseAudio = new Audio()
loseAudio.src = "eaten_1.mp3"

var mark = new Audio()
mark.src = "uncovercell.mp3"

var uncover = new Audio()
uncover.src = "markcell.mp3"

//Global board object
var board = {}



function getRandomBoolean (booleanNum){
  var randomNum = Math.floor((Math.random() * 10) + 1)
  if (randomNum % booleanNum == 0) {
    return true
    } 
    return false

}

function createBoard(boardLength) {
  board.cells = []
  var hidden = true
  for (var row = 0; row < boardLength; row++) {
    for (var col = 0; col < boardLength; col++) {
      const isMine = getRandomBoolean(4)
      board.cells.push({col, row, isMine, hidden})
    }
  }
}


// //meduim
// function createBoard() {
//   board.cells = []
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 3 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 5)
//   row = 1
//   col = 0
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 3 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 10)
//   row = 2
//   col = 0
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 3 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 15)
//   row = 3
//   col = 0
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 3 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 20)
//   row = 4
//   col = 0
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 3 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 25)
//   console.log(board)
// }

//hard
// function createBoard() {
//   board.cells = []
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 2 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 6)
//   row = 1
//   col = 0
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 2 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 12)
//   row = 2
//   col = 0
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 2 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 18)
//   row = 3
//   col = 0
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 2 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 24)
//   row = 4
//   col = 0
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 2 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 30)
//   row = 5
//   col = 0
//   do {
//     var randomNum = Math.floor((Math.random() * 10) + 1)
//     if (randomNum % 2 == 0) {
//       var isMine = true
//       } else isMine = false

//     board.cells.push({col, row, isMine, hidden});
//     col++
//   } 
//   while (board.cells.length < 36)
// }



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var x = 0; x < board.cells.length; x++) {
    if (board.cells[x].isMine === true && board.cells[x].isMarked === false) {
      return
    } else if (board.cells[x].isMine === false && board.cells[x].hidden === true) {
      return 
    } 
  }  
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('You win!')
  winAudio.play()
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for (var j = 0; j < surrounding.length; j++) {
    
    if (surrounding[j].isMine === true) {
      count++
    }
  }
  return count
}