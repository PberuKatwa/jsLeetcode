// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each
// unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates,
// return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order.
// The remaining elements beyond index k - 1 can be ignored.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3,
// and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores)

/**
 * @param {Array<number>} nums
 * @returns {number}
 */

function removeDuplicates(nums){

    // Plan
    // 1.Check if nums array exists or is empty.
    // 2.Create two pointers( p1 & p2 ) one from the the start(0) and the other from the second(1)
    // 3.Loop through the array 
    // 4.Check if the current value at p1 === current value at p2 .
    // 5.If they are equal, increase p2 index by 1.
    // 6.If they are not equal add the index of p1 + 1.
    // 7.Replace p1 with the value at p2.
    // 8.Return p1 + 1.

    if(nums.length === 0) return []

    let p1 = 0
    let p2 = 1

    for( let i = 0; i < nums.length; i++ ){

        if( nums[p1] === nums[p2] ){
            p2 += 1
        } else{
            p1 += 1
            p2 += 1
            nums[p1] = nums[p2]
        }

    }

    return p1 + 1

}