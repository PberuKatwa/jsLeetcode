// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted,
// you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {Array<number>} nums
 * @param {number} val
 * @returns {number}
 */

function removeElements(nums, val){
    // Plan
    // 1.Check if nums or val is null, if any are null return 0.
    // 2.Create two pointers( p1 & p2 ) , one at the start and one at the end.
    // 3.Initialize a while loop with the exit condition being p1 < p2.
    // 4.Check if the value at p1 or/and p2 is equal to val.
    // 5.If nums[p1] === val and nums[p2] != val ,replace the val at p1 with p2 and p1 += 1, p2-=1
    // 6.If nums[p1] === val and nums[p2] === val, reduce p2 by 1
    // 7.If nums[p1] !== val and nums[p2] !== val, increase p1 by 1
    // 7.return p1 + 1

    if(nums.length === 0) return 0
    if(!val) return 0

    if(nums.length === 1 ){
        // console.log("single", nums, "length", nums.length,"val", nums[0] )
        if(nums[0] !== val) return 1; else return 0;
    }

    let p1 = 0
    let p2 = ( nums.length ) - 1


    while( p1 < p2 ){

        if( nums[p1] === val && nums[p2] === val ){
            p2 -= 1
        } else if( nums[p1] === val && nums[p2] !== val ){
            nums[p1] = nums[p2]
            p1 += 1
            p2 -= 1
        } else if ( nums[p1] !== val && nums[p2] !== val ){
            p1 += 1
        } else if ( nums[p1] !== val && nums[p2] === val ){
            p2 -= 1
        }

        // console.log("in lp", "lstt", nums, "p1", p1, "p2", p2)


    }

    console.log("listt", nums)

    if(p1===0) p1 = 0; else p1 = p1+1;

    return p1
}

console.log("111", removeElements([3,2,2,3],3) )
console.log("222", removeElements([0,1,2,2,3,0,4,2],2) )
console.log("333", removeElements([2,2,2],3) )
console.log("444", removeElements([3],2) )
console.log("555", removeElements([2],2) )

