import { LinkList } from "../linkList";
import { ValuePair } from "./valuePair";
import { defaultTOString, isFalse } from "../../utils";

interface IHashMapTable {
  [index: string]: LinkList<ValuePair>;
}

export class HashMap {
  public table: IHashMapTable;
  constructor(public toStrFn: (item: unknown) => string = defaultTOString) {
    this.table = Object.create(null);
  }

  public set(key: unknown, value: any) {
    if (isFalse(key) || isFalse(value)) {
      return;
    }
    const strKey = this.toStrFn(key);
    const valuePair = new ValuePair(key, value);
    if (isFalse(this.table[strKey])) {
      this.table[strKey] = new LinkList<ValuePair>();
    }
    this.table[strKey].push(valuePair);
  }

  public get(key: unknown) {
    const strKey = this.toStrFn(key);
    const linklist = this.table[strKey];
    if (!isFalse(linklist)) {
      let current = linklist.shift();
      while (current) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
  }

  public remove(key: unknown) {
    const strKey = this.toStrFn(key);
    const linklist = this.table[strKey];
    if (!isFalse(linklist)) {
      let current = linklist.shift();
      while (current) {
        if (current.element.key === key) {
          linklist.remove(current.element);
          if (linklist.isEmpty) {
            delete this.table[strKey];
          }
        }
        current = current.next;
      }
    }
  }

  public clear() {
    this.table = Object.create(null);
  }
}
