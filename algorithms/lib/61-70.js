// 61. Rotate List

// Given a list, rotate the list to the right by k places, where k is non-negative.


// Example:

// Given 1->2->3->4->5->NULL and k = 2,

// return 4->5->1->2->3->NULL.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

let moveForward = function(head, node, distance) {
    for(let i = 0; i < distance; i++) {
        if (node.next) node = node.next;
        else node = head;
    }
    
    return node;
}

var rotateRight = function(head, k) {
    if (!head) return null;
    
    let slow = head;
    let fast = moveForward(head, head, k);
    
    while(fast.next !== null) {
        slow = moveForward(head, slow, 1);
        fast = fast.next;
    }
    
    fast.next = head;
    head = slow.next;
    slow.next = null;
    
    return head;
};

// 62. Unique Paths


// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?


// Above is a 3 x 7 grid. How many possible unique paths are there?

// Note: m and n will be at most 100.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const pathsCache = {};

var uniquePaths = function(m, n) {
    if(m === 1 && n === 1) {
        return 1;
    }
    
    let uniqueMPaths;
    let uniqueNPaths;
    
    if (m <= 1) pathsCache[[m - 1, n].toString()] = 0;
    if(pathsCache[[m - 1, n].toString()] === undefined) pathsCache[[m - 1, n].toString()] = uniquePaths(m - 1, n);
    uniqueMPaths = pathsCache[[m - 1, n].toString()];
                                                                 
    if (n <= 1) pathsCache[[m, n - 1].toString()] = 0;
    if(pathsCache[[m, n - 1].toString()] === undefined) pathsCache[[m, n - 1].toString()] = uniquePaths(m, n - 1);
    uniqueNPaths = pathsCache[[m, n - 1].toString()];
    
    return uniqueMPaths + uniqueNPaths;
};


// 63. Unique Paths II

// Follow up for "Unique Paths":

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// For example,
// There is one obstacle in the middle of a 3x3 grid as illustrated below.

// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// The total number of unique paths is 2.

// Note: m and n will be at most 100.

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let pathsCache = {};
    
    let uniquePaths = function(m=0, n=0) {
        if (obstacleGrid.length - 1 === m && obstacleGrid[0].length - 1 === n) return obstacleGrid[m][n] ? 0 : 1;
        if (obstacleGrid[m][n] === 1) return 0;
        
        if (m + 1 >= obstacleGrid.length) pathsCache[[m + 1, n].toString()] = 0;
        if (pathsCache[[m + 1, n].toString()] === undefined) pathsCache[[m + 1, n].toString()] = uniquePaths(m + 1, n);
        
        if (n + 1 >= obstacleGrid[0].length) pathsCache[[m, n + 1].toString()] = 0;
        if (pathsCache[[m, n + 1].toString()] === undefined) pathsCache[[m, n + 1].toString()] = uniquePaths(m, n + 1);
        
        return pathsCache[[m + 1, n].toString()] + pathsCache[[m, n + 1].toString()];
    }
    
    return uniquePaths();
};

// 64. Minimum Path Sum


// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:
// [[1,3,1],
//  [1,5,1],
//  [4,2,1]]
// Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let minSum;
    
    let calc = function(sum = 0, m = 0, n = 0) {
        sum += grid[m][n];
        if (m === grid.length - 1 && n === grid[0].length - 1) {
            minSum = minSum === undefined ? sum : Math.min(minSum, sum);
            return;
        }
        
        if (m + 1 < grid.length) calc(sum, m + 1, n);
        if (n + 1 < grid[0].length) calc(sum, m, n + 1);
    }
    
    calc();
    return minSum;
};


// 68. Text Justification

// Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.

// Return the formatted lines as:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Note: Each word is guaranteed not to exceed L in length.

// click to show corner cases.

// Corner Cases:
// A line other than the last line might contain only one word. What should you do in this case?
// In this case, that line should be left-justified.


/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    justText = [];
    
    currText = words[0];
    for(let i = 1; i < words.length; i++) {
        let word = words[i];
        
        if ((currText + " " + word).length > maxWidth) {
            justText.push(justifyText(currText, maxWidth));
            currText = word;
        } else {
            currText += " " + word;
        }
    }
    
    justText.push(currText + " ".repeat(maxWidth - currText.length));
    
    return justText;
};

let justifyText = function(words, maxWidth) {
    let origLen = words.length;
    words = words.split(" ");
    
    if(words.length === 1) return words[0] + " ".repeat(maxWidth - words[0].length);
    
    let baseSpaces = Math.floor((maxWidth - origLen) / (words.length - 1)) + 1;
    for(let i = 0; i < maxWidth - (origLen + (baseSpaces * (words.length - 1))); i++) {
        words[i] += " ";
    }
    return words.join(" ".repeat(baseSpaces));
}