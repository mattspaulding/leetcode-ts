function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry: number = 0;
  let head: ListNode = new ListNode(0);
  let current: ListNode = head;
  while (true) {
    if (l1 === null && l2 === null) {
      if (carry) {
        current.next = new ListNode(1);
      }
      return head.next;
    }
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
}

// Test
import { expect } from "chai";
import { ListNode, LinkedList } from "../../structures/LinkedList";

describe("2. Add Two Numbers", () => {
  it("can add", () => {
    let l1 = new LinkedList([2, 4, 3]);
    let l2 = new LinkedList([5, 6, 4]);
    let l3 = new LinkedList([7, 0, 8]);

    let result = addTwoNumbers(l1.head, l2.head);

    expect(JSON.stringify(result)).to.equal(JSON.stringify(l3.head));
  });
  it("can add with carry over", () => {
    let l1 = new LinkedList([5]);
    let l2 = new LinkedList([5]);
    let l3 = new LinkedList([0, 1]);

    let result = addTwoNumbers(l1.head, l2.head);

    expect(JSON.stringify(result)).to.equal(JSON.stringify(l3.head));
  });
  it("can add different lengths", () => {
    let l1 = new LinkedList([1, 8]);
    let l2 = new LinkedList([0]);
    let l3 = new LinkedList([1, 8]);

    let result = addTwoNumbers(l1.head, l2.head);

    expect(JSON.stringify(result)).to.equal(JSON.stringify(l3.head));
  });
});
