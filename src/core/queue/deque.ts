import Queue from './index'
import { IDeque } from '../../types'

export default class Deque extends Queue implements IDeque {
  constructor() {
    super()
  }

  addFront(element: any) {
    if (this.isEmpty()) {
      this.addBack(element)
      return
    }

    if (this.lowest === 0) {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowest = 0
      this.items[0] = element
      return
    }

    this.lowest--
    this.items[this.lowest] = element
  }

  addBack(element: any) {
    this.items[this.count] = element
    this.count++
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const item = this.items[this.count]
    delete this.items[this.count]
    return item
  }

  removeFront() {
    return super.dequeue()
  }

  peekFront() {
    return this.items[this.lowest]
  }

  peekBack() {
    return this.items[this.count - 1]
  }
}
