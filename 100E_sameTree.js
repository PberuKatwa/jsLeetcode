// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:
// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

class TreeNode{

  constructor( value ) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

class BinaryTree{

  /**
   *
   * @param {TreeNode | null} root
   */
  constructor(root) {
    this.root = root;
  }

  /**
   * @param { Array<number> } nums;
   * @returns { BinaryTree };
   */
  buildTree(nums) {

    if (!nums) return this.root;

    let index = 0;
    this.root = new TreeNode(nums[index])
    const root = this.root;
    const queue = [root];
    index += 1;

    while (queue.length > 0) {

      const parent = queue.shift()
      const left = nums[index] ? nums[index] : null;
      const right = nums[index + 1] ? nums[index + 1] : null;

      if (left) {
        parent.left = new TreeNode(left);
        queue.push(parent.left);
      }

      if (right) {
        parent.right = new TreeNode(right);
        queue.push(parent.right);
      }
      index += 2;

    }
    return this.root;
  }

  /**
   * @returns {Array<number>}
   */
  printTree(){

    if (!this.root) return [];

    const result = [];
    const root = this.root;
    const queue = [root];

    while (queue.length > 0) {

      const parent = queue.shift();

      if (parent===null) {
        result.push(null)
        continue;
      }

      result.push(parent.value)
      queue.push(parent.left)
      queue.push(parent.right)

    }

    return result;
  }

}

const tree = new BinaryTree();
tree.buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])

console.log("treee", tree.printTree() )
