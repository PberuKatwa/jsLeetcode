// Given an integer array nums where the elements are sorted in ascending order,
// convert it to a height-balanced binary search tree.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.
//

class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{

  constructor() {
    this.root = null;
  }

  /**
   * @param {Array<number>} input
   */
  buildBalancedSearchTree(input) {

    if (!input) return this.root;

    const rootIndex = Math.floor((input.length - 1) / 2);
    this.root = new TreeNode(input[rootIndex]);

    const root = this.root;
    const queue = [root];

    for (let i = rootIndex - 1; i >=0; i--){
      const parent = queue.shift();
      parent.left = new TreeNode(input[i]);
      queue.push(parent.left);
    }

    const rightQueue = [root];
    for (let i = rootIndex + 1; i < input.length; i++){
      const parent = rightQueue.shift();
      parent.right = new TreeNode(input[i]);
      rightQueue.push(parent.right);
      // console.log("weree at right",parent.val, "queue", rightQueue)
    }

    return this.root;
  }

  printTree() {

    if (!this.root) return [];

    const root = this.root;
    const queue = [root];
    const result = [];

    while (queue.length > 0) {

      const parent = queue.shift()

      if (!parent) {
        result.push(null);
        continue;
      }

      result.push(parent.val)
      queue.push(parent.left);
      queue.push(parent.right);
    }

    let index = result.length - 1;
    while (index >= 0 && (result[index] === null)) {
      result.pop();
      index--;
    }
    return result;
  }
}

const cases = [
  { input: [-10, -3, 0, 5, 9], expected: [0, -3, 5, -10, null, null, 9] },
  { input: [1, 3], expected: [1, null, 3] },

]

cases.forEach(
  function ({input,expected}) {

    const tree = new BinaryTree();
    tree.buildBalancedSearchTree(input);
    const actual = tree.printTree();

    const isMatch = (expected.length === actual.length) && (actual.every((value, index) => (value === expected[index])));

    if (!isMatch) {
      console.log(`FAILED TEST for INPUT:${input} and ACTUAL:${actual} but EXPECTED:${expected}`)
    } else {
      console.log(`SUCCESS TEST for INPUT:${input} with EXPECTED:${expected}`)
    }

  }
)
