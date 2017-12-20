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


// 3. Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Examples:

//     Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke"
// is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    let longestSSLength = 0;
    let cache = {};
    let leftPtr = 0;

    for (let rightPtr = 0; rightPtr < s.length; rightPtr++) {
        if (typeof cache[s[rightPtr]] !== 'undefined' && cache[s[rightPtr]] >= leftPtr) {
            leftPtr = cache[s[rightPtr]] + 1;
        }
        cache[s[rightPtr]] = rightPtr;

        currSSLength = 1 + rightPtr - leftPtr;
        if (currSSLength > longestSSLength) {
            longestSSLength = currSSLength;
        }
    }

    return longestSSLength;
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

// 5. Longest Palindromic Substring

// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.

// Example:

//     Input: "babad"

// Output: "bab"

// Note: "aba"
// is also a valid answer.
// Example:

//     Input: "cbbd"

// Output: "bb"

let isPalindrome = s => {
    for (let i = 0; i < parseInt(s.length / 2); i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

var longestPalindrome = function (s) {
    let longestPalindrome = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let ss = s.slice(i, j + 1);
            if (isPalindrome(ss)) {
                if (ss.length >= longestPalindrome.length) {
                    longestPalindrome = ss;
                }
            }
        }
    }

    return longestPalindrome;
};