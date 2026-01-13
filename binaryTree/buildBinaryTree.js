// Problem:
// Construct Binary Tree from Level - Order Array Given an array of integers nodes representing the level
// - order traversal of a binary tree,construct the tree and return its root node.
// In this representation, a null value indicates that the corresponding node does not exist.
// The tree is built level by level, starting from the root, then the left and right children of the root, and so on.

// Example 1:
// Input: nodes = [1, 2, 3, null, null, 4, 5]
// Output: [1, 2, 3, null, null, 4, 5]
// Explanation: The root is 1. Its left child is 2 and right child is 3. Node 2 has no children(null, null).
// Node 3 has left child 4 and right child 5.

// Example 2:
// Input: nodes = [10, 5, 15, null, 8]
// Output: [10, 5, 15, null, 8]
// Explanation: The root is 10. Left child is 5, right child is 15. Node 5 has a null left child and a right child of 8.

// Example 3:
// Input: nodes = []
// Output: []

// Constraints:The number of nodes in the tree is in the range[0, 1000].- 1000 <= nodes[i] <= 1000nodes[i] may be null.
// Follow - up: Can you implement this using a Queue to ensure $O(n)$ time complexity and $O(n)$ space complexity ?


class TreeNode{
  constructor(val ) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{

  constructor(root) {
    this.root = null
  }

  /**
   *
   * @param { Array<number> } input
   */
  buildBinaryTree(input) {

    let index = 0
    if (!input) return [];
    this.root = new TreeNode(input[index])
    const root = this.root;
    const queue = [root];
    index += 1


    while ( queue.length > 0 ) {

      const parent = queue.shift()

      const left = input[ index ] ? input[ index ] : null
      const right = input[ index + 1 ] ? input[ index + 1 ] : null

      if (left) {
        parent.left = new TreeNode(left)
        queue.push(parent.left)
      }

      if (right) {
        parent.right = new TreeNode(right)
        queue.push(parent.right)
      }

      index += 2
    }

    return this.root;
  }

  printTree() {

    if (!this.root) return [];
    const root = this.root;
    const queue = [root];
    const result = [];

    while (queue.length > 0) {

      const current = queue.shift()

      if (current===null) {
        result.push(null)
        continue;
      }
      result.push(current.val)
      queue.push(current.left)
      queue.push(current.right)
    }

    return result
  }

}

const tree = new BinaryTree()
tree.buildBinaryTree([1, 2, 3, null, null, 4, 5])

console.log('Ansss', tree.printTree())
