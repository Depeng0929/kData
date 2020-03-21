import {BinarySearchTree} from "../../kdata";
import { Compare, ICompareFN, TreeDiff} from "../../types";
import {defaultCompareFn, isFalse} from "../../utils";
import {Node} from "./node";

export class AVLTree<T = any> extends BinarySearchTree<T> {
  public root: Node | null;
  constructor(
    public compareFn: ICompareFN = defaultCompareFn
  ) {
    super(compareFn);
    this.root = null;
  }

  public insert(value: unknown) {
    this.root = this.insertNode(this.root, value);
  }

  protected insertNode(node: Node | null, value: unknown): Node {
    if (node === null){
      return new Node(value);
    } else if (this.compareFn(node.value, value) === Compare.MORETHAN) {
      node.left = this.insertNode(node.left, value);
    } else if (this.compareFn(node.value, value) === Compare.LESSTHAN) {
      node.right = this.insertNode(node.right, value);
    } else {
      return node;
    }

    const balanceFator = this.getBlanceFactor(node);
    if(balanceFator === TreeDiff.unBlanceRight) {
      if (this.compareFn(node.right!.value, value) === Compare.LESSTHAN){
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }

    if (balanceFator ===  TreeDiff.unBlanceLeft) {
      if (this.compareFn(node.left!.value, value) === Compare.LESSTHAN){
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }

    return node;
  }

  // TODO: removeNode

  private getNodeHeight(node: Node | null):number {
    if (isFalse(node)) {
      return -1;
    }
    return Math.max(
      this.getNodeHeight(node.right),
      this.getNodeHeight(node.left)
    ) + 1;
  }

  private getBlanceFactor(node: Node): TreeDiff {
    const hightDiffer: TreeDiff = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    return hightDiffer;
  }

  private rotationLL(node: Node): Node {
    const tmp = node.left;
    node.left  = tmp!.right;
    tmp!.right = node;
    return tmp!;
  }
  private rotationRR(node: Node): Node {
    const tmp = node.right;
    node.right = tmp!.left;
    tmp!.left = node;
    return tmp!;
  }
  private rotationLR(node: Node): Node{
    node.left = this.rotationRR(node.left!);
    return this.rotationLL(node);
  }
  private rotationRL(node: Node): Node {
    node.right = this.rotationLL(node.right!);
    return this.rotationRR(node);
  }
}
