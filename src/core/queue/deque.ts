import { Queue } from './index';

export class Deque<T = any> extends Queue<T> {
  constructor() {
    super();
  }

  public addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
      return;
    }

    if (this.lowest === 0) {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowest = 0;
      this.items[0] = element;
      return;
    }

    this.lowest--;
    this.items[this.lowest] = element;
  }

  public addBack(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  public removeBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const item = this.items[this.count];
    delete this.items[this.count];
    return item;
  }

  public removeFront(): T | undefined {
    return super.dequeue();
  }

  public peekFront(): T | undefined {
    return this.items[this.lowest];
  }

  public peekBack(): T | undefined {
    return this.items[this.count - 1];
  }
}
