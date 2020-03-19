export interface ICompareFN {
  (a: unknown, b: unknown):  Compare;
}

export enum Compare {
  'LESSTHAN' = -1,
  'EQUAL',
  MORETHAN,
}

export enum TreeDiff {
  unBlanceRight = -2,
  slightlyBlanceRight = -1,
  blance,
  slightlyBlanceLeft,
  unBlanceLeft
}

export type Fasely = undefined | null;
