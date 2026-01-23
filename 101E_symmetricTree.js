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
    this.left = left;
    this.right = right;
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
    this.root = input[index];
    const root = this.root;

  }

}
