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
    // 2.Initialize a stack which will hold the order of processing the nodes.
    // 3.Initialize a result array that will store our final result.
    // 4.Create a variable(current) that can be redeclared storing the root(let current = this.root).
    // 5.Initialize a while loop(loop 1) with the exit condition being if current is null or the stack is empty.
    // 6.Initialize a while loop(loop 2) within loop 1 with the exit condition this time being current being equal to none
    // 7.In Loop 2 push the current node into the stack and redeclare the current with the left node(go as deep left until null).
    // 8.If the loop exits redeclare current to be the last item pushed into the stack( stack.pop() ).
    // 9.Push the current value into the result array ( Since we already reached the last left node and it in order trasversal
    //    (left->val->right) we have our value. )
    // 10.Redeclare the current to be its right child(current.right).
    // 11.If the right child is null and there are stack is
    //


    if (!this.root) return [];

    const stack = [];
    const result = [];
    let current = this.root;

    while ( current !== null || stack.length > 0) {

      while (current !== null) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      result.push(current.val)

      current = current.right;

    }

    return result
  }

}

const cases = [
  { input: [1, null, 2, 3], expected: [1, 3, 2] },
  { input: [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9], expected: [4,2,6,5,7,1,3,9,8] },
]

cases.forEach(
  function ({ input, expected }) {

    const binaryTree = new BinaryTree(null)
    binaryTree.buildTree(input)

    // const actual = binaryTree.traverseTreeRecursion()
    const actual = binaryTree.traverseTreeIterative()

    const isEqual = (actual.length === expected.length) && (actual.every((value, index) => (value === expected[index])));

    if (!isEqual) {
      console.log(`FAILED TEST for INPUT:${input} and ACTUAL:${actual} but EXPECTED:${expected}.`)
    } else {
      console.log(`PASSED TEST for INPUT:${input}.`)
    }



  }
)
