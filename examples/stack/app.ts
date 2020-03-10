import { Stack } from "../../src/kdata";


// 栈通常临时存储数据,例如

// 进制转换

function baseConverter(decNumber: number, base: number) {
  const stack = new Stack();
  const baseStrs = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let aNumber = decNumber;
  let rem;
  let result = '';

  if (base < 2 || base > 36) return '';

  while(aNumber > 0) {
    rem = Math.floor(aNumber %  base);
    stack.push(rem);
    aNumber = Math.floor(aNumber / base);
  }

  while(!stack.isEmpty()) {
    result += baseStrs[stack.pop()]
  }

  return result
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
