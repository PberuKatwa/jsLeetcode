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
        if(!current){
            this.root = new ListNode(input[0])
        }else{
            if(current.next) current = current.next;          
        }

        current.next = new ListNode(input[0])
        current = current.next

        if(input.length === 1) return this.root;

            
        for(let i = 1; i < input.length; i++){
            if(current){
                current.next = new ListNode(input[i])
                current = current.next
            }
        }

        return this.root
    }

    printList(){
        if(!this.root) return 'NULL'

        let output = '';
        let current = this.root

        while(current){
            output += `${current.value}->`
            current = current.next
        }

        output += 'NULL'
        return output

    }


}

const list1 = new LinkedList()
list1.createFromList( [1,1,2] )

const list2 = new LinkedList()
list2.createFromList( [1,1,2,3,3] )

console.log("list 1111", list1.printList() )
console.log("list 2222", list2.printList() )