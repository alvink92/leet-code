// 11. Container With Most Water

// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, 
// such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function(heights) {
    let currMaxArea = 0;
    
    for (let i = 0; i < heights.length - 1; i++) {
        let heightStart = heights[i];
        for(let j = i + 1; j < heights.length; j++) {
            let heightEnd = heights[j];
            let currArea = Math.min(heightStart, heightEnd) * (j - i);
            if(currArea > currMaxArea) {
                currMaxArea = currArea;
            }
        }
    }
    
    return currMaxArea;
};


// 15. 3Sum

// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// possible solution: iterate first loop, then set target = 0 - nums[i], then the inner two nested loops solve like two sum with target instead of 0

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  let sums = [];
  let exists = {};

  for (let i = 0; i < nums.length - 2; i++) {
    let target = 0 - nums[i];
    // two sum here
    let store = {};
    for (let j = i + 1; j < nums.length; j++) {
      let innerTarget = target - nums[j];
      if (typeof store[innerTarget] !== "undefined") {
        let existsString = [nums[i], innerTarget, nums[j]].sort().toString();
        if (!exists[existsString]) {
          sums.push([nums[i], innerTarget, nums[j]].sort());
        }
        exists[existsString] = true;
      }
      store[nums[j]] = true;
    }
  }
  return sums;
};
