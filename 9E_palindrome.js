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

function isPalindrome(x){

    // Plan
    // 1. exit early if x < 0 or x % 10 = 0
    // 2. create a temporary(temp) variable equal to x and a comparison(comp) variable to 0
    // 3. initilize a while loop 
    // 4. the exit condition is if temp > 0
    // 5. get the modulus( temp//10 ) and remainder( temp%10 ) of temp
    // 6. multiply comp by 10 and add the remainder
    // 7. compare comp to x if the same return true otherwise return false

    if( x < 0 || x % 10 === 0 ){
        return false
    }

    let temp = x
    let comp = 0

    while( temp > 0 ){

        let remainder = temp % 10
        temp = Math.floor( temp / 10 )
        comp = ( comp * 10 ) + remainder

    }

    if( comp === x ){
        return true
    }

    return false

}

console.log("1111", isPalindrome(121) )
console.log("2222", isPalindrome(-121) )
console.log("3333", isPalindrome(10) )