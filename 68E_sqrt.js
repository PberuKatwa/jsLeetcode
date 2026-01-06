// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842...,
// and since we round it down to the nearest integer, 2 is returned.

/**
 * @param {number} x
 */

function findSqrt(x){

    // Plan
    // 1.Check if x is 0 or null and return 0.
    // 2.Initialize the high,low and mid variable. The high is X, low and mid is 0.
    // 3.Initialize a while loop with high>low as the exit condition.
    // 4.Calculate the mid by adding high + low and dividing by 2.(high+low)/2.
    // 5.Square the mid( mid * mid).
    // 6.Check if the square is either equal,greater and less than X.
    // 7.If equal return x
    // 8.if less make low equalto mid.(low = mid)
    // 9.If greater make high equal to mid.(high = mid)

    if(x==0) return 0
    if(!x) return 0

    let high = x
    let low = 0
    let mid = 0

    while (high > low){

        mid = (high + low)/2
        
    }


}