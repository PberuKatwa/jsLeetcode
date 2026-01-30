// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100
//

class TreeNode{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{

  constructor() {
    this.root = null;
  }

  /**
   * @param {Array<number>} input;
   */
  buildTree(input) {

    if (!input) return this.root;
    let index = 0;
    this.root = new TreeNode(input[0]);
    const root = this.root;
    const queue = [root];
    index += 1;

    while (queue.length > 0) {

      const parent = queue.shift();
      const left = input[index] ? input[index] : null;
      const right = input[index + 1] ? input[index + 1] : null;

      if (left) {
        parent.left = new TreeNode(left);
        queue.push(parent.left);
      }

      if (right) {
        parent.right = new TreeNode(right);
        queue.push(parent.right)
      }

      index +=2
    }

    return this.root;
  }
}

const cases = [
  { input: [3, 9, 20, null, null, 15, 7], output: [3, 9, 20, null, null, 15, 7] },
  { input: [1,null,2], output: [1,null,2] },
]
