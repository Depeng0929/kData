import { defaultCompareFn, isFalse } from "../../utils/index";
import { Compare, Fasely } from "../../types/index";
import { Node } from "./node";

export class LinkList<T = unknown> {
  public head: Node<T> | Fasely = undefined;
  protected count: number = 0;
  constructor(public compare: (a: any, b: any) => Compare = defaultCompareFn) {}
  get size() {
    return this.count;
  }
  get isEmpty() {
    return this.count === 0;
  }

  /**
   * 返回链表中第一个元素
   */
  public shift() {
    return this.head;
  }

  /**
   * 向链表添加一个新元素
   * @param element
   */
  public push(element: T) {
    const node = new Node(element);
    if (isFalse(this.head)) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  /**
   * 向链表特定的位置插入一个新元素
   * @param element
   * @param index
   */
  public insert(element: T, index: number) {
    if (index > this.count || index < 0) {
      return false;
    }

    const node = new Node(element);
    if (index === 0) {
      const current = this.head;
      this.head = node;
      node.next = current;
    } else {
      const prev = this.getElementAt(index - 1)!;
      const current = prev.next;
      prev.next = node;
      node.next = current;
    }
    this.count++;
    return true;
  }

  /**
   * 返回链表中特定位置的元素。如果不存在，返回undefined
   * @param index
   */
  public getElementAt(index: number) {
    if (this.isEmpty) {
      return;
    }
    if (index > this.count || index < 0) {
      return;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    return current;
  }

  /**
   * 返回元素在链表中的索引
   * @param element
   */
  public indexOf(element: T) {
    if (this.isEmpty) {
      return -1;
    }

    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.compare(current!.element, element) === Compare.EQUAL) {
        return i;
      }
      current = current!.next;
    }

    return -1;
  }

  /**
   * 从链表的特定位置移除一个元素， 如果不存在，返回undefined
   * @param index
   */
  public removeAt(index: number) {
    if (index > this.count || index < 0) {
      return;
    }
    let current;
    if (index === 0) {
      current = this.head;
      this.head = current!.next;
    } else {
      const prev = this.getElementAt(index - 1)!;
      current = prev.next;
      prev.next = current!.next;
    }

    this.count--;
    return current!.element;
  }

  /**
   * 从链表中移除一个元素
   * @param element
   */
  public remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
   * 清除链表中所有元素
   */
  public clear() {
    this.head = null;
    this.count = 0;
  }

  /**
   * 对链表各个元素进行排序
   */
  public sort() {
    if (this.isEmpty || isFalse(this.head)) {
      return false;
    }

    this.recursiveSort(this.head);
  }
  private sortByOnce(begin: Node<T>, end?: Node<T>) {
    const base = begin.element;
    let pPointer = begin;
    let nPointer = begin.next;
    while (this.compare(nPointer, end) !== Compare.EQUAL && !isFalse(nPointer)) {
      if (this.compare(nPointer!.element, base) === Compare.LESSTHAN) {
        swap(pPointer.next!, nPointer!);
        pPointer = pPointer.next!;
      }
      nPointer = nPointer!.next;
    }
    swap(pPointer, begin);
    return pPointer;

    function swap(a: Node<T>, b: Node<T>) {
      const val = a.element;
      a.element = b.element;
      b.element = val;
    }
  }
  private recursiveSort(begin: Node<T>, end?: Node<T>) {
    if (this.compare(begin, end) === Compare.EQUAL || isFalse(begin)) {
      return false;
    }
    const base = this.sortByOnce(begin, end);
    this.recursiveSort(begin, base);
    this.recursiveSort(base.next!, end);
  }
}
