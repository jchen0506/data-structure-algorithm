/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

function sudokuChecker(board) {
  // Your code here.
  var rows = board.split('\n');

  var matrix = [];
  for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].split(''));
  }

  var result = checkRows(matrix) && checkColumns(matrix) && checkGrid(matrix);

  return result;
}

var standard = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var checkRows = function (board) {
  for (var i = 0; i < board.length; i++) {
    var row = board[i].slice().sort();
    if (JSON.stringify(standard) !== JSON.stringify(row)) return false;
  }
  return true;
};

var checkColumns = function (board) {
  for (var i = 0; i < board.length; i++) {
    var column = [];
    for (var j = 0; j < board.length; j++) {
      column.push(board[j][i]);
    }
    if (JSON.stringify(standard) !== JSON.stringify(column.sort()))
      return false;
  }
  return true;
};

var checkGrid = function (board) {
  for (var i = 0; i < board.length; i += 3) {
    var grid = [];
    for (var j = i; j < i + 3; j++) {
      for (var k = i; k < i + 3; k++) {
        grid.push(board[j][k]);
      }
    }
    if (JSON.stringify(standard) !== JSON.stringify(grid)) {
      return false;
    }
  }
  return true;
};

var board =
  '735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';
/*board =[
  [7,3,5,8,1,4,2,9,6],
  [8,9,6,2,7,5,3,1,4],
  [2,1,4,9,6,3,8,5,7],
  [5,8,9,4,2,7,1,6,3],
  [4,7,1,3,5,6,9,8,2],
  [9,2,3,5,4,1,6,7,8],
  [6,4,8,7,9,2,5,3,1],
  [1,5,7,6,3,8,4,2,9]
]*/

console.log(sudokuChecker(board));
