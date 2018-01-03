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