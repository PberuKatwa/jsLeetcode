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
  createList(array) {

    if (array.length === 0) return this.root;

    const root = new ListNode(0);
    let dummy = root;
    for (let i = 0; i < array.length; i++){
      dummy.next = new ListNode(array[i])
      dummy = dummy.next;
    }

    this.root = root.next;

    return this.root
  }

  /**
   *
   * @returns {number[]}
   */
  printList() {
    if (!this.root) return [];

    let root = this.root;
    const result = [];

    while (root) {
      result.push(root.val);
      root = root.next
    }

    return result;
  }
}

/**
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 */
function mergeLists(list1, list2) {

  let dummy1 = new ListNode(0);
  dummy1.next = list1.root;
  let dummy2 = new ListNode(0);
  dummy2.next = list2.root;


}

// const cases = [
//   { input: [1, 2, 4], expected: [1, 2, 4] },
//   { input: [1, 3, 4], expected: [1, 3, 4] },
// ]

// cases.forEach(
//   function ({ input, expected }) {

//     const linkedList = new LinkedList();
//     linkedList.createList(input);
//     const actual = linkedList.printList();

//     const isEqual = (expected.length === actual.length) && actual.every(({ value, index }) => (value === expected[index]));

//     if (!isEqual) {
//       console.log(`FAILED TEST with ACTUAL:${actual}, INPUT:${input} but EXPECTED:${expected}`)
//     } else {
//       console.log(`SUCCESS TEST with ACTUAL:${actual}, INPUT:${input}`)
//     }


//   }
// )
