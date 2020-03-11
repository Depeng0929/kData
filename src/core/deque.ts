import Queue from "./queue";
import {IDeque} from "../types";

export default class Deque extends Queue implements IDeque{
  constructor() {
    super();
  }

  addFront(element: any) {
    if (this.isEmpty()) {
      this.addBack(element)
      return;
    }

    if (this.lowest === 0) {
      let  i = this.count;
      while(i > this.lowest) {
        this.items[i] = this.items[i-1];
        i--;
      }

      this.count++;
      this.items[this.lowest] = element;
      return;
    }
    this.count ++;
    this.items[this.lowest - 1] = element
  }

  addBack(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }

    const item = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return item
  }

  removeFront() {
    super.dequeue();
  }

  peekFront() {
    return this.items[this.lowest]
  }

  peekBack() {
    return this.items[this.count]
  }
}
