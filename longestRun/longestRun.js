/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */
/*
I:string, has or not has repeated chars
O:array(2),[start of repeated chars, end of repeated chars]
C:
E: long, large inputs ?
    ""->null
    nothing repeated: [0,0]

diagram:
  left=0
  right=0
  max=0
  cur=0
  result=[start,end-1]=[0,0]
  "abbbcc":
   |
    |
  left pointer: a (0)
  extend the right pointer until it's not a: (1)=> curlength=1-0=1 maxlength=1,[0,0]
  reset left to right left=1,right=1
  right++ right=4, currentlength=4-1=3 > max => maxlength=currentlength =3, [left,right-1]=[1,3]

  rest left to right left=4,right=4
"abbbcc":
     |
      |
  left=4,right=5, curlength=5-4=1, compare to maxlength, maxlength=3, index=[1,3]

psuedocode
if (string is empty) return null

  left<-0
  right<-0
  result=[0,0]
  max<-0
  cur<-0
abcd
  iterrate through string (while rigth <length of string)
    right++ until string[left] !== string[right]
      update cur<- right-left
        if(cur> max)
          update max<-cur
          update result<- [left, right-1]
      update left<-right

  return result
*/

var longestRun = function (string) {
  // TODO: Your code here!
  var left = 0;
  var right = 0;
  var cur = 0;
  var max = 0;
  var result = [0, 0];

  if (string.length === 0) {
    return null;
  }
  var array = string.split('');
  while (left < array.length && right < array.length) {
    while (array[left] === array[right]) {
      right++;
    }
    cur = right - left;
    if (cur > max) {
      max = cur;
      result = [left, right - 1];
    }
    left = right;
  }

  return result;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

// var string = randomString(20);
var string = 'aaabbcccccc';
console.log(longestRun(string));
