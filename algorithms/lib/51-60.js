// 53. Maximum Subarray

// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// click to show more practice.

// More practice:
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        maxSum = Math.max(currSum, maxSum);
        if (currSum < 0 ) {
            currSum = 0;
        }
    }
    
    return maxSum;
};


// 54. Spiral Matrix

// Given a matrix of m x n elements(m rows, n columns),
//     return all elements of the matrix in spiral order.

// For example,
// Given the following matrix:

//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]
// You should
// return [1, 2, 3, 6, 9, 8, 7, 4, 5].

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const dir = {up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1]};
    
};















// 58. Length of Last Word

// Given a string s consists of upper / lower -
//     case alphabets and empty space characters ' ',
//     return the length of last word in the string.

// If the last word does not exist,
// return 0.

// Note: A word is defined as a character sequence consists of non - space characters only.

// Example:

//     Input: "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    let length = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            length = 0;
        } else {
            length++;
        }
    }
    return length;
};