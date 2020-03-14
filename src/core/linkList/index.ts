import { Node } from './node'

function equal(a: any, b: any) {
  return a === b
}

export class LinkList<T = any> {
  protected head: Node | undefined
  protected count: number
  get size() {
    return this.count
  }

  constructor() {
    this.head = undefined
    this.count = 0
  }

  public push(element: T) {
    this.insert(element, this.size)
  }

  public removeAt(index: number) {
    if (index > this.count || index < 0) {
      return
    }

    let current = this.head
    if (index === 0) {
      this.head = current!.next
    } else {
      const prev = this.getElementAt(index - 1)
      current = prev!.next
      prev!.next = current!.next
    }
    this.count--

    return current!.value
  }

  public getElementAt(index: number) {
    if (index > this.count || index < 0) {
      return
    }

    let node = this.head
    for (let i = 0; i < index; i++) {
      node = node!.next
    }

    return node
  }

  public insert(element: T, index: number) {
    if (index > this.count || index < 0) {
      return
    }

    const node = new Node(element)
    let current
    if (index === 0) {
      current = this.head
      node.next = current
      this.head = node
    } else {
      const prev = this.getElementAt(index - 1)
      current = prev!.next
      prev!.next = node
      node.next = current
    }

    this.count++
  }

  public indexOf(element: T) {
    let current = this.head
    for (let i = 0; i < this.count && current; i++) {
      if (this._isEqual(element, current.value)) {
        return i
      }
      current = current!.next
    }
    return -1
  }

  public remove(element: T) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  public isEmpty() {
    return this.count === 0
  }

  public getHead() {
    return this.head
  }

  public clear() {
    this.count = 0
    this.head = undefined
  }

  private _isEqual(a: T, b: T) {
    if (typeof a === 'object') {
      return Object.is(a, b)
    } else {
      return a === b
    }
  }
}
