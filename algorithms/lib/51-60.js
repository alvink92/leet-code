// 53. Maximum Subarray

// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// click to show more practice.

// More practice:
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let getNextPos = function (dir, pos) {
    return [pos[0] + dir[0], pos[1] + dir[1]];
}

var spiralOrder = function (matrix) {
    const dir = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    const seen = {};
    const spiral = [];

    let currDir = 0;
    let nextPos = [0, 0];

    while (!seen[nextPos.toString()] && ((matrix[nextPos[0]] !== undefined && matrix[nextPos[0]][nextPos[1]] !== undefined))) {
        spiral.push(matrix[nextPos[0]][nextPos[1]]);
        seen[nextPos.toString()] = true;

        let tempNextPos = getNextPos(dir[currDir], nextPos);
        if (matrix[tempNextPos[0]] === undefined || matrix[tempNextPos[0]][tempNextPos[1]] === undefined || seen[tempNextPos.toString()]) {
            currDir = (currDir + 1) % 4;
        }
        nextPos = getNextPos(dir[currDir], nextPos);
    }

    return spiral;
};


// 55. Jump Game

// Given an array of non - negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine
// if you are able to reach the last index.

// For example:
//     A = [2, 3, 1, 1, 4],
//     return true.

// A = [3, 2, 1, 0, 4],
//     return false.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    currIdx = 0;

    while (currIdx < nums.length && nums[currIdx] !== 0) {
        let jumpDist = nums[currIdx];
        let bestJumpIdx = currIdx + 1;

        for (let i = currIdx + 1; i <= currIdx + jumpDist; i++) {
            if (i + nums[i] >= bestJumpIdx + nums[bestJumpIdx]) {
                bestJumpIdx = i;
            }
        }

        currIdx = bestJumpIdx;
    }

    console.log(currIdx);
    return currIdx >= nums.length - 1;
};


// 56. Merge Intervals

// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given[1, 3], [2, 6], [8, 10], [15, 18],
//     return [1, 6], [8, 10], [15, 18].

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    intervals = intervals.sort(function (a, b) {
        return a.start - b.start;
    });

    merged = [];
    if (intervals.length === 0) return merged;

    let min = intervals[0].start;
    let max = intervals[0].end;

    for (let i = 1, len = intervals.length; i < len; i++) {
        let interval = intervals[i];

        if (interval.start > max) {
            merged.push([min, max]);
            min = interval.start;
            max = interval.end;
        } else if (interval.end > max) {
            max = interval.end;
        } else {
            console.log("uncaught");
        }
    }

    merged.push([min, max]);

    return merged;
};


// 57. Insert Interval

// Given a set of non - overlapping intervals, insert a new interval into the intervals(merge
//     if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:
//     Given intervals[1, 3], [6, 9], insert and merge[2, 5] in as[1, 5], [6, 9].

// Example 2:
//     Given[1, 2], [3, 5], [6, 7], [8, 10], [12, 16], insert and merge[4, 9] in as[1, 2], [3, 10], [12, 16].

// This is because the new interval[4, 9] overlaps with[3, 5], [6, 7], [8, 10].

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
    let mergedIntervals = [];

    currInterval = intervals[0];

    for (let i = 1, len = intervals.length; i < len; i++) {
        // if newInterval mergable with currInterval, then merge, currInt = mergedInt

        // if intervals[i] can merge with currInterval, then merge, currentInterval = mergedInterval
        // else push currInterval to mergedIntervals, currInterval = intervals[i]

    }
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


// 59. Spiral Matrix II

// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// For example,
// Given n = 3,

//     You should
// return the following matrix: [
//     [1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = Array(n).fill().map(() => Array(n).fill());
};