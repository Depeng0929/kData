import {Dictionary} from "../dictionary";

export class Graph {
  private vertices: any [];
  private addjList: Dictionary;
  constructor(
    public isDirected: boolean = false
  ) {
    this.vertices = [];
    this.addjList = new Dictionary();
  }

  addVertext(v: string) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.addjList.set(v, []);
    }
  }

  addEdge(v: string, w: string) {
    if (!this.addjList.get(v)) {
      this.addVertext(v);
    }

    if (!this.addjList.get(w)) {
      this.addVertext(w);
    }

    this.addjList.get(v).push(w);
  }
}
