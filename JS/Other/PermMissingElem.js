// #TimeComplexity
// https://app.codility.com/programmers/lessons/3-time_complexity/
// Find the missing element in a given permutation.
/* An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)]. */


//different integers
// from 1 to n+1
//exactly one is missing
//unsorted
// return missing element
// positive numbers
// what if N === 0? return what? 0?

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //very naive
  let n = A.length + 1;
  for (let j = 1; j <= n; j++) {
      let isMissing = true;
      for (let i = 0; i < A.length; i++) {
          if (A[i] === j) {
              isMissing = false;
              break;
          }
      }
      if (isMissing) return j;
  }
  return 0;
  // Time complexity: O(n^2)
  // Space complexity: O(1)
}

// trying better #1
function solution1(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //naive
  if (A.length === 0) return 1;
  A.sort();
  if (A[A.length - 1] === A.length) return A.length + 1; 
  for (let i = 0; i < A.length; i++) {
      if (A[i] !== i + 1) return i + 1;
  }
  return 0;
  // Time complexity: O(nLog(n))
  // Space complexity: O(1)
}

function solution2(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //ok
  if (A.length === 0) return 1;
  
  let myMap = new Map();
  
  for (let i = 0; i < A.length; i++) {
      if (!myMap.has(A[i])) myMap.set(A[i], true);
  }
  
  for (let n = 1; n <= A.length + 1; n++) {
      if (!myMap.has(n)) return n;
  }
  
  return 0;
  // Time complexity: O(n)
  // Space complexity: O(n)
}

console.log(solution2([2,3,1,5])); // 4
console.log(solution2([])); // 1
console.log(solution2([1])); // 2
console.log(solution2([1,2,3,4,5])); // 6