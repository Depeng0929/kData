interface IQueueElement<T = any> {
  [index: number]: T
}

export class Queue<T = unknown> {
  protected items: IQueueElement<T>
  protected lowest: number
  protected count: number
  constructor() {
    this.items = {}
    this.count = 0
    this.lowest = 0
  }

  get size() {
    return this.count - this.lowest
  }

  public enqueue(element: T) {
    this.items[this.count] = element
    this.count++
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    const item = this.items[this.lowest]
    delete this.items[this.lowest]
    this.lowest++
    return item
  }

  public isEmpty() {
    return this.lowest - this.count === 0
  }

  public peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowest]
  }

  public clear() {
    this.items = {}
    this.count = 0
    this.lowest = 0
  }
}
