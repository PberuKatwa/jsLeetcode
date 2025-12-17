// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 */

function addBinary(a,b){

    // Plan
    // 1. Check if either a or b is null, if either is null return the non null value.
    // 2. If both are null return null.
    // 3. Find the length of both a and b.
    // 4. Initialize  a sum variable and carry vaiable(let sum & let carry).
    // 5. Loop from the last index of a and b.
    // 6. Scenario 1 summation, 0 + 0 = 0. Sum is 0 and carry is 0.
    // 7. Scenario 2 summation, 1 + 0 = 0. Sum is 1 and carry is 0. 
    // 8. Scenario 3 summation, 1 + 1 = 0. Sum is 0 and carry is 1.
    // 9. Scenario 4 summation, 1 + 1 + 1(carry) = 0. Sum is 1 and carry is 1.
    // 10. Scenario 5 summation, 1 + 0 + 1(carry) = 0. Sum is 0 and carry is 1.
    // 11. Scenario 6 summation, 1 + 0 + 0(carry) = 0. Sum is 1 and carry is 0. 
    // 12. Return sum.

    if(a.length === 0 && b.length > 1) return b;
    if(b.length === 0 && a.length > 1) return a;
    if(a.length === 0 && b.length === 0) return null;

    let sum = 0;
    let carry =  0;

    const aLength = a.length;
    const bLength = b.length;

    let maxLength = 0

    if(aLength > bLength){
        maxLength = aLength
    }else{
        maxLength = bLength
    }

    for( let i = 0; i < maxLength ; i++){

        const charA = Number( a[i] ) ? Number( a[i] ) : 0;
        const charB = Number( b[i] ) ? Number( b[i] ) : 0;


        if ( charA === 1 && charB === 1){
            sum += 1
            carry = 0
        }else if( charA === 1 && charB === 0 ){
            carry = 1
        }else if( charA === 0 && charB === 1 ){
            sum += 1
            carry = 0
        }

    }
    
    return sum
}