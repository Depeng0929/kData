import { Queue } from "./index";

export class Deque<T = any> extends Queue<T> {
  constructor(private capacity: number = 10, arr: T[] = []) {
    super(arr);
  }

  /**
   * 在双端队列前端添加元素
   * @param element
   */
  public addFront(element: T) {
    this.items.unshift(element);
  }

  /**
   * 在双端队列后端添加元素
   * @param element
   */
  public addBack(element: T) {
    this.enqueue(element);
  }

  /**
   * 移除双端队列的前端第一个
   */
  public removeFront() {
    return this.dequeue();
  }

  /**
   * 移除双端队列的后端第一个
   */
  public removeBack() {
    return this.items.pop();
  }

  /**
   * 查看双端队列的第一个
   */
  public peekFront() {
    return this.peek();
  }

  /**
   * 查看双端队列的最后一个
   */
  public peekBack() {
    return this.items[this.items.length - 1];
  }
}
