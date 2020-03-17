export class Node {
  public left: Node | null;
  public right: Node | null;
  constructor(
    public value: unknown
  ) {
    this.left = null;
    this.right = null;
  }
}
