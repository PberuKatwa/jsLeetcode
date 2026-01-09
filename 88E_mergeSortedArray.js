// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
 

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

function mergeSortedArray(){

    // Plan
    // 1.Check if either m or n is 0. If m is 0 return nums2, n is 0 return nums1, if both are 0 return [].
    // 2.Initialize three pointer variables each for the last element on a list.
    //    p1 for the last element in nums 1(m-1),p2 for nums2(n-1), p3 for nums1(m+n-1)
    // 3.Create a while loop with the exit condition being either m or n going negative( m>=0 || n>=0 ).
    // 4.Create an if condition with condition A being if nums2[p2] >= nums1[p1] and condition B being the else.
    // 5.If Condition A is true replace nums1[p3] with the value at nums2[p2], then decrease p2 by 1.
    // 6.If Condition B is true  replace nums1[p3] with with nums1[p1], then decrease p1 by 1.
    // 7.Return nums1.

}