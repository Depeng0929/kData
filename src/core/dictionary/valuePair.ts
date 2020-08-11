export class ValuePair<T = unknown> {
  constructor(public key: unknown, public value: T) {}

  public toString() {
    return `[#${this.key}:${this.value}]`;
  }
}
