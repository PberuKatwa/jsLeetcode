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

    constructor(head){
        this.head = head;
    }

    /**
     * @param {Array<number>} input
     */
    createFromList(input){

        if(input.length < 1) return this.head;

        let index = 0;
        if(!this.head){
            this.head = new ListNode(input[index])
            index += 1
        }

        let current = this.head

        if(input.length === 1) return this.head;

        while(current.next)current = current.next
                       
        for(index; index < input.length; index++){
            current.next = new ListNode(input[index])
            current = current.next
        }

        return this.head
    }

    printList(){
        if(!this.head) return 'NULL'

        let output = '';
        let current = this.head

        while(current){
            output += `${current.value}->`
            current = current.next
        }

        output += 'NULL'
        return output

    }


}

const createListCases = [
    { input:[1,1,2], expected:'1->1->2->NULL' },
    { input:[1,1,2,3,3], expected:'1->1->2->3->3->NULL' },
    { input:[], expected:'NULL' },
]

createListCases.forEach(
    function({input,expected}){

        const list1 = new LinkedList();
        list1.createFromList( input ) 
        
        const actual = list1.printList()

        if(actual != expected){
            console.log(`FAILED TEST for INPUT:${input}, with EXPECTED:${expected} but ACTUAL:${actual}`)
        }else{
            console.log(`SUCCESS TEST for INPUT:${input} and EXPECTED:${expected}`)
        }
    }
)
