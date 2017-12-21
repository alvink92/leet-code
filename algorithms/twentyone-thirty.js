// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let mergedHead;
    let currMergedNode;
    
    // edge case for null values
    if (!l1 || !l2) {
        let merged = l1 ? l1 : l2;
        return merged;
    }
    
    if (l1.val < l2.val) {
        mergedHead = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        mergedHead = new ListNode(l2.val);
        l2 = l2.next;
    }
    
    currMergedNode = mergedHead;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            currMergedNode.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            currMergedNode.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        
        currMergedNode = currMergedNode.next;
    }
    
    currMergedNode.next = l1 ? l1 : l2;
    
    return mergedHead;
};


// 24. Swap Nodes in PairsGiven a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let swap = function(currNode, nextNode) {
    let currNodeVal = currNode.val;
    currNode.val = nextNode.val;
    nextNode.val = currNodeVal;
}

var swapPairs = function(head) {
    let currNode = head;
    let isPair = true;
    
    while (currNode) {
        let nextNode = currNode.next;
        if (!nextNode ){ break;};
        if(isPair) {
            swap(currNode,nextNode);
        }
        isPair = !isPair;
        currNode = currNode.next;
    }
    return head;
};