import { Deque } from "../../src/kdata";

// 回文检查

function palindromeCheck(aString: string) {
  if (!aString || aString.length <= 1) { return false; }

  const deque = new Deque();
  aString = aString.replace(/^\s*/g,'');

  for (let i of aString) {
    deque.addBack(i);
  }
  let isEqual = true;
  while(deque.size > 1 && isEqual) {
    const firstChar = deque.removeFront();
    const lastChar = deque.removeBack();
    console.log(firstChar, lastChar);
    if(firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log(palindromeCheck('dacad'));
