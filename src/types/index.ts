export interface ICompareFN {
  (a: unknown, b: unknown):  Compare;
}

export enum Compare {
  'LESSTHAN' = -1,
  'EQUAL',
  MORETHAN,
}

export type Fasely = undefined | null;
