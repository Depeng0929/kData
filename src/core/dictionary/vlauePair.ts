export class VlauePair {
  constructor(
    public key: unknown,
    public value: unknown
  ) {}

  public toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}
