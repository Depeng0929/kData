import { defaultTOString, isFalse } from "../../utils";
import { ValuePair } from "./valuePair";
import has = Reflect.has;
import { debug } from "util";

interface IHashMapValues<T = unknown> {
  [key: number]: ValuePair<T>;
}

export class HashMap<T = unknown> {
  public items: IHashMapValues<T> = {};
  constructor(public toStrFn: (key: unknown) => string = defaultTOString) {}

  public get(key: unknown) {
    const position = this.djb2HashCode(key);
    if (!isFalse(this.items[position])) {
      if (this.items[position].key === key) {
        return this.items[position].value;
      }

      let index = position + 1;
      while (!isFalse(this.items[index]) && this.items[index].key !== key) {
        index++;
      }
      if (!isFalse(this.items[index]) && this.items[index].key === key) {
        return this.items[index].value;
      }
    }

    return undefined;
  }

  public remove(key: unknown) {
    const position = this.djb2HashCode(key);

    if (!isFalse(this.items[position])) {
      if (this.items[position].key === key) {
        delete this.items[position];
        this.verifyReoveSideEffect(key, position);
        return true;
      }
      let index = position + 1;
      while (!isFalse(this.items[index]) && this.items[index].key !== key) {
        index++;
      }
      if (!isFalse(this.items[index]) && this.items[index].key === key) {
        delete this.items[index];
        this.verifyReoveSideEffect(key, index);
        return true;
      }
    }

    return false;
  }

  public put(key: unknown, value: T) {
    if (!isFalse(key) && !isFalse(value)) {
      const position = this.djb2HashCode(key);
      if (isFalse(this.items[position])) {
        this.items[position] = new ValuePair<T>(key, value);
      } else {
        let index = position + 1;
        while (!isFalse(this.items[index])) {
          index++;
        }
        this.items[index] = new ValuePair<T>(key, value);
      }
    }
  }

  public clear() {
    this.items = {};
  }

  private djb2HashCode(key: unknown): number {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  private verifyReoveSideEffect(key: unknown, removePosition: number) {
    const hash = this.djb2HashCode(key);
    let index = removePosition + 1;

    while (!isFalse(this.items[index])) {
      const posHash = this.djb2HashCode(this.items[index].key);
      if (posHash <= hash || posHash <= removePosition) {
        this.items[removePosition] = this.items[index];
        delete this.items[index];
        removePosition = index;
      }
      index++;
    }
  }
}
