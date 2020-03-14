import {LinkList} from "./index";
import {Node} from "./node";

export class CircularLinkList<T = any> extends LinkList<T>{
  constructor() {
    super();
  }


  public insert(element: T, index: number) {
    if (index > this.count || index < 0) {
      return;
    }

    const node = new Node(element);
    let current = this.head;
    if (index === 0) {
      if (this.head) {
        node.next = current;
        current = this.getElementAt(this.size);
        this.head = node;
        current!.next = this.head;
      } else {
        this.head = node;
        node.next = this.head;
      }

    } else {
      const prev = this.getElementAt(index - 1);
      current = prev!.next;
      prev!.next = node;
      node.next = current;
    }

    this.count++;
  }


  public removeAt(index: number): undefined | any {
    if (index > this.count || index < 0) {
      return;
    }

    let current = this.head;
    if (index === 0) {
      if (this.size === 0) {
        this.head = undefined;
      } else {
        const remove = this.head;
        current = this.getElementAt(this.size);
        this.head = this.head!.next;
        current!.next = this.head;
        current = remove;
      }
    } else {
      const prev = this.getElementAt(index - 1);
      current = prev!.next;
      prev!.next = current!.next;
    }
    this.count--;

    return current!.value;
  }
}
