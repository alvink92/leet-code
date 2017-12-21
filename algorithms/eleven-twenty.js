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



// 16. 3Sum Closest

// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

//     For example, given array S = {-1 2 1 -4}, and target = 1.

//     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// possible solution: sort arr, then iterate loop 1, then for second loop do closing window


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
};


// 17. Letter Combinations of a Phone Number

// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.



// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    
    let digitToChars = { 2: "abc".split(""), 3: "def".split(""),
                        4: "ghi".split(""), 5: "jkl".split(""), 6: "mno".split(""), 
                        7: "pqrs".split(""), 8: "tuv".split(""), 9: "wxyz".split("")};

    let currCombos = [""];

    for(let i = 0; i < digits.length; i++) {
        let updatedCombos = [];
        let appendChars = digitToChars[digits[i]];

        for (let j = 0; j < currCombos.length; j++) {
            for (let k = 0; k < appendChars.length; k++) {
                updatedCombos.push(currCombos[j] + appendChars[k]);
            }
        }

        currCombos = updatedCombos;
    }

    return currCombos;
};


// 18. 4Sum

// Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note: The solution set must not contain duplicate quadruplets.

// For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]



// 19. Remove Nth Node From End of List

// Given a linked list, remove the nth node from the end of list and return its head.

// For example,

//    Given linked list: 1->2->3->4->5, and n = 2.

//    After removing the second node from the end, the linked list becomes 1->2->3->5.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    if (head.next === null && n === 1) {
        return null;
    }
    
    let slowPtr = head;
    let fastPtr = head;
    for (let i = 0; i < n; i++) {
        fastPtr = fastPtr.next;
    }
    
    if (fastPtr) {
        fastPtr = fastPtr.next;
    } else {
        // edge case where remove node is the head node
        return slowPtr.next;
    }
    
    while (fastPtr) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
    }
    
    slowPtr.next = slowPtr.next.next;
    return head;
};