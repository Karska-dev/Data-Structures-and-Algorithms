let array = [3, -2, 0, 1, 5];

function merge(arr1, arr2) {
  const result = [];
  
  let i = 0;
  let j = 0;

  while ((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    return result.concat(arr1.slice(i, arr1.length));
  } else if (j < arr2.length) {
    return result.concat(arr2.slice(j, arr2.length));
  }
  return result;
}

function mergeSort(arr) {

  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(array));