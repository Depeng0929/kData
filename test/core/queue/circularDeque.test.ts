import { CircularDeque } from "../../../src/core/queue/CircularDeque";

describe("circularDeque is ok", () => {
  const circularDeque = new CircularDeque();
  beforeEach(() => {
    circularDeque.enqueue(1);
    circularDeque.enqueue(2);
  });
  afterEach(() => {
    circularDeque.clear();
  });
  test("enqueue is ok when queue is remaining", () => {
    const isInsertOk = circularDeque.enqueue(3);
    expect(isInsertOk).toBeTruthy();
    expect(circularDeque.size).toBe(3);
  });
  test("enqueue is ok when queue is fullling", () => {
    circularDeque.enqueue(3);
    const isInsertOk = circularDeque.enqueue(4);
    expect(isInsertOk).toBeFalsy();
    expect(circularDeque.size).toBe(3);
  });
  test("dequeue is ok", () => {
    circularDeque.dequeue();
    const isDeleteOk = circularDeque.dequeue();
    expect(isDeleteOk).toBeTruthy();

    const isDeleteOkWhenEmpty = circularDeque.dequeue();
    expect(isDeleteOkWhenEmpty).toBeFalsy();
  });

  test("peek is ok", () => {
    expect(circularDeque.peek()).toBe(1);

    circularDeque.dequeue();
    circularDeque.dequeue();
    expect(circularDeque.peek()).toBeUndefined();
  });
});
