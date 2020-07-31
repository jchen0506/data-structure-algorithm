/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */
/*
0=false -> true=1
  0 0 0 0 0
  0 0 0 0 0
  0 0 0 0 0
  0 0 0 0 0
  0 0 0 0 0
  I: board, matrix (n*n)
  O: number, positive integer,unique paths from [0,0]->[n-1,n-1]
  E: at least one element in the board, [0], output 1;
  C: 10:30 am 23mins

  0 0
  0 0 ->

  1 1 1 0
  0 1,1 1  2 solutions

  1 0 0  1 1 1 1 1 0 1 1 0 1 1 0
  0 0 0  0 0 1 0 1 0 1 1 0 0 1 1
  0 0 0, 0 0 1,0 1 1,1 1 1,0 0 1
  result =0
  standing at one point
    choose one direction (not visited and also not out of boundray)
      reursively do the same thing until I have no where to go.
        if my current index ===[n-1, n-1], result++

            [0,0]
              |
          |       |
          right   down
          |         |
        down       right
function robotPath
  make a varible result =0;
  if board 1*1, return 1;

  start index=[0,0]
  togglePiece(0,0)
  i row, j column
  loop throught 4 direction (up,right, down, left)
  i-1,up
     if (board[i][j] not equalt to undefined && !hasBeenVisited(i,j))
        robotPath(i,j)

     else go right
     else go down
     else go left
     else
        if check if i=n-1 && j=n-1, if yes result++
        else return

  return result

*/
// A Board class will be useful

var makeBoard = function (n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function (n, board, i, j) {};
