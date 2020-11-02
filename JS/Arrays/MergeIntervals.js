/*
https://leetcode.com/problems/merge-intervals/
Medium
#Array #Sort #Stack

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

Constraints:

intervals[i][0] <= intervals[i][1]
*/

var merge = function(intervals) {
  let stack = [];
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  for (let i = 0; i < intervals.length; i++) {
      if (stack.length === 0) stack.push(intervals[i]);
      else {
          if (stack[stack.length - 1][1] >= intervals[i][0]) {
              let tmp = stack.pop();
              tmp[1] = Math.max(tmp[1], intervals[i][1]);
              stack.push(tmp);
          } else {
              stack.push(intervals[i]);
          }
      }
  }
  return stack;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); //[[1,6],[8,10],[15,18]]