export class Queue<T = any> {
  protected items: T[] = [];

  constructor(arr: T[] = []) {
    this.items = arr;
  }

  /**
   * 队列是否为空
   */
  get isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 当前队列的长度
   */
  get size() {
    return this.items.length;
  }

  /**
   * 添加队列
   * @param element
   */
  public enqueue(element: T) {
    this.items.push(element);
  }

  /**
   * 出列：删除当前队列的第一个元素
   */
  public dequeue() {
    return this.items.shift();
  }

  /**
   * 查看当前队列的第一个
   */
  public peek() {
    return this.items[0];
  }

  public clear() {
    this.items = [];
  }
}
