class ListNode{
    /**
     * @param {number} val
     */
    constructor(val = null){
        this.val = val
        this.next = null
    }
}

class LinkedList{
    
    constructor(head = null){
        this.head = head
    }

    createFromArray(list){

        if(list.length < 1){
            return this.head
        }

        if(this.head === null) this.head = new ListNode(list[0])
            
        let current = this.head
        // console.log("vall", current.val)

        while( current.next ) { 
            // console.log("current", current.val)
            current = current.next 
        }

        for( let i=1; i < list.length ;i++ ){
            // if(current.val!== null && current.val !== undefined){
            //     console.log("vall", current.val)
            // }
            // console.log("nodee", list[i])
            current.next = new ListNode(list[i])
            current = current.next
        }

        return this.head

    }

    printList(){

        if(!this.head) return ""

        let output = ""
        let current = this.head
        console.log("curr vall", this.head.val)

        while( current ){
            console.log( "list", current.val )
            output += `${current.val}->`
            current = current.next
        }

        output +="NULL"
        return output
    }


}

const head1 = new LinkedList(null)
head1.createFromArray([1,2,4])
console.log("111", head1.printList())