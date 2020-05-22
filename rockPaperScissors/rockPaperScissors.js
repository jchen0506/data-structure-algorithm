/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */

var rockPaperScissors = function (n) {
  // TODO: your solution here
  if (n === undefined) {
    n = 3;
  }
  var container = ['R', 'P', 'S'];
  if (n === 0) return [];
  var result = [];
  var playRounds = function (hand) {
    if (hand.length === n) {
      result.push(hand);
      return;
    }
    container.forEach(function (play) {
      playRounds(hand + play);
    });
  };
  playRounds('');
  return result;
};

console.log(rockPaperScissors());
