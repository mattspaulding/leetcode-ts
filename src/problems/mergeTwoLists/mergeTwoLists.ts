import { LinkedList, ListNode } from "../../structures/LinkedList";

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let prehead: ListNode = new ListNode(-1);

  let prev: ListNode = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 == null ? l2 : l1;

  return prehead.next;
}

// Test
import { expect } from "chai";

describe("mergeTwoLists", () => {
  it("can merge lists", () => {
    let l1 = new LinkedList([1, 2, 4]);
    let l2 = new LinkedList([1, 3, 4]);
    let l3 = new LinkedList([1, 1, 2, 3, 4, 4]);

    let merged = mergeTwoLists(l1.head, l2.head);

    expect(JSON.stringify(merged)).to.equal(JSON.stringify(l3.head));
  });
});
