// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four. The same principle applies to the number nine,
// which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romanTointeger(s){

    // Plan
    // 1. exit early if s is null or undefined
    // 2. initialize a roman to int map
    // 3. loop from the last char in s
    // 4. store the last char from previous loop or if at start put it at 0
    // 5. initialize a total at 0
    // 6. check if the currentchar is greater than previous char
    // 7. if greater subtract the current char from total
    // 8. If less add to total.

    if( s === null || s === undefined ){
        return 0
    }


    const romanMap = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    let previous = 0
    let total = 0
    let index =  s.length

    while( index >= 0 ){

        let current = romanMap[ s[ index ] ]

        if( current > previous ){
            total -= current
        } else{
            total += current
        }

        previous = current
        index -= 1

    }


    return total

}