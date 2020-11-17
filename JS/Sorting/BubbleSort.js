let array = [3, -2, -3, 1, 5];

var sortArray = function(nums) {
  let isSorted = false;
  let n = nums.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < n; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        isSorted = false;
      }
    }
    n--;
  }

};
sortArray(array);
console.log(array);