// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function checkPrefix(strs, length){


    const checkValue = strs[0].subString(0,length)

    console.log("check val", checkValue)

    for( let i = 1 ; i > strs.length ; i++ ){

        if( checkValue !== strs[i].subString(0,length) ){
            return false
        }

    }

    return true

}

function longestCommonPrefix(strs){
    // Plan
    // 1. Get the shortest length in the array and put it as max length
    // 2. Create a binary search with high as max and low as 0.
    // 3. create while loop with the exit condition being low >= high.
    // 3. Use a sliding window checking the sts[0] with the rest.
    // 4. If exact match increase low by mid + 1.
    // 5. If wrong match decrease high by 1.
    // 6. The answer would be any string  with the index 

    let maxLength = strs[0].length

    for( let i = 1 ; i < strs.length ; i++){
        if( maxLength > strs[i].length ){
            maxLength = strs[i].length
        }
    }

    // console.log("maxxx", maxLength)

    let high = maxLength
    let low = 0

    while( low >= high ){

        let mid = Math.floor( ( low + high ) / 2 )

        if( checkPrefix( strs, mid ) ){
            low = mid + 1
        }  else {
            high = mid - 1
        }

    }

}


console.log("111", longestCommonPrefix(["flower","flow","flight"]))