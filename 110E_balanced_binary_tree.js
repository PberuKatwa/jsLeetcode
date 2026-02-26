// Given a binary tree, determine if it is height-balanced.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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
   * @param {TreeNode} nums
   */
  buildTree(nums) {

    if (!nums) return this.root;
    this.root = new TreeNode(nums[0]);

    let index = 0;
    const root = this.root;
    const queue = [root];
    index++

    while (queue.length > 0 && nums.length > index) {

      const parent = queue.shift();
      const left = nums[index] ? nums[index] : null;
      const right = nums[index + 1] ? nums[index + 1] : null;

      if (left) {
        parent.left = new TreeNode(left)
        queue.push(parent.left)
      }

      if (right) {
        parent.right = new TreeNode(right);
        queue.push(parent.right);
      }

      index += 2;
    }

    return root;
  }

  printTree() {

    if (!this.root) return [];

    const root = this.root;
    const queue = [root];
    const result = [];

    while (queue.length > 0) {

      const parent = queue.shift();

      if (parent=== null) {
        result.push(null);
        continue
      }

      result.push(parent.val);
      queue.push(parent.left);
      queue.push(parent.right);
    }

    let index = result.length - 1;
    while (index > 0 && !result[index]) {
      result.pop();
      index--;
    }

    return result;
  }

  checkBalanceRecursive() {
    if (!this.root) return null;
    this._recursiveCheck(this.root);
  }

  /**
   *
   * @param {TreeNode} node
   * @returns
   */
  _recursiveCheck(node) {

    if (!node) return null;

    let left = null;
    if (node.left) { left = this._recursiveCheck(node.left); }

    let right = null;
    if (node.right) right = this._recursiveCheck(node.right);

    return 1
  }

}

const cases = [
  { input: [3, 9, 20, null, null, 15, 7], expected: [3, 9, 20, null, null, 15, 7] },
  { input: [1, null, 2], expected: [1, null, 2] },
  { input: [1, 0, null, 0, null, 4], expected: [1, 0, null, 0, null, 4] },
  { input: [1, 0, 0, 0, null, null, null], expected: [1, 0, 0, 0, null, null, null] },
  { input: [1,2,2,3,3,null,null,4,4], expected: [1,2,2,3,3,null,null,4,4] },
]

cases.forEach(
  function ({ input, expected }) {

    const tree = new BinaryTree();
    tree.buildTree(input);
    const actual = tree.printTree();
    const isMatch = (actual.length === expected.length) && (actual.every( (value, index) => (value === expected[index] )) );

    if (!isMatch) {
      console.log(`FAILED TEST for INPUT:${input} and ACTUAL:${actual} but EXPECTED${expected}`)
    } else {
      console.log(`SUCCESS TEST for INPUT:${input} with EXPECTED:${expected}`)
    }

  }
)
