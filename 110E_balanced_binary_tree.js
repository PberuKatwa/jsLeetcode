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

    if (queue.length > 0) {

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

      if (!parent) {
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

  }

}
