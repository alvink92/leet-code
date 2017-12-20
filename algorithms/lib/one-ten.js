// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const cache = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(typeof cache[target - nums[i]] !== 'undefined') {
            return [cache[target - nums[i]], i];
        }
        if(!cache[nums[i]]){
            cache[nums[i]] = i;
        }
    }
};

// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3, 3], 6));


// 2. Add Two Numbers

//  Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let decNum = (listNode) => {
    return listNode ? listNode.val : 0;
}

let nextNode = (listNode) => {
    return listNode ? listNode.next : undefined;
}

var addTwoNumbers = function (l1, l2) {
    let currDecSum = decNum(l1) + decNum(l2);
    let onesPlace = new ListNode(currDecSum % 10);
    let currCarryOver = parseInt(currDecSum / 10);
    l1 = nextNode(l1);
    l2 = nextNode(l2);

    let prevDecPlace = onesPlace;

    while (l1 || l2) {
        currDecSum = currCarryOver + decNum(l1) + decNum(l2);
        let nextDecPlace = new ListNode(currDecSum % 10);
        prevDecPlace.next = nextDecPlace;
        prevDecPlace = nextDecPlace;
        currCarryOver = parseInt(currDecSum / 10);
        l1 = nextNode(l1);
        l2 = nextNode(l2);
    }

    if (currCarryOver > 0) {
        prevDecPlace.next = new ListNode(currCarryOver);
    };

    return onesPlace;
};

// 4. Median of Two Sorted Arrays

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

let merge = function (nums1, nums2) {
    const mergedNums = [];

    while (nums1.length > 0 && nums2.length > 0) {
        let targetArr = nums1[0] < nums2[0] ? nums1 : nums2;
        mergedNums.push(targetArr.shift());
    }

    return Array.prototype.concat(mergedNums, nums1, nums2);
}

let median = function (nums) {
    return (nums[parseInt(Math.floor((nums.length - 1) / 2))] + nums[parseInt(Math.ceil((nums.length - 1) / 2))]) / 2;
}

var findMedianSortedArrays = function (nums1, nums2) {
    return median(merge(nums1, nums2));
};