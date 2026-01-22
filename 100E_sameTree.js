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

  /**
   *
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @returns {boolean}
   */
  static sameTree(p, q) {

    if (!p && !q) return true;
    if (!p && q) return false;
    if (!q && p) return false;

    return (
      (p.value === q.value) &&
      ( this.sameTree(p.left, q.left) ) &&
      ( this.sameTree(p.right, q.right) )
    )
  }

  /**
   *@param {TreeNode} p
   *@param {TreeNode} q
   */
  static sameTreeIterative(p, q) {

    if (!p && !q) return true;
    if (!p && q) return false;
    if (p && !q) return false;

    const queueP = [p]
    const queueQ = [q]

    while ( queueP.length !== 0 || queueQ.length !==0   ) {

      const valP = queueP.pop()
      const valQ = queueQ.pop()

      if (valP.value !== valQ.value) return false;

      if (valP.left && valQ.left) {
        queueP.push(valP.left)
        queueQ.push(valQ.left)
      } else if (!valP.left && !valQ.left) {
        console.log("noone")
      }  else {
        return false
      }


      if (valP.right && valQ.right) {
        queueP.push(valP.right)
        queueQ.push(valQ.right)
      } else if(!valP.right && !valQ.right) {
        console.log("noone")
      } else {
        return false
      }
    }

    return true
  }

  /**
   *@param {TreeNode} p
   *@param {TreeNode} q
   */
  static sameTreeIterativeClean(p, q) {

    if (!p && !q) return true;
    if (!p && q) return false;
    if (p && !q) return false;

    const queueP = [p]
    const queueQ = [q]

    while ( queueP.length !== 0 || queueQ.length !==0   ) {

      const valP = queueP.pop()
      const valQ = queueQ.pop()

      if (valP.value !== valQ.value) return false;

      if (valP.left && valQ.left) {
        queueP.push(valP.left)
        queueQ.push(valQ.left)
      } else if (!valP.left && !valQ.left) {
        console.log("noone")
      }  else {
        return false
      }


      if (valP.right && valQ.right) {
        queueP.push(valP.right)
        queueQ.push(valQ.right)
      } else if(!valP.right && !valQ.right) {
        console.log("noone")
      } else {
        return false
      }
    }

    return true
  }

}

cases = [
  { p: [1,2,3], q:[1,2,3], expected: true },
  { p: [1, 2], q: [1, null, 2], expected: false },
  { p: [1,2,1], q:[1,1,2], expected:false }
]

cases.forEach(
  ({ p, q, expected }) => {

    const tree1 = new BinaryTree();
    tree1.buildTree(p);

    const tree2 = new BinaryTree();
    tree2.buildTree(q);

    // const actual = BinaryTree.sameTree(tree1.root, tree2.root);
    const actual = BinaryTree.sameTreeIterative(tree1.root, tree2.root);

    if (actual !== expected) {
      console.log(`FAILED TEST for input P:${p} and Q:${q} with ACTUAL:${actual} but EXPECTED:${expected}`)
    } else {
      console.log(`SUCCESS TEST for input P:${p} and Q:${q} with EXPECTED:${expected}`)
    }

  }
)
