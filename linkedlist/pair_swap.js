// Given a singly linked list, the task is to swap linked list elements pairwise.
// Examples:

// Input : 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL 
// Output : 2 -> 1 -> 4 -> 3 -> 6 -> 5 -> NULL

// Input : 1 -> 2 -> 3 -> 4 -> 5 -> NULL 
// Output : 2 -> 1 -> 4 -> 3 -> 5 -> NULL

class TreeNode{

    /**
     * 
     * @param {number} val 
     * @param {number} next 
     */
    constructor(val=null,next=null){
        this.val = val;
        this.next = next;
    }

}

class LinkedList{

    /**
     * 
     * @param {TreeNode} root 
     */

    constructor(root=null){
        this.root = root;
    }

    /**
     * 
     * @param {Array<number>} array 
     */
    createList(array){

        if(array.length === 0) return 'NULL';
        if(array.length === 1) return this.root = TreeNode( array[0] );
        if(this.root === null ) this.root = TreeNode( array[0] );

        let current = this.root;

        if( current.next != null ) current = current.next;

        for(let i = 1; i < array.length ; i ++){
            current.next = TreeNode( array[i] )
            current = current.next
        }

        return this.root;
    }

    printList(){
       let current = this.root
    }

}