import {KSet} from "../../../src/kdata";

describe('set is ok', function () {
  const set = new KSet();
  const aSet = new KSet();
  beforeEach(function () {
    set.add(1);
    set.add(2);
    set.add(3);

    aSet.add(2);
    aSet.add(3);
    aSet.add(4);
  });
  afterEach(function () {
    set.clear();
    aSet.clear();
  });

  it('should init ok', function () {
    expect(set.size).toBe(3);
    expect(set.has(3)).toBeTruthy();
  });
  it('should delete normal', function () {
    set.delete(2);
    expect(set.size).toBe(2);
    expect(set.has(2)).toBeFalsy();
  });
  it('should each item normal', function () {
    expect(set.values()).toEqual([1, 2, 3]);
  });

  it('should union is normal', function () {
    expect(set.union(aSet).values()).toEqual([1, 2, 3, 4]);
  });
  it('should intersection is normal', function () {
    expect(set.intersection(aSet).values()).toEqual([2, 3]);
  });
  it('should difference is normal', function () {
    expect(set.difference(aSet).values()).toEqual([1]);
  });
});
