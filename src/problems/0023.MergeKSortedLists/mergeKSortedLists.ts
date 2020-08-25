import { LinkedList, ListNode } from "../../structures/LinkedList";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }
  if (lists.length === 1) {
    return lists[0];
  }

  for (let i: number = 0; i < lists.length; i++) {
    if (!lists[i]) {
      lists.splice(i, 1);
    }
  }
  if (lists[0] === null) {
    return null;
  }

  let head = new ListNode();
  let current = head;
  let isList: boolean = true;
  while (isList) {
    let low = Number.MAX_SAFE_INTEGER;
    for (let i: number = 0; i < lists.length; i++) {
      if (lists[i] && (lists[i]?.val || 0) < low) {
        low = lists[i]?.val || 0;
      }
    }
    for (let i: number = 0; i < lists.length; i++) {
      if (lists[i]?.val === low) {
        lists[i] = lists[i]?.next || null;
        break;
      }
    }
    for (let i: number = 0; i < lists.length; i++) {
      if (lists[i]) {
        isList = true;
        break;
      } else {
        isList = false;
      }
    }
    current.next = new ListNode(low);
    current = current.next;
  }
  return head.next;
}

// Test
import { expect } from "chai";

describe("23. Merge k Sorted Lists", () => {
  it("can merge", () => {
    const lists: Array<ListNode | null> = new Array<ListNode | null>();
    lists.push(new LinkedList([1, 4, 5]).head);
    lists.push(new LinkedList([1, 3, 4]).head);
    lists.push(new LinkedList([2, 6]).head);

    const result = new LinkedList([1, 1, 2, 3, 4, 4, 5, 6]);
    expect(mergeKLists(lists)).to.eql(result.head);
  });
  it("can merge nothing", () => {
    const lists: Array<ListNode | null> = new Array<ListNode | null>();

    expect(mergeKLists(lists)).to.eql(null);
  });
  it("can merge nothing in nothing", () => {
    const lists: Array<ListNode | null> = new Array<ListNode | null>();
    lists.push(null);
    expect(mergeKLists(lists)).to.eql(null);
  });
  it("can merge nothing in something", () => {
    const lists: Array<ListNode | null> = new Array<ListNode | null>();
    lists.push(null);
    lists.push(new LinkedList([1]).head);
    const result = new ListNode(1);
    expect(mergeKLists(lists)).to.eql(result);
  });
  it("can merge single lists", () => {
    const lists: Array<ListNode | null> = new Array<ListNode | null>();
    lists.push(new LinkedList([1]).head);
    lists.push(new LinkedList([0]).head);

    const result = new LinkedList([0, 1]);
    expect(mergeKLists(lists)).to.eql(result.head);
  });
  it("can merge empty lists", () => {
    const lists: Array<ListNode | null> = new Array<ListNode | null>();
    lists.push(new LinkedList([2]).head);
    lists.push(null);
    lists.push(new LinkedList([-1]).head);

    const result = new LinkedList([-1, 2]);
    expect(mergeKLists(lists)).to.eql(result.head);
  });
});
