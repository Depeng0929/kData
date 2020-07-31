/**
 * 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。
 * https://leetcode-cn.com/problems/design-circular-queue/
 */
export class CircularDeque<T = unknown> {
  public items: T[] = [];
  public head: number = -1;
  public tail: number = -1;
  constructor(public max: number = 3) {}

  get isEmpty() {
    return this.tail === -1;
  }
  get isFull() {
    return this.head === (this.tail + 1) % this.max;
  }
  get size() {
    return this.tail - this.head + 1;
  }

  /**
   * 向循环队列插入一个元素。如果成功插入则返回真。
   * @param element
   */
  public enqueue(element: T) {
    if (this.isFull) {
      return false;
    }
    if (this.isEmpty) {
      this.head = 0;
    }

    this.tail = (this.tail + 1) % this.max;
    this.items[this.tail] = element;

    return true;
  }

  /**
   * 从循环队列中删除一个元素。如果成功删除则返回真
   */
  public dequeue() {
    if (this.isEmpty) {
      return false;
    }

    let result = this.items[this.head];
    if (this.tail === this.head) {
      this.tail = this.head = -1;
    } else {
      this.head = (this.head + 1) % this.max;
    }
    return result;
  }

  /**
   *  从队首获取元素。如果队列为空，返回 -1
   */
  public peek() {
    if (this.isEmpty) {
      return undefined;
    }
    return this.items[this.head];
  }

  public clear() {
    this.items = [];
    this.tail = -1;
    this.head = -1;
  }
}
