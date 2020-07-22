// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.
  var arr1 = str1.split('');
  var arr2 = str2.split('');
  var m = str1.length;
  var n = str2.length;
  if (m * n === 0) {
    return m + n;
  }
  var dp = [];
  dp[0] = [];
  for (let j = 0; j < n + 1; j++) {
    dp[0].push(j);
  }
  for (let i = 1; i < m + 1; i++) {
    dp.push([i]);
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (arr1[i - 1] !== arr2[j - 1]) {
        dp[i].push(1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]));
      } else {
        dp[i].push(dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance('abcde', 'ebad'));
/*
  abcde
  ebad

  [e,b,d]
  [a,b,c,d,e]
  a-e, a-b,a-d, +1
  b-e, b-b,
  c-d, +1
  d-d,
  e-undefined +1
  1. e->a
  2. insert c
  3. insert e

  [a,b,c,d,e]
  [e,b,d]
  e-a,e-b,e-c,e
  [null,b,d]
 */
