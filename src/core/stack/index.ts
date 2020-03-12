const items = new WeakMap();

export class Stack<T = unknown> {
  constructor() {
    items.set(this, []);
  }

  get size() {
    return items.get(this).length;
  }

  public push(element: T) {
    items.get(this).push(element);
  }

  public pop(): T | undefined {
    return items.get(this).pop();
  }

  public peek(): T | undefined {
    const arr = items.get(this);
    return arr[arr.length - 1];
  }

  public isEmpty() {
    return this.size === 0;
  }

  public clear() {
    items.set(this, []);
  }
}
