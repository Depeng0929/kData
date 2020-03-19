import {Compare, ICompareFN} from "../../types";
import {defaultCompareFn, isFalse} from "../../utils";
import {Node} from "./node";


export class BinarySearchTree<T = any> {
  public root: Node | null;
  constructor(
    protected compareFn: ICompareFN = defaultCompareFn
  ) {
    this.root = null;
  }

  get min() {
    return this.minNode(this.root)?.value;
  }

  get max() {
    return this.maxNode(this.root)?.value;
  }

  public insert(value: unknown) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this.insertNode(this.root, value);
    }
  }

  public inOrder(callback: (val: unknown) => any) {
    this.inOrderNode(this.root, callback);
  }

  public preOrder(callback: (val: unknown) => any) {
    this.preOrderNode(this.root, callback);
  }

  public postOrder(callback: (val: unknown) => any) {
    this.postOrderNode(this.root, callback);
  }

  public search(val: unknown) {
    return this.searchNode(this.root, val);
  }

  public remove(val: unknown) {
    this.removeNode(this.root, val);
  }

  public clear() {
    this.root = Object.create(null);
  }

  protected removeNode(node: Node | null, val: unknown): Node | null {
    // 边界
    if (isFalse(node) || isFalse(val)) {
      return null;
    }
    // 大于
    if (this.compareFn(node.value, val) === Compare.LESSTHAN) {
      return this.removeNode(node.right, val);
    } else if(
      this.compareFn(node.value, val) === Compare.MORETHAN
    ) {
      return this.removeNode(node.left, val);
    } else {
      if (isFalse(node.right) && isFalse(node.left)) {
        node = null;
        return node;
      }

      if (isFalse(node.right)){
        node = node.left;
        return node;
      } else if (isFalse(node.left)) {
        node = node.right;
        return node;
      }

      const aux = this.minNode(node.right);
      node.value = aux!.value;
      node.right = this.removeNode(node.right, aux);
      return node;
    }
  }

  private searchNode(node: Node | null, val: unknown): boolean {
    // 边界情况
    if (isFalse(node) || isFalse(val)) { return false; }

    if (this.compareFn(node.value, val) === Compare.MORETHAN) {
      return this.searchNode(node.left, val);
    } else if (this.compareFn(node.value, val) === Compare.LESSTHAN) {
      return this.searchNode(node.right, val);
    } else {
      return true;
    }
  }


  private minNode(node: Node | null) {
    let current = node;
    while(current && current.left) {
      current = current.left;
    }

    return current;
  }

  private maxNode(node: Node | null) {
    let current = node;
    while(current && current.right) {
      current = current.right;
    }

    return current;
  }

  protected insertNode(node:Node, value: unknown) {
    if (this.compareFn(node.value, value) === Compare.LESSTHAN) {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.insertNode(node.right, value);
      }
    } else {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this.insertNode(node.left, value);
      }
    }
  }

  private inOrderNode(node:Node | null, callback: (val: unknown) => any) {
    if (node!== null) {
      this.inOrderNode(node.left, callback);
      callback(node.value);
      this.inOrderNode(node.right, callback);
    }
  }

  private preOrderNode(node:Node | null, callback: (val: unknown) => any) {
    if (node !== null) {
      callback(node.value);
      this.preOrderNode(node.left, callback);
      this.preOrderNode(node.right, callback);
    }
  }

  private postOrderNode(node:Node | null, callback: (val: unknown) => any) {
    if (node !== null) {
      this.postOrderNode(node.left, callback);
      this.postOrderNode(node.right, callback);
      callback(node.value);
    }
  }


}
