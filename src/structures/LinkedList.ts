// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList {
  public head = null;
  private len = 0;

  constructor(l: number[]) {
    l.forEach((val) => this.append(val));
  }

  public append(elem) {
    let node = new ListNode(elem);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.len++;
  }

  public removeAt(pos) {
    if (pos > -1 && pos < this.len) {
      let current = this.head;
      let previous;
      let index = 0;

      if (pos === 0) {
        this.head = current.next;
      } else {
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.len--;
      return current.elem;
    } else {
      return null;
    }
  }

  public insert(elem, pos) {
    if (pos > -1 && pos < this.len) {
      let current = this.head;
      let index = 0;
      let previous;
      let node = new ListNode(elem);

      if (pos === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.len++;
      return true;
    } else {
      return false;
    }
  }

  public toString() {
    var current = this.head;
    var str = "";
    while (current) {
      str += current.elem;
      current = current.next;
    }
    return str;
  }
}
