// Given the head of a singly linked list, reverse the list in place and return the new head.
// Examples:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is in the range [0, 5000].

// -5000 <= Node.val <= 5000

class ListNode{
    /**
     * @param {number} val
     */
    constructor(val = null){
        this.val = val;
        this.next = null;
    }
}


class LinkedList{

    /**
     * @param {ListNode} head
     */
    constructor( head = null ){
        this.head = head;
    }

    /**
     * @param {Array<number>} input
     */
    createList(input){
        if(input.length === 0) return this.head;

        let index = 0

        if(!this.head ){
            console.log("weree heree")
            this.head = new ListNode( input[index] )
            index += 1
        }

        let current = this.head;
       
        while ( current.next ) current = current.next;

        for( index; index < input.length; index++ ){
            current.next = new ListNode ( input[index] )
            current = current.next
        }

        return this.head

    }

    printList(){
        
        if(!this.head)  return 'NULL';

        let current = this.head;
        let output =''

        while( current ){
            // console.log("valll",current.val)
            output += `${current.val}->`
            current = current.next
        }

        output += `NULL`
        return output

    }

    reverseList(){

        if(!this.head) return null;

        let current = this.head;
        let prev = null;

        while(current){

        }

        return this.head
    }

}

// [1,2,3,4,5]
// [1,2]
// []

const linked1 = new LinkedList()
linked1.createList( [1,2,3,4,5] )

console.log("111", linked1.printList() )
