// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Explanation:

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]
// Explanation:

// Example 3:
// Input: root = []
// Output: []

// Example 4:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?

class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{

  constructor(root) {
    this.root = root;
  }

  /**
   * @param {Array<number>} input
   */
  buildTree(input) {

    if (!input) return this.root;
    let index = 0;
    this.root = new TreeNode(input[0]);
    const root = this.root;
    const queue = [root]

    index += 1;

    while (queue.length > 0) {

      parent = queue.shift()

      const left = input[index] ? input[index] : null
      const right = input[index + 1] ? input[index + 1] : null

      if (left) {
        parent.left = new TreeNode(left)
        queue.push(parent.left)
      }

    }

  }

}
