// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 
// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order

class ListNode{
    /**
     * @param {number} value
     * @param {number} next
     */
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{

    constructor(root){
        this.root = root;
    }

    /**
     * @param {Array<number>} input
     */
    createFromList(input){

        if(input.length <1) return this.root;

        let current = this.root
        if(current.next) current = current.next;

        current.next = ListNode(input[0])
        current = current.next

        if(input.length === 1) return this.root;

            
        for(let i = 1; i < input.length; i++){
            if(current.next){
                current.next = ListNode(input[i])
                current = current.next
            }
        }

        return this.root
    }


}