import { LinkList } from '../../../src/kdata'

describe('linkList is ok?', function() {
  const linkList = new LinkList()

  beforeEach(function() {
    linkList.push(1)
    linkList.push(2)
    linkList.push(3)
  })
  afterEach(function() {
    linkList.clear()
  })

  it('should clear ok', function() {
    linkList.clear()
    expect(linkList.getHead()).toBeUndefined()
    expect(linkList.isEmpty()).toBeTruthy()
  })

  it('should get index noraml', function() {
    expect(linkList.indexOf(1)).toBe(0)
    expect(linkList.indexOf(3)).toBe(2)
  })

  it('should get element noraml', function() {
    expect(linkList.getElementAt(2)).toEqual({ value: 3, next: undefined })
  })

  it('should init ok', function() {
    expect(linkList.size).toBe(3)
    expect(linkList.indexOf(3)).toBe(2)
  })

  it('should insert element normal', function() {
    linkList.insert(4, 2)
    expect(linkList.size).toBe(4)
    expect(linkList.indexOf(3)).toBe(3)
    expect(linkList.indexOf(4)).toBe(2)
  })

  it('should remove element noraml', function() {
    linkList.remove(3)
    expect(linkList.size).toBe(2)
    expect(linkList.indexOf(3)).toBe(-1)
    expect(linkList.indexOf(2)).toBe(1)
  })
})
