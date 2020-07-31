export class Node<T = unknown> {
  public element: T;
  public next: Node<T> | undefined | null;
  constructor(element: T) {
    this.element = element;
    this.next = undefined;
  }
}

export class DoublyNode<T = any> extends Node<T> {
  public prev: DoublyNode | undefined;
  public next: DoublyNode | undefined;
  constructor(element: T) {
    super(element);
    this.prev = undefined;
    this.next = undefined;
  }
}
