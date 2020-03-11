import {IQueue} from "../types";

interface QueueElement {
  [index: number]: any;
}

export default class Queue implements IQueue{
  protected items: QueueElement;
  protected lowest: number;
  protected count: number;
  constructor() {
    this.items = Object.create(null);
    this.count = 0;
    this.lowest = 0;
  }

  get size() {
    return this.count - this.lowest
  }

  enqueue(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const item = this.items[this.lowest];
    delete this.items[this.lowest];
    this.lowest++;
    return item
  }

  isEmpty() {
    return this.lowest - this.count === 0
  }

  peek() {
    return this.items[this.lowest]
  }
}
