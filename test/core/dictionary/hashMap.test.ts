import {HashMap} from "../../../src/kdata";

describe('hashMap is ok', function () {
  const hashMap = new HashMap();
  beforeEach(function () {
    hashMap.set('kdp', '123');
    hashMap.set('kpd', '456');
    hashMap.set('kkk', '789');
  });
  afterEach(function () {
    hashMap.clear();
  });

  it('should add ok', function () {
    expect(hashMap.get('kdp')).toBe('123');
    expect(hashMap.get('kpd')).toBe('456');
  });

  it('should remove normal', function () {
    hashMap.remove('kpd');
    expect(hashMap.get('kpd')).toBeUndefined();
    expect(hashMap.get('kdp')).toBe('123');
  });
});
