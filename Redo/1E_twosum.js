// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum(nums, target) {

  // Plan
  // 1. Initialize a hashmap
  // 2. Create a for loop with the exit condition being the loop being the length of nums.
  // 3. Check if the current number is in the map.
  // 4. Calculate the complement.
  // 5. If the complement is in the hasmap return the value in the map, and the current index.
  // 6. If missing add the current number as the key and the value as the index.
  // 7. If the loop terminates return an empty list

  const map = {};

  for (let i; i < nums.length; i++){

    const currentNum = nums[i];
    const complement = target - nums[i];
    if (complement in map) {
      return [ nums[complement],i ]
    } else {
      map[currentNum] = i
    }
  }

  return [];
}

const cases = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3,3], target: 6, expected: [0, 1] },
]

cases.forEach(
  function ({ nums, target, expected }) {

    const actual = twoSum(nums, target, expected);

    const isEqual = (actual.length === expected.length) && (actual.every((value, index) => (value === expected[index])));

    if (!isEqual) {
      console.log(`FAILED TEST with ACTUAL:${actual} but EXPECTED:${expected}`)
    }

  }
)
