export class Node<T = unknown> {
  public element: T;
  public next: Node<T> | undefined | null;
  constructor(element: T) {
    this.element = element;
    this.next = undefined;
  }
}
