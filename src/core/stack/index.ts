import { deepClone } from "../../utils";

export class Stack<T = unknown> {
  private items: T[] = [];

  constructor(arr?: T[]) {
    if (arr && Array.isArray(arr)) {
      this.items = deepClone(arr);
    } else {
      this.items = [];
    }
  }

  /**
   * 是否为空
   */
  get isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 返回栈的长度
   */
  get size() {
    return this.items.length;
  }

  /**
   * 添加
   * @param element
   */
  public push(element: T) {
    this.items.push(element);
  }

  /**
   * 移除栈顶元素
   */
  public pop() {
    return this.items.pop();
  }

  /**
   * 返回栈顶
   */
  public peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * 清除栈
   */
  public clear() {
    this.items = [];
  }
}
