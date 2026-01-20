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

      const parent = queue.shift();

      const left = input[index] ? input[index] : null;
      const right = input[index + 1] ? input[index + 1] : null;

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

  printTree() {

    if (!this.root) return [];

    const currentRoot = this.root;
    const queue = [currentRoot];
    const result = [];

    while (queue.length > 0) {

      const current = queue.shift();

      if (current === null) {
        result.push(null);
        continue;
      }

      result.push(current.val);
      queue.push(current.left);
      queue.push(current.right);

    }

    return result;
  }

  /**
   *
   * @param {TreeNode} node
   * @returns Array<number>
   */
  traverseTreeRecursion(node=this.root) {

    if (node === null) {
      return [];
    }

    const left = this.traverseTreeRecursion(node.left)
    const right = this.traverseTreeRecursion(node.right)

    return [...left, node.val, ...right];
  }

  /**
   * @returns {Array<number>}
   */
  traverseTreeIterative() {

    // Plan
    // 1.Check if the root exists in a tree, if not return an empty Array.
    // 2.Initialize a queue which will hold the order of processing the nodes.
    // 3.Initialize a result array that will store our final result.
    // 4.Input the root as the first item that will be in the array.
    // 5.Initialize a while loop that that the exit condition is when the array is empty.
    // 6.Pop the queue from the left(FIFO) and assign it to a node variable.
    // 7.Check if the node has a left child, if true append it to the queue and continue the loop(stop execution of remaining lines).
    // 8.If no left child push the value(node.value) to the result array.
    // 9.Check if the node has a right child, if they do push the child into the queue.
    // 10.Once loop terminates return result.

    if (!this.root) return [];



   }

}


const tree = new BinaryTree(null);
tree.buildTree([1, null, 2, 3]);

const tree2 = new BinaryTree(null);
tree2.buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);

console.log("treee 2", tree2.traverseTreeRecursion());

const cases = [
  { input: [1, null, 2, 3], expected: [1, 3, 2] },
  { input: [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9], expected: [4,2,6,5,7,1,3,9,8] },
]

cases.forEach(
  function ({ input, expected }) {

    const binaryTree = new BinaryTree(null)
    binaryTree.buildTree(input)

    const actual = binaryTree.traverseTreeRecursion()
    const isEqual = (actual.length === expected.length) && (actual.every((value, index) => (value === expected[index])));

    if (!isEqual) {
      console.log(`FAILED TEST for INPUT:${input} and EXPECTED:${expected}.`)
    } else {
      console.log(`PASSED TEST for INPUT:${input}.`)
    }



  }
)
