// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// For example, 
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


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
    
    return subArea;
};

var trap = function(heights) {
    let area = 0;
    
    for(let startIdx = 0; startIdx < heights.length - 1; startIdx++) {
        if (heights[startIdx] <= 1) continue;
        
        for(let endIdx = startIdx + 1; endIdx < heights.length; endIdx++) {
            if (some logic here....) {
                area += calcSubArea(heights, startIdx, endIdx);
                startIdx = endIdx;
            }
        }
    }
    
    return area;
};