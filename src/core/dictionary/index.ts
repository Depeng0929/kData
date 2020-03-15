import {defaultTOString} from "../../utils";
import {VlauePair} from "./vlauePair";

interface IDictionary {
  [key: string]: VlauePair;
}

export class Dictionary<T = any> {
  public tables: IDictionary;
  constructor(
    public toStrFn: (item: unknown) => string = defaultTOString
  ) {
    this.tables = Object.create(null);
  }


  private get keyValues() {
    return Object.values(this.tables);
  }
  get keys() {
    return this.keyValues.map(valuePair => valuePair.key);
  }
  get values() {
    return this.keyValues.map(valuePair => valuePair.value);
  }
  get size() {
    return Object.keys(this.tables).length;
  }


  public set(key: unknown, value: T) {
    if (key !== null && value !== null) {
      const tableKey = this.toStrFn(key);
      this.tables[tableKey] = new VlauePair(key, value);
    }
  }

  public get(key: unknown) {
    const valuePair = this.tables[this.toStrFn(key)];
    return valuePair === null ? undefined : valuePair.value;
  }

  public hasKey(key: unknown) {
    return this.tables[this.toStrFn(key)] !== null;
  }

  public remove(key: unknown) {
    if (this.hasKey(key)) {
      delete this.tables[this.toStrFn(key)];
    }
  }

  public forEach(callback: (key: unknown, value: unknown) => any) {
    for (let i = 0; i < this.keyValues.length; i++) {
      const result = callback(this.keyValues[i].key, this.keyValues[i].value);
      if (result === false){
        break;
      }
    }
  }

  public isEmpty() {
    return this.size === 0;
  }

  public clear() {
    this.tables = Object.create(null);
  }


}
