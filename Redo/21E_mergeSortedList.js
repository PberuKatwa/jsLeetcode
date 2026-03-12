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

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.root = null;
  }

  /**
   * @param {number[]} array
   */
  createLinkedList(array) {

    if (array.length === 0) return this.root;

    const root = ListNode(0);
    const dummy = root;
    for (let i = 0; i < array.length; i++){
      dummy.next = ListNode(array[i])
      dummy = dummy.next;
    }

    this.root = root.next;

    return this.root
  }

  printList() {
    if (!this.root) return [];

    const root = this.root;
    const result = [];

    while (root) {
      result.push(root.val);
      root = root.next
    }

    return result;
  }
}

const cases = [
  { input: [1, 2, 4], expected: [1, 2, 4] },
  { input: [1, 3, 4], expected: [1, 3, 4] },
]
