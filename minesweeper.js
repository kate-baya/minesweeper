document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {col: 1, 
    row: 1,
    isMine: true,
    hidden: true}, 
    {col: 1, 
    row: 2,
    isMine: false,
    hidden: true}, 
    {col: 1,
    row: 3,
    isMine: false,
    hidden: true}, 
    {col: 2,
    row: 1,
    isMine: false,
    hidden: true}, 
    {col: 2,
    row: 2,
    isMine: false,
    hidden: true}, 
    {col: 2,
    row: 3,
    isMine: false,
    hidden: true}, 
    {col: 3,
    row: 1,
    isMine: false,
    hidden: true}, 
    {col: 3,
    row: 2,
    isMine: false,
    hidden: true}, 
    {col: 3,
    row: 3,
    isMine: false,
    hidden: true}]
}

function startGame () {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
    }
  document.addEventListener("contextmenu", checkForWin)
  document.addEventListener("click", checkForWin)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()

}

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