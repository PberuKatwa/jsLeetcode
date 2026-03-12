// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Example 5:
// Input: s = "([)]"
// Output: false

/**
 * @param {string} s
 * @returns {boolean}
 */
function isParenthesisValid(s) {

  if (s.length <= 1) return false;

  const map = {
    ")": "(",
    "]": "[",
    "}":"{"
  }

  const stack = [];
  for (let i = 0; i < s.length; i++){
    const curr = s[i];
    if (map[curr]) {
      const item = stack.pop();
      if (item !== map[curr]) return false;
    } else {
      stack.push(curr);
    }
  }

  return true;
}

const cases = [
  { input: "()", expected: true },
  { input: "()[]{}", expected: true },
  { input: "(]", expected: false },
  { input: "([])", expected: true },
  { input: "([)]", expected: false },
]

cases.forEach(
  function ({ input, expected }) {
    const actual = isParenthesisValid(input);
    if (actual !== expected) {
      console.log(`FAILED TEST with ACTUAL:${actual}, INPUT:${input} and EXPECTED:${expected}`);
    } else {
      console.log(`SUCCESS TEST with ACTUAL:${actual}, INPUT:${input}`)
    }

  }
)
