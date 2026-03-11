// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 */

function isPalindrome(x) {

  // Plan.
  // 1. Check if the number is null, less than 0 and when x is divided by 10 its equal to 0.
  // 2. If so return false.
  // 3. Initialize a variable compare with the value being equal to 0 and original with value of x.
  // 4. Initialize a while loop with the exit condition being x > 0.
  // 5. In each itireation get the  value without decimals

  if (!x | x < 0 | x % 10 === 0) return false;

  let original = x;
  let compare = 0;

  while (original > 0) {
    compare = (compare + (original % 10)) * 10;
    original = Math.floor(original / 10);
  }

  if (compare === x) return true;

  return false;
}

const cases = [
  { input: 121, expected: true },
  { input: -121, expected: false },
  { input:10 , expected:false }
]

cases.forEach(
  function ({ input, expected }) {

    const actual = isPalindrome(input);

    if (actual !== expected) {
      console.log(`FAILED TEST with ACTUAL:${actual} and INPUT:${input} but EXPECTED:${expected}`);
    } else {
      console.log(`SUCCESS TEST with ACTUAL:${actual}`)
    }

  }
)
