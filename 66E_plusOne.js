// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit
//  of the integer. The digits are ordered from most significant to least significant in left-to-right order.
//  The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

/**
 * @param {Array<number>} digits
 * @returns {Array<number>}
 */

function plusOne(digits){
    // Plan
    // 1. Check if the list is empty, if so return []
    // 2. Check if its a single item and if that item is 9.
    // 3. If its 9 return [1,0].
    // 4. If less than 9 return the value + 1( digits[0] + 1) 
    // 5. Create a variable with the number to add which is 1(numAdd = 1)
    // 6. Find length of the digits array and assign to a variable( digLength = digits.length -1 )
    // 7. Loop from the last digit.
    // 8. Create an if exit condition where if numAdd is 0 return digits array.
    // 9. Create an if condition, Condition A is number is equal to 9 and Condition B Is every other number.
    // 10. If Condition A is true replace the current digit( digits[i] = 0 ) with 0.
    // 11. If condition B is true add the curr digit( digit[i] = digit[i] + numAdd ) and set numAdd = 0.
    // 12. If loop completes append 0 to digits( digits.append(0) ) and replace the first digit with 1 ( digits[0]=1 ) 
    // 13. Return digits.

    if(digits.length === 0) return []

    if(digits.length === 1 ){
        if( digits[0] === 9 ) return [1,0]; else return[ digits[0] + 1 ]
    }

    let numAdd = 1
    const digLength = digits.length - 1

    for( let i = digLength; i >=0 ; i-- ){

        if(numAdd === 0) return digits

        if( digits[i] === 9 ){
            digits[i]=0 ; 
        } else {
            digits[i]= digits[i] + numAdd;
            numAdd = 0;
        }

    }

    digits.push(0)
    digits[0] = 1

    return digits
}

console.log( "case 1:[1,2,3] =>", plusOne([1,2,3]) )