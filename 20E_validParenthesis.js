// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Example 5:
// Input: s = "([)]"
// Output: false

/** 
* @param {string} s
* @returns {boolean}
*/ 

function validParenthesis(s){

    // Plan
    // 1. Create a hashmap with the key as the closing bracket and value as the open bracket. 
    // 2. Initialize an empty stack.
    // 3. Loop through the string
    // 4. At each itiration chekck if the char has a value in the hashmap.
    // 5. If it doesnt exist append the char to the stack.
    // 6. If it does pop an item from the stack 
    // 7. Check If the popped item is the same as the val in the hashmap
    // 8. If same continue with loop
    // 9. If not same return false.

    const parenthesisMap = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    const stack = []

    for( let i = 0; i < s.length() ; i++ ){

        if( parenthesisMap[ s[i] ] !== undefined ){

            let stackVal = stack.pop()
            let actualVal = parenthesisMap[ s[i] ]

            if( stackVal !== actualVal ){
                return false
            }


        }

        stack.push(s[i])

    }

    return true

}

console.log("111", validParenthesis("()"))
console.log("222", validParenthesis("()[]{}"))
console.log("333", validParenthesis("(]"))
console.log("333", validParenthesis("([)]"))