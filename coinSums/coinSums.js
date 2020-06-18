/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/
//Greedy
var makeChange = function (total) {
  //take the larget coin that smaller than total every time, if any remainder left, add penny
  //chose first coin, the way to make total is the number of ways (total-fisrt) moneny + 1;

  //0,1,2,.......,total
  //pick a coin<total
  //[.............count at total=1+count at[total-coin]]
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  var cache =[];
  for (var x = 0; x <=total; x++){
    cache[x]=0;
  }
  cache[0]=1
  for (var i = 0; i<coins.length; i++){
    var currentcoin=coins[i];
    for (var j = currentcoin; j<=total; j++){
      cache[j]+=cache[j-currentcoin]
    }
  }
  return cache[total];
};

console.log(makeChange(20));
//1 2 2 / 2 2 1/2 1 2
//5=1+1+1+1+1=2+1+1+1=2+2+1=5
