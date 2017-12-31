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