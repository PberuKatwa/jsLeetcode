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
    // 7.If the remaining items on haystack are less than the length of needle return -1.
    // 8. if loop ends return -1.

    if(!haystack) return -1
    if(!needle) return -1
    if( needle.length > haystack.length ) return -1

    const needleLength = needle.length 
    console.log("needle", needleLength)
    for( let i = 0; i < haystack.length ; i++ ){

        if( needleLength > ( haystack.length - i ) ) return -1

        console.log("i", i, "nl", needleLength, "current",haystack.substring( i, ( i + needleLength ) ))
        if( needle === haystack.substring( i , ( i + needleLength ) ) ){
            return i
        }

    }

    return -1

}

console.log("111", firstOccurrence( "sadbutsad", "sad" ))
console.log("222", firstOccurrence( "leetcode", "leeto" ))
console.log("333", firstOccurrence( "sadbutsad", "d" ))
console.log("444", firstOccurrence( "sa", "sad" ))
// console.log("111", firstOccurrence( "sadbutsad", "sad" ))