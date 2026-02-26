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

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor() {
    this.root = null;
  }

  /**
   *
   * @param {number[]} nums
   */
  buildTree(nums) {

    if (!nums) return this.root;

    let index = 0;
    const root = new TreeNode(nums[0]);

    const queue = [root];
    index++;

    while (queue.length > 0 && index < nums.length ) {

      const parent = queue.shift();
      const left = nums[index] ? nums[index] : null;
      const right = nums[index + 1] ? nums[index + 1] : null;

      if (left) {
        parent.left = new TreeNode(left)
        queue.push(parent.left);
      }

      if (right) {
        parent.right = new TreeNode(right);
        queue.push(parent.right)
      }

      index +=2
    }

    this.root = root
    return this.root;
  }

  /**
   *
   */
  printTree() {

    if (!this.root) return [];

    const result = [];
    const root = this.root;
    const queue = [root];

    while (queue.length > 0) {

      const parent = queue.shift();

      if (!parent) {
        result.push(null);
        continue;
      }

      result.push(parent.val);
      queue.push(parent.left);
      queue.push(parent.right);
    }

    let index = (result.length) - 1;
    while (index > 0 && !result[index]) {
      result.pop();
      index--;
    }

    return result;
  }

  /**
   *
   * @returns {boolean}
   */
  checkBalanceRecursively() {
    if (this.root) return null;
    const result = this._balanceRecursively(this.root);

    if (result === -1) {
      return false
    }

    return true;
  }

  /**
   *
   * @param {TreeNode} node
   */
   _balanceRecursively(node) {
     if (!node) return 0;
     console.log("height")
     const leftHeight = this._balanceRecursively(node.left);
     if (leftHeight === -1) return -1;

     const rightHeight = this._balanceRecursively(node.right);
     if (rightHeight === -1) return -1;

     if (Math.abs(leftHeight - rightHeight) > 1) return -1;

     return 1 + Math.max(leftHeight, rightHeight);
   }
}

// const cases = [
//   { input: [3, 9, 20, null, null, 15, 7], expected: [3, 9, 20, null, null, 15, 7] },
//   { input: [1, 2, 2, 3, 3, null, null, 4, 4], expected: [1, 2, 2, 3, 3, null, null, 4, 4] }

// ]


// cases.forEach(
//   ({ input, expected })=>{

//     const tree = new BinaryTree();
//     tree.buildTree(input);
//     const actual = tree.printTree();

//     const isMatch = (actual.length === expected.length) && (expected.every((value, index) => (value === actual[index])));

//     if (!isMatch) {
//       console.log(`FAILED TEST for INPUT:${input} with ACTUAL:${actual} and EXPECTED:${expected}`);
//     } else {
//       console.log(`SUCCESS TEST for INPUT:${input} and ACTUAL:${actual}`)
//     }

//   }
// )

const cases = [
  { input: [3, 9, 20, null, null, 15, 7], expected: true },
  { input: [1, 2, 2, 3, 3, null, null, 4, 4], expected: false },
  { input: [], expected: true }
]

cases.forEach(
  ({ input, expected }) => {

    const tree = new BinaryTree();
    tree.buildTree(input);

    const actual = tree.checkBalanceRecursively();

  }
)

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true
