import {CircularLinkList} from "../../../src/kdata";

describe('circlualrLinkList is ok', function () {
  const circularLinkList = new CircularLinkList()
  beforeEach(function () {
    circularLinkList.push(1);
    circularLinkList.push(2);
    circularLinkList.push(3);
  });
  afterEach(function () {
    circularLinkList.clear();
  });

  it('should init ok', function () {
    expect(circularLinkList.size).toBe(3);
    expect(circularLinkList.getHead()!.value).toBe(1);
  });

  it('should insert noraml', function () {
    circularLinkList.insert(2.5, 2);
    expect(circularLinkList.indexOf(2)).toBe(1);
    expect(circularLinkList.indexOf(3)).toBe(3);
    expect(circularLinkList.size).toBe(4);
  });
});
