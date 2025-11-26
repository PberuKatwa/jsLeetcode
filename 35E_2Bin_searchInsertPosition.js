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
    // 2. Create two pointers low & high which will be used to implement binary search.
    // 3. low is at 0
    // 4. high is the length of nums( nums.length )
    // 5. Create a while loop with the exit condition being low <= high.
    // 6. Calculate the midpoint( mid = Math.Floor( low + high) ).
    // 7. If the target is greater than the value at mid set low = mid  + 1.
    // 8. If the target is less than the value at mid set high = mid  - 1.
    // 9. If the target is equal to the value at mid return mid.

    // 7. If target the value at mid( nums[mid] ) is either equal(Condition A),greater(Condition B) or lesser(Condition c).
    // 8. If condition A is true return mid.
    // 9. If condition B is true set low = mid + 1
    // 10. If condition C is true set high = mid - 1


}

console.log("111", searchInsertPosition( [1,3,5,6], 5 ))
console.log("222", searchInsertPosition( [1,3,5,6], 2 ))
console.log("333", searchInsertPosition( [1,3,5,6], 7 ))
console.log("444", searchInsertPosition( [1,3,5,6], 0 ))
console.log("555", searchInsertPosition( [1], 5 ))
console.log("666", searchInsertPosition( [7], 5 ))