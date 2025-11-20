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
    constructor(val = null){
        this.val = val
        this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        this.head = ListNode(head)
    }

    createFromArray(list){

        let current = this.head
        if(this.head){

            while( current.next !== undefined || current.next !== null  ){
                current = current.next
            }

        }

        for(const item in list){
            current.next = ListNode(item)
            current = current.next
        }

        return this.head

    }

    printList(){

        if(this.head) return ""

        const output = ""
        let current = this.head

        while( current.next !==undefined || current.next !== null ){
            console.log( "list", output )
            output += `->${current.val}`
        }

        output +="->NULL"
        return output
    }


}