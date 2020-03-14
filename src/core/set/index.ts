interface IKset {
  [index: number]: any;
}

export class KSet {
  private items: IKset;
  constructor() {
    this.items = Object.create(null);
  }

  get size() {
    return Object.keys(this.items).length;
  }

  public has(element: any) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  public add(element: any) {
    if(!this.has(element)) {
      this.items[element] = element;
    }
  }

  public delete(element: any) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  public clear() {
    this.items = Object.create(null);
  }

  public values() {
    return Object.values(this.items);
  }

  public union(aSet: KSet) {
    const result = new KSet();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      result.add(values[i]);
    }

    values = aSet.values();
    for (let i = 0; i < values.length; i++) {
      result.add(values[i]);
    }

    return result;
  }

  public intersection(aSet: KSet)  {
    const result = new KSet();
    const values = this.values();

    values.forEach(value => {
      if (aSet.has(value)) {
        result.add(value);
      }
    });

    return result;
  }

  public difference(aSet: KSet) {
    const result = new KSet();
    this.values().forEach(value => {
      if (!aSet.has(value)) {
        result.add(value);
      }
    });
    return result;
  }
}
