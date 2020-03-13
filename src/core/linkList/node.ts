export class Node {
  public value: any
  public next: Node | undefined
  constructor(value: any) {
    this.value = value
    this.next = undefined
  }
}
