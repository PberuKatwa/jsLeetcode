// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//

/**
 * @param {string[]}strs
 * @param {number} index
 * @returns {boolean}
 */
function isPrefix(strs, index) {

  const stopIndex = index + 1;
  const prefix = strs[0].slice(0, stopIndex);

  for (let i = 1; i < strs.length; i++){
    const curr = strs[i].slice(0, stopIndex);
    if(curr !== prefix) return false
  }

  return true
}

/**
 * @param {string[]}strs
 * @returns {string}
 */
function longestPrefix(strs) {

  if (strs.length === 0 || strs.length === 1) return "";

  let maxLength = 0;

  for (let i = 0; i < strs.length; i++){
    const curr = strs[i];
    if (curr.length > maxLength) maxLength = curr.length;
  }

  let low = 0;
  let high = maxLength;

  while (low < high) {

    mid = Math.floor((low + high) / 2);

    if (isPrefix(strs, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return strs[0].slice(0,high );
}

const cases = [
  { input: ["flower", "flow", "flight"], expected: "fl" },
  { input: ["dog", "racecar", "car"], expected: "" },
  { input: ["dog", "date", "dig"], expected: "d" },
  { input: [], expected: "" },
  { input: ["dog"], expected: "" },


]

cases.forEach(
  function ({ input, expected }) {

    const actual = longestPrefix(input);

    if (actual !== expected) {
      console.log(`FAILED TEST with ACTUAL:${actual} and INPUT:${input} but EXPECTED:${expected}`)
    } else {
      console.log(`SUCCESS TEST with ACTUAL:${actual} and INPUT:${expected}`)
    }

  }
)
