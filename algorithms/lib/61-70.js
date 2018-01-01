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
var uniquePaths = function(m, n) {
    if(m === 1 && n === 1) {
        return 1;
    }
    
    let uniqueMPaths = m > 1 ? uniquePaths(m - 1, n) : 0;
    let uniqueNPaths = n > 1 ? uniquePaths(m, n - 1) : 0;
    
    return uniqueMPaths + uniqueNPaths;
};