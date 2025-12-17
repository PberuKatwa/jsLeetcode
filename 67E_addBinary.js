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
 * @returns {string}
 */

function addBinary(a,b){

    // Plan.
    // 1. Check if either a or b is null, if either is null return the non null value.
    // 2. If both are null return null.
    // 3. Find the length of both a and b.
    // 4. Initialize  a sum variable and carry vaiable(let sum & let carry).
    // 5. Intialize two variables each representing the length of each string(let i = a.length && let j = b.length).
    // 6. Create a while loop with the exit condition being if the index of j or i being less than 0 or carry > 0( i>=0, j>=0, carry ).
    // 7: Find the value for each part for example bitA is the value at current index if the index has gone negative the value is 0.
    // 8. Add up all the values + the carry( a + b + carry ).
    // 9. To get the sum get the remainder of the total( total % 2 ) and add it to the sum( total% 2 + sum).
    // NOTE:using the remainder divided by 2 works because the totals can only be 0,1,2,3. By getting the remainder which can only be 0 or 1 you
    // ensure its always base 2.
    // 10. To get the carry you divide the total by 2 and getting the absolute value ( total / 2 ).
    //Note: this works because the totals can only be 0,1,2,3. THe absolute value can only be 0 or 1 ensuring its always base 2.

    if(a.length === 0 && b.length > 1) return b;
    if(b.length === 0 && a.length > 1) return a;
    if(a.length === 0 && b.length === 0) return "";

    let sum = "";
    let carry =  0;

    let i = a.length;
    let j = b.length;

    while(i >= 0 || j >= 0  || carry){

        i -= 1
        j -= 1
        const bitA = i >= 0 ? a[i]  - "0": 0;
        const bitB = j >= 0 ? b[j]  - "0": 0;
        const total = bitA + bitB + carry

        sum = (total%2) + sum 
        carry = Math.floor( total/2 )

    }
    
    return sum
}

console.log("case1: a=11, b=1 ==> ", addBinary("11","1"))
console.log("case2: a=11, b=11 ==> ", addBinary("11","11"))
console.log("case3: a=1010, b=1011 ==> ", addBinary("1010","1011"))
console.log("case4: a=0010, b=1011 ==> ", addBinary("0010","1011"))
console.log("case5: a=, b=1011 ==> ", addBinary("","1011"))
console.log("case6: a=, b= ==> ", addBinary("",""))
console.log("case7: a=111, b=11111111 => ", addBinary("111","11111111"))
