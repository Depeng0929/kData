export class Node {
  public value: any
  public next: Node | undefined
  constructor(value: any) {
    this.value = value
    this.next = undefined
  }
}

export class DoublyNode extends Node {
  public prev: DoublyNode | undefined
  public next: DoublyNode | undefined
  constructor(element: any) {
    super(element)
    this.prev = undefined
    this.next = undefined
  }
}
