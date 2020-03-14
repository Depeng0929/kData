import { DoublyLinkList } from '../../../src/kdata'

describe('doublyLinkList is ok', function() {
  const doublyLinkList = new DoublyLinkList()
  beforeEach(function() {
    doublyLinkList.push(1)
    doublyLinkList.push(2)
    doublyLinkList.push(3)
    doublyLinkList.push(4)
  })
  afterEach(function() {
    doublyLinkList.clear()
  })

  it('should init ok', function() {
    expect(doublyLinkList.size).toBe(4)
    expect(doublyLinkList.getHead()!.value).toBe(1)
  })

  it('should add noramal', function() {
    doublyLinkList.insert('3.5', 4)
    expect(doublyLinkList.size).toBe(5)
    expect(doublyLinkList.getHead()!.value).toBe(1)
    expect(doublyLinkList.indexOf(3.5)).toBe(4)
  })
})
