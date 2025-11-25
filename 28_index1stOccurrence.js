// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */

function firstOccurrence( haystack, needle ){

    // Plan
    // 1.If haystack or needle is null return -1
    // 2.Find the length of the needle.
    // 3.Loop through the haystack.
    // 4.Compare the entire needle with the substring from the current char in the loop( needle === haystack.substring(i,needle.length) )
    // 5.If they are equal return the current index
    // 6.If not continue with the loop
    // 7. if loop ends return -1.

    if(!haystack) return -1
    if(!needle) return -1

    const totalLength = needle.length 

    for( let i = 0; i < haystack.length ; i++ ){

    }

    return -1

}