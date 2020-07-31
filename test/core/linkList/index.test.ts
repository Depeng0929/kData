import { LinkList } from "../../../src/kdata";

describe("linkList is ok?", function () {
  const linkList = new LinkList();

  beforeEach(function () {
    linkList.push(1);
    linkList.push(2);
    linkList.push(3);
  });
  afterEach(function () {
    linkList.clear();
  });

  it("should init ok", function () {
    expect(linkList.size).toBe(3);
    expect(linkList.isEmpty).toBeFalsy();
  });

  it("should clear ok", function () {
    linkList.clear();
    expect(linkList.shift()).toBeNull();
    expect(linkList.size).toBe(0);
  });

  it("should get index noraml", function () {
    expect(linkList.indexOf(1)).toBe(0);
    expect(linkList.indexOf(3)).toBe(2);
  });

  it("should get element noraml", function () {
    expect(linkList.getElementAt(2)).toEqual({ element: 3, next: undefined });
  });

  it("should insert element normal", function () {
    linkList.insert(4, 2);
    expect(linkList.size).toBe(4);
    expect(linkList.indexOf(3)).toBe(3);
    expect(linkList.indexOf(4)).toBe(2);
  });

  it("should insert first normal", function () {
    linkList.insert(-1, 0);
    expect(linkList.shift()!.element).toBe(-1);
    expect(linkList.size).toBe(4);
  });

  it("should insert last normal", function () {
    linkList.insert(5, linkList.size);
    expect(linkList.size).toBe(4);
    expect(linkList.indexOf(5)).toBe(3);
  });

  it("should remove element noraml", function () {
    linkList.remove(3);
    expect(linkList.size).toBe(2);
    expect(linkList.indexOf(3)).toBe(-1);
    expect(linkList.indexOf(2)).toBe(1);
  });

  it("should removeAt first noraml", function () {
    const removeItem = linkList.removeAt(0);
    expect(removeItem).toBe(1);
    expect(linkList.shift()!.element).toBe(2);
  });
});
