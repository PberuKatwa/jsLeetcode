// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

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
   * @param {Array<number>} input
   *
   */
  buildTree(input) {

    //Plan
    // 1.Check if the input array is empty if so return the root.
    // 2.Create redeclarable variable for the current index of the array (let index = 0).
    // 3.Assign the first item in the input array as the root and increment the index by 1.
    // 4.Create a variable called root to hold the current root(const root = this.root).
    // 5.Create a queue with the initial item being the root(const queue = [root]).
    // 6.Initialize a while loop with the exit condition being the queue being empty.
    // 7.Extract the first item in the queue(const parent = queue.shift() ) and assign it to a variable named variable.
    // 8.Assign the apparent left child by assigning the value at the current index in the input array(input[index]),if its
    //    null then assign null as the left child.
    // 9.Assign the apparent right child by assigning the value at the current index + 1 in the input array(input[index + 1]),if its
    //    null then assign null as the right child.
    //
    // CLARIFICATION: The reason we assign a null value to children is because this means that path is "dead" but we need to maintain
    // the tree structure since were building level by level. If we failed the index would be out of sync since the input array
    // is level order with "dead" paths being indicated as null. It is also true to say the child is null.
    //
    // 10.We check if the left child is not null.If its null we skip if not we assign it as the left child of the parent(parent.left = left).
    //    After assigning we add the left child to the queue to be processed in another loop cycle.
    // 11.We then check if the right child is not null.If its null we skip if not we assign it as the right child of the parent(parent.right = right).
    //    After assigning we add the right child to the queue to be processed in another loop cycle.
    // 12.The last action in the loop is incrementing the index by 2 (index += 2) since were done with this level.
    // 13.Once the while loop exits return root, the root of the tree.

    if (!input) return this.root;
    let index = 0;
    this.root = new TreeNode (input[index]);
    const root = this.root;
    const queue = [root];
    index++;

    while (queue.length > 0) {

      const parent = queue.shift();
      const left = input[index] ? input[index] : null;
      const right = input[index + 1] ? input[index + 1] : null;

      if (left) {
        parent.left = new TreeNode(left);
        queue.push(parent.left)
      }

      if (right) {
        parent.right = new TreeNode(right);
        queue.push(parent.right)
      }

      index += 2;
    }
    return root;
  }

  /**
   *
   * @returns {Array<number>}
   */
  printTree() {

    if (!this.root) return [];
    const root = this.root;
    const queue = [root];
    const result = [];

    while (queue.length > 0) {

      const parent = queue.shift();

      if (parent === null) {
        result.push(null);
        continue;
      }

      result.push(parent.val);
      queue.push(parent.left);
      queue.push(parent.right)
    }
    return result;
  }

  /**
   * @param {TreeNode} node1
   * @param {TreeNode} node2
   * @returns {boolean}
   */
  isSymmetricRecursive( node1, node2 ) {

    // Plan
    // 1. Check if there both no node1 and node2.
    // 2. If both are null check if there is a root node for the tree.
    // 3. If the root is not null, return the same function with the root assigning the nodes with its children
    //    ( return isSymmetricRecursive(root.left,root.right) ).
    // 4. If the root is also null return true.
    // 5. Check if either node1 or node2 is absent, if either is absent return false.
    // 6. Do a recursive check by fulfilling 3 chained conditions.
    // 7. Condition 1 which is the node1 value is equal to the node2 value( node1.val === node2.val ).
    // 8. Condition 2 which is recursive function with the parameters the node1 left child and node2 right child
    //    ( isSymmetricRecursive( node1.left, node2.right )  ).
    // 9. Condition 3 which is recursive function with the parameters the node1 right child and node2 left child
    //    ( isSymmetricRecursive( node1.left, node2.right )  ).
    // 10. The recursive function will return true if its symmetric and false otherwise.

    const root = this.root;

    if (!node1 && !node2) {
      if (!root) return true;
      return (this.isSymmetricRecursive( root.left, root.right));
    }

    if (node1 === null || node2 === null) return true;

    return (
      node1.val === node2.val &&
      this.isSymmetricRecursive( node1.left, node2.right ) &&
      this.isSymmetricRecursive( node1.right , node2.left )
    )

  }

}

// const casesBuild = [
//   { input: [1, 2, 2, 3, 4, 4, 3], expected: [1, 2, 2, 3, 4, 4, 3] },
//   { input:[1,2,2,null,3,null,3], expected:[1,2,2,null,3,null,3] },
// ]

// casesBuild.forEach(
//   function ({ input, expected }) {

//     const tree =new  BinaryTree();
//     tree.buildTree(input);
//     const actual = tree.printTree();

//     const isMatch = (actual.length === expected.length) && (actual.every((value, index) => { value === expected[index] }));

//     if (!isMatch) {
//       console.log(`FAILED TEST for INPUT ${input} with EXPECTED:${expected} but ACTUAL:${actual}`)
//     } else {
//       console.log(`SUCCESS TEST for INPUT ${input} with EXPECTED:${expected}.`)
//     }
//   }
// )
//

const cases = [
  { input: [1, 2, 2, 3, 4, 4, 3], expected: true },
  { input:[1,2,2,null,3,null,3], expected:false }
]

cases.forEach(
  ({ input, expected }) => {

    const tree = new BinaryTree();
    tree.buildTree(input);
    console.log("tree", tree.printTree())

    const actual = tree.isSymmetricRecursive( tree.root.left, tree.root.right );

    if (actual !== expected) {
      console.log(`FAILED TEST for INPUT:${input} with ACTUAL:${actual} but EXPECTED:${expected}`)
    } else {
      console.log(`SUCCESS TEST for INPUT:${input} with EXPECTED:${expected}`)
    }

 }
)
