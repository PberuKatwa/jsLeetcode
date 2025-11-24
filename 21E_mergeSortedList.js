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


        if(this.head === null) this.head = ListNode(input[0])

        let current = this.head

        while(current.next !== null) current = current.next

        for( let i = 1; input.length > i ; i ++){
            current.next = ListNode( input[i] )
            current = current.next
        }

        return this.head

    }
}