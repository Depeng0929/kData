import { LinkList } from "./index";
import { DoublyNode } from "./node";

export class DoublyLinkList<T = any> extends LinkList<T> {
  public tail: DoublyNode | undefined;
  public head: DoublyNode | undefined;
  constructor() {
    super();
    this.tail = undefined;
  }

  public insert(element: T, index: number) {
    if (index > this.size || index < 0) {
      return;
    }

    let current = this.head;
    const node = new DoublyNode(element);
    if (index === 0) {
      this.head = node;
      this.tail = node;
    } else if (index === this.size) {
      current = this.tail;
      current!.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const prev = this.getElementAt(index - 1) as DoublyNode;
      current = prev!.next;
      node.next = current;
      prev!.next = node;
      current!.prev = node;
    }
    this.count++;

    return true;
  }

  public removeAt(index: number): T | undefined {
    if (index > this.size || index < 0) {
      return;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current!.next;
      if (this.size === 1) {
        this.tail = undefined;
      } else {
        this.head!.prev = undefined;
      }
    } else if (index === this.size - 1) {
      current = this.tail;
      this.tail = current!.prev;
      this.tail!.next = undefined;
    } else {
      current = this.getElementAt(index) as DoublyNode;
      const prev = current.prev;
      prev!.next = current.next;
      current.next!.prev = prev;
    }
    this.count--;
  }
}
