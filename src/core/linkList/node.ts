export class Node<T = any> {
  public value: T;
  public next: Node | undefined;
  constructor(value: T) {
    this.value = value;
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
