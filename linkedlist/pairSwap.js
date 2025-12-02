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
        if(array.length === 1) return this.root = new TreeNode( array[0] );
        if(this.root === null ) this.root = new TreeNode( array[0] );

        let current = this.root;

        if( current.next != null ) current = current.next;

        for(let i = 1; i < array.length ; i ++){
            current.next = new TreeNode( array[i] )
            current = current.next
        }

        return this.root;
    }

    printList(){

        let current = this.root;
        let output = '';

        while(current){
            output +=`${current.val}->`
            current = current.next
        }

        output += `NULL`
        return output;

    }

    pairSwap(){

        let current = this.root;
        let prev = null;

        this.root = current.next

        while( current && current.next ){

            let p1 = current
            let p2 = current.next

            p1.next = p2.next
            p2.next = p1

            if( prev ) prev.next = p2;

            current = p1.next
            prev = p1

        }


    }

}

const linked1 = new LinkedList()
linked1.createList( [1,2,3,4,5,6] )
linked1.pairSwap()

console.log("111", linked1.printList() )