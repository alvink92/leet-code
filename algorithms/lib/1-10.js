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

// solution: sliding window with a cache to change left pointer if repeats, ignoring indices < left pointer

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

// solution: merge arrays in n + m time, then find median

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

// solution: iterate through string, along the way, check for palindrome starting with current index as center, expanding out and checking center + i and center - i

let indicesOfLargestPalindromeFromCenter = (s, leftIdx, rightIdx) => {
    while (leftIdx > 0 && rightIdx < s.length) {
        if (s[leftIdx - 1] === s[rightIdx + 1]) {
            leftIdx--;
            rightIdx++;
        } else {
            return [leftIdx, rightIdx];
        }
    }
    return [leftIdx, rightIdx];
};

var longestPalindrome = function (s) {
    let longestPalindromeIndices = [0, 0];
    for (let i = 0; i < s.length; i++) {
        let singleMiddleIndices = indicesOfLargestPalindromeFromCenter(s, i, i);
        longestPalindromeIndices = (longestPalindromeIndices[1] - longestPalindromeIndices[0]) > (singleMiddleIndices[1] - singleMiddleIndices[0]) ? longestPalindromeIndices : singleMiddleIndices;

        if (s[i] === s[i + 1]) {
            let doubleMiddleIndices = indicesOfLargestPalindromeFromCenter(s, i, i + 1);
            longestPalindromeIndices = (longestPalindromeIndices[1] - longestPalindromeIndices[0]) > (doubleMiddleIndices[1] - doubleMiddleIndices[0]) ? longestPalindromeIndices : doubleMiddleIndices;
        }
    }

    return s.slice(longestPalindromeIndices[0], longestPalindromeIndices[1] + 1);
};


// 10. Regular Expression Matching

// Implement regular expression matching with support
// for '.'
// and '*'.

// '.'
// Matches any single character.
// '*'
// Matches zero or more of the preceding element.

// The matching should cover the entire input string(not partial).

// The
// function prototype should be:
//     bool isMatch(const char * s,
//         const char * p)

// Some examples:
//     isMatch("aa", "a")→ false
// isMatch("aa", "aa")→ true
// isMatch("aaa", "aa")→ false
// isMatch("aa", "a*")→ true
// isMatch("aa", ".*")→ true
// isMatch("ab", ".*")→ true
// isMatch("aab", "c*a*b")→ true

