import { Stack } from '../../../src/kdata';

describe('stack', function() {
  let stack = new Stack();

  beforeEach(function() {
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  afterEach(function() {
    stack.clear();
  });

  test('isEmpty is ok', function() {
    expect(stack.isEmpty()).toBeFalsy();
  });
  test('size is ok', function() {
    expect(stack.size).toBe(3);
  });
  test('push is ok', function() {
    stack.push(4);
    expect(stack.size).toBe(4);
  });
  test('pop is ok', function() {
    const item = stack.pop();
    expect(stack.size).toBe(2);
    expect(item).toBe(3);
  });
  test('peek is ok', function() {
    const item = stack.pop();
    expect(stack.size).toBe(2);
    expect(item).toBe(3);
  });
  test('pop and isEmpty ok?', function() {
    for (let i = 0; i < 3; i++) {
      stack.pop();
    }
    expect(stack.size).toBe(0);
  });
});
