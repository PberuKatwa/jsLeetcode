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
    // 5. Check if( Condition B ) p1 is at the start and the value is greater than the target( p1===0 && nums[p1] > target )
    // 6. If condition A is true return p2.
    // 7. If condition B is true return p1.
    // 8. If loop completes return p2 + 1

    if( !nums ) return -1
    if( target < 0 ) return -1

    if( nums.length === 1 && nums[0] > target ) return 0
    if( nums.length === 1 && nums[0] < target ) return 1

    let p1 = 0
    let p2 = 1

    while(  p2 < nums.length - 1 && p1 < p2 ){

        if( nums[p1] < target && nums[p2] >= target ){
            return p2
        } else if( p1 === 0 && nums[p1] > target ){
            return p1
        }

        p1 += 1
        p2 += 1

    }



    return p2 + 1
}

console.log("111", searchInsertPosition( [1,3,5,6], 5 ))
console.log("222", searchInsertPosition( [1,3,5,6], 2 ))
console.log("333", searchInsertPosition( [1,3,5,6], 7 ))
console.log("444", searchInsertPosition( [1,3,5,6], 0 ))
console.log("555", searchInsertPosition( [1], 5 ))
console.log("666", searchInsertPosition( [7], 5 ))