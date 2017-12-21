// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// For example, 
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


/**
 * @param {number[]} heights
 * @return {number}
 */

/**
 * @param {number[]} heights
 * @return {number}
 */

let calcSubArea = function(heights, start, end) {
    console.log(heights, start,end);
    let minHt = Math.min(heights[start], heights[end]);
    let subArea = 0;
    for(let i = start + 1; i < end; i++) {
        subArea += minHt > heights[i] ? minHt - heights[i] : 0;
    }
    console.log(subArea);
    return subArea;
};

var trap = function(heights) {
    let area = 0;
    let startBarrier;
    let endBarrier;
    
    for(let i = 0; i < heights.length - 1; i++) {
        startBarrier = i;
        if(heights[i] > heights[i + 1]) {
            break;
        }
    }
    
    for(let i = heights.length - 1; i > 0; i--) {
        endBarrier = i;
        if(heights[i] > heights[i - 1]) {
            break;
        }
    }
    
    while(startBarrier <= endBarrier) {

        let maxSeenIdx = startBarrier + 1;
        for(let endIdx = startBarrier + 1; endIdx <= endBarrier; endIdx++) {
            maxSeenIdx = heights[endIdx] > heights[maxSeenIdx] ? endIdx : maxSeenIdx;
            if (heights[endIdx] > heights[startBarrier] ) {
                break;
            }
        }
        area += calcSubArea(heights,startBarrier,maxSeenIdx);
        startBarrier = maxSeenIdx;
    }
    
    return area;
};