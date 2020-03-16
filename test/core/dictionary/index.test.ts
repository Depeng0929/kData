import {Dictionary} from "../../../src/kdata";

describe('dictionary is ok', function () {
  const dictionary = new Dictionary();
  beforeEach(function () {
    dictionary.set('kdp', '123');
    dictionary.set('kcp', '456');
    dictionary.set('kkk', '789');
  });
  afterEach(function () {
    dictionary.clear();
  });

  it('should init ok', function () {
    expect(dictionary.size).toBe(3);
    expect(dictionary.hasKey('kkk')).toBeTruthy();
    expect(dictionary.get('kkk')).toBe('789');
  });

  it('should remove ok', function () {
    dictionary.remove('kkk');
    expect(dictionary.size).toBe(2);
    expect(dictionary.get('kkk')).toBeUndefined();
    expect(dictionary.get('kcp')).toBe('456');
  });
  it('should forEach ok', function () {
    const result: any[] = [];
    dictionary.forEach((key, val) => {
      result.push(key);
    });
    expect(result).toEqual(['kdp', 'kcp', 'kkk']);
  });
  it('should can remove all', function () {
    dictionary.forEach((key, val) => {
      dictionary.remove(key);
    });
    expect(dictionary.isEmpty()).toBeFalsy();
  });
});
