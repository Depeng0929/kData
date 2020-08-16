import { defaultTOString, isFalse } from "../../utils";
import { ValuePair } from "./valuePair";

interface IDictionaryValues<T = unknown> {
  [str: string]: ValuePair<T>;
}

export class Dictionary<T = unknown> {
  private items: IDictionaryValues<T> = {};
  constructor(private toStrFn: (item: unknown) => string = defaultTOString) {}

  get size() {
    return Object.keys(this.items).length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  public hasKey(key: unknown) {
    return !isFalse(this.items[this.toStrFn(key)]);
  }

  public set(key: unknown, value: T) {
    if (!isFalse(key) && !isFalse(value)) {
      const itemKey = this.toStrFn(key);
      // XXX: why do this?
      this.items[itemKey] = new ValuePair<T>(key, value);
      return true;
    }
    return false;
  }

  public get(key: unknown): T | undefined {
    const valuePair = this.items[this.toStrFn(key)];
    return isFalse(valuePair) ? undefined : valuePair.value;
  }

  public remove(key: unknown) {
    if (this.hasKey(key)) {
      delete this.items[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  public keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  public values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  public forEach(callback: (key: unknown, value: unknown) => unknown) {
    const valuePair = this.keyValues();
    for (let i = 0; i < valuePair.length; i++) {
      const result = callback(valuePair[i].key, valuePair[i].value);
      if (result === false) {
        break;
      }
    }
  }

  public clear() {
    this.items = {};
  }

  private keyValues(): ValuePair[] {
    return Object.values(this.items);
  }
}
