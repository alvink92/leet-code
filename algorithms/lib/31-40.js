// 31. Next Permutation

// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place, do not allocate extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
};



// 33. Search in Rotated Sorted Array

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// solution attempt: bsearch the pivot, have a leftptr and rightptr as the collapsing window, target = nums[0], if num < target, move the rightptr, if num > target, move the leftptr

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function binarySearch(arr, target) {
      let lo = 0;
      let hi = arr.length - 1;

      while (lo <= hi) {
        let mid = (lo + hi) >> 1;

        if (arr[mid] > target) {
          hi = mid - 1;
        } else if (arr[mid] < target) {
          lo = mid + 1;
        } else {
          return mid;
        }
      }

      return arr[hi] === target ? hi : -1;
    }
};


let findPivot = function(nums) {
  if (nums[nums.length - 1] > nums[0]) {
    return 0;
  }

  let target = nums[0];
  let leftPtr = 0;
  let rightPtr = nums.length - 1;

  while (rightPtr - leftPtr > 1) {
    let mid = parseInt((rightPtr - leftPtr) / 2) + leftPtr;
    if (nums[mid] > target) {
      leftPtr = mid;
    } else {
      rightPtr = mid;
    }
  }
  return rightPtr;
};


// 34. Search for a Range

// Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = -1;
    let end = -1;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (start === -1) {
                start = i;
            }
            end = i;
            
        }
    }
    
    return [start,end];
};


// 35. Search Insert Position

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 1:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i =0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] > target) { 
            return i;
        }
    }
    return nums.length;
};


// 39. Combination Sum

// Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7, 
// A solution set is: 
// [
//   [7],
//   [2, 2, 3]
// ]

// possible approach: bfs, like better change

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
};


