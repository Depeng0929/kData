import { Queue } from '../../../src/core/queue';

describe('queue is ok?', function() {
  const queue = new Queue();
  beforeEach(function() {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
  });
  afterEach(function() {
    queue.clear();
  });
  test('enqueue and size is ok?', function() {
    expect(queue.size).toBe(4);
  });

  test('clear is ok?', function() {
    queue.clear();
    expect(queue.size).toBe(0);
  });
  test('dequeue is ok', function() {
    const item = queue.dequeue();
    expect(item).toBe(1);
    expect(queue.size).toBe(3);
  });
  test('peek is ok', function() {
    const item = queue.peek();
    expect(item).toBe(1);
    expect(queue.size).toBe(4);
  });
});
