export interface IStack {
  size: number;
  push: (element: any) => void;
  pop: (element: any) => any;
  peek: (element: any) => any;
  isEmpty: () => boolean;
  clear: () => void;
}

export interface IQueue {
  size: number;
  enqueue: (element: any) => void;
  dequeue: () => any;
  peek: () => any;
  isEmpty: () => boolean;
}

export interface IDeque {
  size: number;
  addFront: (element: any) => void;
  addBack:(element: any) => void;
  removeFront: () => any;
  removeBack: () => any;
  peekFront: () => any;
  peekBack: () => any;
}
