import { Deque, Queue, Stack, LinkList, DoublyLinkList, CircularLinkList, KSet } from '../src/kdata';

describe('data structure is constructor', function() {
  test('stack is Function', function() {
    expect(typeof Stack).toBe('function');
  });
  test('queue is Function', function() {
    expect(typeof Queue).toBe('function');
  });
  test('deque is Function', function() {
    expect(typeof Deque).toBe('function');
  });
  test('LinkList is Function', function() {
    expect(typeof LinkList).toBe('function');
  });
  test('DoublyLinkList is Function', function() {
    expect(typeof DoublyLinkList).toBe('function');
  });
  test('CircularLinkList is Function', function() {
    expect(typeof CircularLinkList).toBe('function');
  });
  test('KSet is Function', function() {
    expect(typeof KSet).toBe('function');
  });
});
