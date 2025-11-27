// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

/**
 * @param {string} s
 * @returns {number}
 */

function lengthLastWord(s){
    // Plan
    // 1. Check if s is null, if so return 0.
    // 2. Check if the string is only an empty space return 0.
    // 3. Check if the string has a single character return 1.
    // 4. Find the length of the array and minus one.
    // 5. Create a variable(count) for checking the length of 
    // 6. Loop from the last char.
    // 7. Check if the last char is an empty string.
    // 8. If not find the length until the next empty space.
    // 9. Return count.

    if(!s) return 0
    if( s === " " ) return 0
    if( s.length === 1 ) return 1

    const sLength = ( s.length ) - 1
    let count = 0

    for( let i = sLength ; i >= 0 ; i --  ){

        if( s[i] === " " && count > 0 ) return count

        if( s[i] !== " " ) count += 1;

    }

    return count
    
}

console.log( "111", lengthLastWord("Hello World") )
console.log( "222", lengthLastWord("   fly me   to   the moon  ") )
console.log( "333", lengthLastWord("luffy is still joyboy") )