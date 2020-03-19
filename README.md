# kdata

## Example

### Stack

* `size`: 栈的长度
* `push(element: any)`: 入栈
* `pop()`: 删除栈中第一个元素
* `peek()`: 返回栈中第一个元素
* `isEmpty()`: 栈是否为空
* `clear()`: 清除栈中所有元素



### Queue

* `size`: 队列长度
* `enqueue(element: any)`: 尾部添加
* `dequeue()`: 头部删除
* `peek()`: 返回队列中第一个
* `clear()`: 清除队列

#### deque(TODO: 继承?)

* `addFront(element: any)`: 头部添加
* `addBack(element: any)`: 尾部添加
* `removeBack()`: 尾部删除
* `removeFront()`: 头部删除
* `peekFront()`: 获取队列中第一个元素
* `peekBack()`: 获取队列中最后一个元素



### LinkList(TODO: 返回node?element为对象)

* `push(element: any)`: 尾部添加
* `insert(element: any, index: number)`:在`index`处插入
*  `removeAt(index: number)`: 移除`index`处元素
* `getElementAt(index: number): Node`: 获取`index`处元素
* `indexOf(element: any)`: 返回元素的索引
* `remove(element: any)`: 移除值为element的元素.
* `isEmpty()`: 判断元素是否为空
* `getHead(): Node`: 返回头部节点



### KSet

* `size`: 长度
* `has(element: any)`: 集合中是否存在`element`.
* `add(element: any)`: 添加
* `delete(element: any)`: 删除
* `clear()`: 清除
* `values():any[]`: 返回`值`的数组
* `union(Kset)`:  并集
*  `intersection(Kset)`: 并集
* `difference(Kset)`: 差集



### HashMap

* `set(key, value)`: 添加
* `get(key)`: 获取



















