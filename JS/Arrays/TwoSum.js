/* 
Given an array of integers find two integers which add up to a given third integer.
For example:
Input array [2, 1, 5, 7] target number = 6
1+5 = 6
Return values: [1,5]
1. If there is no such numbers return an empty array
2. If the input array is empty return an empty array.
*/

// unsorted array and two indexes 
function twoSum(array, target) {
  let result = [];
  if (array.length === 0) return result;
// sort first
  array.sort((a, b) => a - b);

  let i = 0;
  let j = array.length - 1;
// two indexes
  while (i < j) {
    if (array[i] + array[j] === target) {
      return [array[i], array[j]];
    }
    if (array[i] + array[j] > target) {
      j--;
    } else {
      i++;
    }
  }

  return result;
}

// sorted array and return several pairs 
function twoSumSorted(array, target) {
  let result = [];
  if (array.length === 0) return result;

  let i = 0;
  let j = array.length - 1;
// two indexes
  while (i < j) {
    if (array[i] + array[j] === target) {
      result.push([array[i], array[j]]);
      i++;
      j--;
    }
    else if (array[i] + array[j] > target) {
      j--;
    } 
    else {
      i++;
    }
  }

  return result;
}

// unsorted array unique pairs, can use the same number
function twoSumHash(array, target) {
  let result = [];
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else {
      hash[array[i]]++;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (hash[target - array[i]]) {
      result.push([array[i], target - array[i]]);
      delete hash[target - array[i]];
      delete hash[array[i]];
    }
  }
  return result;
}


// console.log(twoSum([2,1,5,7], 6)); // [1,5]
//console.log(twoSumSorted([1, 2, 3, 4, 5, 5, 6], 6)); // [[1,5],[2,4]]
console.log(twoSumHash([2,1,4,3,6,5,7], 6)); //[ [ 2, 4 ], [ 1, 5 ], [ 3, 3 ] ]