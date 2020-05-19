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

var rockPaperScissors = function () {
  // TODO: your solution here
  var finalresult = [];
  // create a element container
  var container = ['R', 'P', 'S'];
  // 3 layers loop, iterate the elment
  // first layer, first round
  for (var i = 0; i < container.length; i++) {
    var oneresult = [];
    var first = container[i];
    oneresult.push(first);
    //2nd layer, 2nd round
    for (var j = 0; j < container.length; j++) {
      var second = container[j];
      oneresult.push(second);
      //3nd layer, 3rd round
      for (var k = 0; k < container.length; k++) {
        var third = container[k];
        oneresult.push(third);
        var tempString = oneresult.join('');
        oneresult.pop();
        finalresult.push(tempString);
      }
      oneresult.pop();
    }
    oneresult.pop();
  }
  return finalresult;
};

console.log(rockPaperScissors());
