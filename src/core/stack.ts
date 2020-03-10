import {IStack} from "../types";

const items = new WeakMap();

export default class Stack implements IStack{

  constructor() {
   items.set(this, [])
  }

  get size() {
    return items.get(this).length
  }

  push     (element: any) {
   items.get(this).push(element)
  }

  pop() {
    return  items.get(this).pop();
  }

  peek() {
    const arr =  items.get(this);
    return arr[arr.length - 1]
  }

  isEmpty() {
    return this.size === 0
  }

  clear() {
    items.set(this, [])
  }

}
