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
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList{

  constructor() {
    this.head = null;
  }

  /**
   *
   * @param {number[]} array
   */
  buildLinkedList(array) {

    let dummy = new ListNode(0);
    let current = dummy;

    for (let i = 0; i < array.length; i++){

      dummy.next = new ListNode(array[i])
      dummy =  dummy.next

    }

    this.head = current.next
    return this.head
  }

  /**
   * @returns {string}
   */
  printList() {

    if (!this.head) return "";

    let current = this.head;
    let output = "";

    while (current) {
      output += `${current.val}->`
      current = current.next
    }

    output += "NULL"
    return output;
  }

  reverseList() {
    if (!this.head) return null;

    let dummy = new ListNode(0);
    let current = this.head;

    while (current) {

      let temp = current.next;
      current.next = dummy.next;
      dummy.next = current;
      current = temp

    }

    this.head = dummy;
    return this.head
  }

}


const linkedList = new LinkedList()
linkedList.buildLinkedList([1, 2, 3, 4, 5]);
linkedList.reverseList();

console.log("printtt", linkedList.printList());
