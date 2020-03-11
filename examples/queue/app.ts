import { Queue, Deque } from "../../src/kdata";


const queue = new Queue()
 console.log(queue.isEmpty())
 queue.enqueue(1)
 queue.enqueue(2)
 queue.enqueue(3)
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue)
console.log(queue.isEmpty())
console.log(`-------------------------`)
const deque = new Deque()
deque.enqueue(1)
deque.enqueue(2)
deque.enqueue(3)
deque.enqueue(4)
deque.addFront(0)
deque.addFront(-1)
deque.addBack(5)
deque.removeBack()
deque.removeFront()
// deque.addBack(5)
console.log(deque)
