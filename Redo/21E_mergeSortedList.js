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
    this.head = null;
  }

  /**
   * @param {number[]} array
   */
  createList(array) {

    if (array.length === 0) return this.head;

    const head = new ListNode(0);
    let dummy = head;
    for (let i = 0; i < array.length; i++){
      dummy.next = new ListNode(array[i])
      dummy = dummy.next;
    }

    this.head = head.next;

    return this.head
  }

  /**
   *
   * @returns {number[]}
   */
  printList() {
    if (!this.head) return [];

    let head = this.head;
    const result = [];

    while (head) {
      result.push(head.val);
      head = head.next
    }

    return result;
  }
}

/**
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 */
function mergeLists(list1, list2) {

  if (!list1.head && !list2.head) return new LinkedList();
  if (!list1.head) return list2;
  if (!list2.head) return list1;

  let dummy1 = list1.head;
  let dummy2 = list2.head;

  let result = new LinkedList();
  result.head = new ListNode(0);
  let dummy3 = result.head;

  while (dummy1&& dummy2) {

    if (dummy1.val <= dummy2.val) {
      dummy3.next = dummy1;
      dummy1 = dummy1.next;
    } else {
      dummy3.next = dummy2;
      dummy2 = dummy2.next;
    }

    dummy3 = dummy3.next;

  }

  while (dummy1) {
    dummy3.next = dummy1;
    dummy3 = dummy3.next;
    dummy1 = dummy1.next;
  }

  while (dummy2) {
    dummy3.next = dummy2;
    dummy3 = dummy3.next;
    dummy2 = dummy2.next;
  }

  result.head = result.head.next;
  return result;
}

const cases = [
  { input1: [1, 2, 4], input2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
  { input1: [], input2: [], expected: [] },
  { input1: [], input2: [0], expected: [0] },
]

cases.forEach(
  function ({ input1, input2, expected }) {

    const linkedList1 = new LinkedList();
    linkedList1.createList(input1);
    const linkedList2 = new LinkedList();
    linkedList2.createList(input2);

    const mergedList = mergeLists(linkedList1, linkedList2);
    const actual = mergedList.printList()

    const isEqual = (expected.length === actual.length) && actual.every(({ value, index }) => (value === expected[index]));

    if (!isEqual) {
      console.log(`FAILED TEST with ACTUAL:${actual}, INPUT1:${input1} and INPUT2:${input2} but EXPECTED:${expected}`)
    } else {
      console.log(`SUCCESS TEST with ACTUAL:${actual}, INPUT1:${input1} and INPUT2:${input2} `);
    }


  }
)
