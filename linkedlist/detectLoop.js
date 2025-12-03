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
    constructor( val=null){
        this.val = val;
        this.next = null;
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

        let current = this.root;
        let output = '';

        while(current){
            console.log( `curr val`, current.val )
            output += `${current.val}->`;
            current = current.next;
        }

        output += `->NULL`;
        return output;

    }

    detectLoop(){

        // Plan
        // 1. Check if root exists if null, return false.
        // 2. Initialize a new variable( let current) and assign it to this.root.
        // 3. Initialize a while loop, with the exit condition being while theres still a current node.
        // 4. create a fast and slow variable,the first going one step(current.next) and the fast goint two steps(current.next.next).
        // 5. create an if condition which is if slow catches up to fast return true.


        if (!this.root) return false;
        let current = this.root;

        let slow = current;
        let fast = current;

        while( slow.next && fast.next.next ){
            slow = slow.next;
            fast = fast.next.next;
        }
    }

}

// 1 -> 3 -> 4 -> 3
const node1 = new TreeNode(1);
node1.next = new TreeNode(3);
node1.next.next = new TreeNode(4);
node1.next.next.next = node1.next;
const linked1 = new LinkedList(node1)

console.log("111", linked1.printList() )