// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first
// two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

class ListNode{
    constructor( val=null ){
        this.val = val
        this.next = null
    }
}

class LinkedList{
    constructor( head = null){
        this.head = head
    }

    createList(input){

        if(input.length === 0){
            return this.head
        }


        if(this.head === null) this.head = new ListNode(input[0])

        let current = this.head

        while(current.next !== null) current = current.next

        for( let i = 1; input.length > i ; i ++){
            current.next = new ListNode( input[i] )
            current = current.next
        }

        return this.head

    }

    printList(){

        if( this.head === null ) return ""

        let current = this.head
        let output = ""

        while(current){
            output += `${current.val}->`
            current = current.next 
        }

        output += "NULL"

        return output

    }

}

const list_1 = new LinkedList(null)
list_1.createList([1,2,4])
const list_2 = new LinkedList(null)
list_2.createList([1,3,4])

function mergeSortedList( list1, list2 ){
    
    // Plan
    // 1. check if any  or both of the lists are null, if one is null return the other.
    // 2. If both are empty return null
    // 3. Use 2 pointers each starting at the head of each list.
    // 4. Create an empty Linked list.
    // 5. Check the curent val of each pointer.
    // 6. Put the lesser val as the next node 


}

console.log("111", list_1.printList() )
console.log("222", list_2.printList() )