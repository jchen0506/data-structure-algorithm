/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

var shuffleDeck = function (deck) {
  // Your code here
  var i = deck.length - 1;
  while (i > 0) {
    var randIndex = Math.floor(Math.random() * i);
    swap(randIndex, i, deck);
    i--;
  }
  return deck;
};

var swap = function (i, j, array) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
var orderedDeck = function () {
  var suits = ['♥', '♣', '♠', '♦'];
  var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  var deck = [];

  suits.forEach(function (suit) {
    values.forEach(function (value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

var deck = orderedDeck();
// console.log(deck);
console.log(shuffleDeck(deck));

var cardPositionCounts = {};
for (var i = 0; i < deck.length; i++) {
  var cardPosition = (cardPositionCounts[deck[i]] = {});
  for (var j = 0; j < deck.length; j++) {
    cardPosition[j] = 0;
  }
}
// ...over the course of five hundred shuffles
var iterations = 52 * 10;
for (var i = 0; i < iterations; i++) {
  deck = orderedDeck();
  var randomDeck = shuffleDeck(deck);
  for (var j = 0; j < randomDeck.length; j++) {
    cardPositionCounts[randomDeck[j]][j] += 1;
  }
}

deck = orderedDeck();
// The expected number of occurrences for a particular card in a particular index is
// iterations/52 = 10
var expected = 10;
var chi2 = 0;
for (var i = 0; i < deck.length; i++) {
  var cardPosition = cardPositionCounts[deck[i]];
  for (var j = 0; j < deck.length; j++) {
    // calculate chi-squared test
    chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
  }
}
console.log(chi2);
// console.dir(cardPositionCounts);
