import {BinarySearchTree} from "../../../src/kdata";

describe('binarySearchTree work normal', function () {
  const tree = new BinarySearchTree();
  beforeEach(function () {
    tree.insert(8);
    tree.insert(3);
    tree.insert(10);
    tree.insert(1);
    tree.insert(6);
    tree.insert(14);
    tree.insert(4);
    tree.insert(7);
    tree.insert(13);
  });
  afterEach(function () {
    tree.clear();
  });

  it('should init ok', function () {
    const result: any[] = [];
    tree.preOrder((val) => result.push(val));
    expect(result).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13]);
  });

  it('should search ok', function () {
    expect(tree.search(6)).toBeTruthy();
    expect(tree.search(20)).toBeFalsy();
  });

  it('should can find max and min', function () {
    expect(tree.max).toBe(14);
    expect(tree.min).toBe(1);
  })
});
