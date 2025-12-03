// Given a singly linked list, check if the linked list has a loop (cycle) or not.
// A loop means that the last node of the linked list is connected back to a node in the same list.

// Input: head: 1 -> 3 -> 4 -> 3
// Output: true

// Input: head: 1 -> 8 -> 3 -> 4 -> NULL 
// Output: false

class TreeNode{
    /**
     * 
     * @param {number} val 
     * @param {number} next 
     */
    constructor( val=null, next=null ){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{

    /**
     * 
     * @param {TreeNode} root 
     */
    constructor(root =null){
        this.root = root;
    }

    printList(){

        if(!this.root) return '';

        const current = this.root;
        let output = '';

        while(current){
            output +`${current.val}->`
            current = current.val
        }

        output += `->NULL`
        return output
        
    }

}