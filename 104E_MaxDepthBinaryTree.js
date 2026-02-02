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

    while (queue.length > 0 && index < input.length) {

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

      index += 2;
    }
    return this.root;
  }

  printTree() {

    if (!this.root) return null;
    const root = this.root;
    const queue = [root];
    const result = [];

    while (queue.length > 0) {

      const parent = queue.shift();

      if (!parent) {
        result.push(null);
        continue;
      }

      result.push(parent.value);
      queue.push(parent.left);
      queue.push(parent.right);
    }

    let index = result.length - 1;
    while (index >= 0 && result[index] === null) {
      result.pop();
      index--;
    }

    return result;
  }

  maxDepthIterativeBFS() {

    if (!this.root) return 0;

    const root = this.root;
    const queue = [root];
    let depth = 0;
    let count = 0;

    while (queue.length > 0) {
      // console.log("\nqueue", queue, "depth",depth)
      depth++;

      let levelSize = queue.length;
      for (let i = 0; i < levelSize; i++){

        const parent = queue.shift();
        if (parent.left) queue.push(parent.left);
        if (parent.right) queue.push(parent.right);

      }
    }

    return depth;
  }

}

const cases = [
  { input: [3, 9, 20, null, null, 15, 7], expected: [3, 9, 20, null, null, 15, 7] },
  { input: [1, null, 2], expected: [1, null, 2] },
  { input: [1, 0, null, 0, null, 4], expected: [1, 0, null, 0, null, 4] },
  { input: [1, 0, 0, 0, null, null, null], expected: [1, 0, 0, 0, null, null, null] },
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



// const cases = [
//   { input: [3, 9, 20, null, null, 15, 7], expected: 3 },
//   { input: [1, null, 2], expected: 2 },
//   { input: [1, 2, null, 3, null, 4], expected: 4 },
//   { input: [1, 2, 3, 4, null, null, null], expected: 3 },
//   { input: [1, 2, 3, 4, 5, null, null, 6], expected: 4 },
//   { input: [1, 2, null, 3, 4, null, null, 5], expected: 4 },
//   { input: [1, 2, null, 3, 4, 6, 7], expected: 4 },
//   { input: [1, 2, null, 3, null, 4, null, 5], expected: 5 },
//   { input: [1, 0, 0, 0], expected: 3 },
//   { input: [1, 2, 3, 4, 5, 6, 7], expected: 3 }
// ]

// cases.forEach(
//   function ({ input, expected }) {

//     const tree = new BinaryTree();
//     tree.buildTree(input);
//     const actual = tree.maxDepthIterativeBFS()

//     if (actual!==expected) {
//       console.log(`FAILED TEST with INPUT:${input} and ACTUAL:${actual} but EXPECTED:${expected}`);
//     } else {
//       console.log(`SUCCESS TEST with INPUT:${input} and EXPECTED:${expected}`)
//     }

//   }
// )
