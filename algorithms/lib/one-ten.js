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
    return listNode ? listNode.next : listNode;
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

    prevDecPlace.val += currCarryOver;

    return onesPlace;
};

// let decNum = function (l, decimalIndex) {
//     return typeof l[decimalIndex] === 'undefined' ? 0 : l[decimalIndex];
// }

// var addTwoArrOfNumbers = function (l1, l2) {
//     const sum = [];

//     let currIdx = 0;
//     let currDecSum;
//     let prevCarryOver = 0;

//     while (l1[currIdx] || l2[currIdx]) {
//         currDecSum = prevCarryOver + decNum(l1, currIdx) + decNum(l2, currIdx);
//         sum.push(currDecSum % 10);
//         prevCarryOver = parseInt(currDecSum / 10);
//         currIdx += 1;
//     }

//     if (prevCarryOver !== 0) {
//         sum.push(prevCarryOver);
//     }

//     return sum;
// };

// console.log(addTwoArrOfNumbers([2, 4, 3], [5, 6, 4]));
// console.log(addTwoArrOfNumbers([2, 4, 9, 3, 2], [5, 6, 4]));

