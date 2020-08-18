import { BinarySearchTree, TreeNode } from "../../structures/binarySearchTree";

function closestValue(root: TreeNode | null, target: number): number {
  if (root === null) {
    return -1;
  }
  let closest: number = root.val;

  while (root !== null) {
    closest =
      Math.abs(root.val - target) < Math.abs(closest - target)
        ? root.val
        : closest;
    root = target < root.val ? root.left : root.right;
  }

  return closest;
}

// Test
import { expect } from "chai";

describe("closestValue", () => {
  it("can find closest value", () => {
    let tree: BinarySearchTree = new BinarySearchTree([4, 2, 5, 1, 3]);

    let val = closestValue(tree.root, 3.714286);

    expect(val).to.equal(4);
  });
  it("can find closest value in sigle node tree", () => {
    let tree: BinarySearchTree = new BinarySearchTree([2147483647]);

    let val = closestValue(tree.root, 0.0);

    expect(val).to.equal(2147483647);
  });
});
