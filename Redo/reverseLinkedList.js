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

    const dummy = new ListNode(0);

    for (let i = 0; i < array.length; i++){

      dummy.next = new ListNode(array[i])
      dummy =  dummy.next

    }

    this.head = dummy.next

    return this.head

  }

}
