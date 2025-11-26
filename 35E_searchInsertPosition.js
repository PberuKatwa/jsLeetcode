// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 * @param {Array<number>} nums
 * @param {number} target
 * @returns {number}
 */

function searchInsertPosition(nums,target){
    // Plan
    // 1. Check if nums or target is null, if either return -1
    // 2. Intialize two pointers one(p1) at the start(0) and the 2nd(p2) at the 2nd item(1).
    // 3. Initalize a while loop with the exit condition being p1 < p2
    // 4. Check if( Condition A ) the value at p1 is less than the target( nums[p1] < target ) and p2 greater or equal to target( nums[p2]>= target ).
    // 5. Check if( Condition B ) the target is greater than the value at p1( target > mums[p1] ) and greater than val at p2(target > nums[p2])
    // 6. If condition A is true return p2.




    // 2. Initialize a loop over the array.
    // 3. Check if the current value( nums[i] ) is either greater or equal to the target.
    // 4. If equal to the target return the current index.
    // 5. If greater than curent( target > nums[i] ) but less than the next return index minus 1 (i - 1 ).
    // 6. If equal( target === nums[i] ) return i.
    // 7. If loop completes return -1.

    if(!nums) return -1
    if(!target) return -1

    let p1 = 0
    let p2 = 1

    for( i= 0; i < nums.length ; i++){

        if( nums[i] === target ){
            return i
        }else if ( nums[i] < target && nums[i+1] > target ){
            return i - 1
        }

    }

    return -1
}

console.log("111", searchInsertPosition( [1,3,5,6], 7 ))