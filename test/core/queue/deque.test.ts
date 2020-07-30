import { Deque } from "../../../src/core/queue/Deque";

describe("deque is ok", function () {
  const deque = new Deque();
  beforeEach(function () {
    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    deque.addBack(4);
  });
  afterEach(function () {
    deque.clear();
  });

  test("addBack and clear is ok", function () {
    expect(deque.size).toBe(4);
  });
  test("removeBack and peekBack is ok", function () {
    const item = deque.removeBack();
    expect(item).toBe(4);
    expect(deque.peekBack()).toBe(3);
    expect(deque.size).toBe(3);
  });
  test("addFront and peekFront is ok", function () {
    deque.addFront(0);
    expect(deque.peekFront()).toBe(0);
  });
  test("removeFront is ok?", function () {
    const item = deque.removeFront();
    expect(item).toBe(1);
    expect(deque.size).toBe(3);
  });
});
