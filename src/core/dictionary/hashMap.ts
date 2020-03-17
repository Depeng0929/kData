import {LinkList} from "../linkList";
import {VlauePair} from "./vlauePair";
import {defaultTOString, isFalse} from "../../utils";

interface IHashMapTable {
  [index: string]: LinkList<VlauePair>;
}

export class HashMap {
  public table: IHashMapTable;
  constructor(
    public toStrFn: (item: unknown) => string = defaultTOString
  ) {
    this.table = Object.create(null);
  }

  public set(key: unknown, value: any) {
    if(isFalse(key) || isFalse(value)) {
      return;
    }
    const strKey = this.toStrFn(key);
    const valuePair = new VlauePair(key, value);
    if (isFalse(this.table[strKey])) {
      this.table[strKey] = new LinkList<VlauePair>();
    }
    this.table[strKey].push(valuePair);
  }

  public get(key: unknown) {
    const strKey = this.toStrFn(key);
    const linklist = this.table[strKey];
    if (!isFalse(linklist)) {
      let current = linklist.getHead();
      while(current) {
        if (current.value.key === key) {
          return current.value.value;
        }
        current = current.next;
      }
    }
  }

  public remove(key: unknown) {
    const strKey = this.toStrFn(key);
    const linklist = this.table[strKey];
    if (!isFalse(linklist)) {
      let current = linklist.getHead();
      while (current) {
        if (current.value.key === key) {
          linklist.remove(current.value);
          if (linklist.isEmpty()){
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
