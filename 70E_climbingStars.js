// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @returns {number}
 */
function climbingStairsWays(n){
    // Plan
    // 1. Check if n is less than or equal to 2,if true return n.
    // 2. Initialize a variable for i step back(n-1) called prev1 and two steps(n-2) called prev2.
    // 3. Initialize a variable called result with value 0.
    // 4. Create a for loop with i < n,i++, i=3.
    // 5. Get the curent number of ways by adding prev1 and prev2(current=prev1+prev2).
    // 6.

}