import {Compare, Fasely} from "../types";

export function defaultTOString(item: unknown) {
  if (item === null) {
    return 'NULL';
  } else if(item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return JSON.stringify(item);
}

export function defaultCompareFn(a: any, b: any): Compare {
  if (a === b) {
    return Compare.EQUAL;
  }
  return a > b ? Compare.MORETHAN : Compare.LESSTHAN;
}

export function isFalse(val: unknown): val is Fasely {
  return val === null || val === undefined;
}

export function deepClone(val: any) {
  if (typeof val !== "object") {
    return val;
  }

  const result: any = Array.isArray(val) ? [] : Object.create(null);
  for (let key in val) {
    result[key] = deepClone(val[key]);
  }
  return result;
}

export function equal(a: unknown, b: unknown) {
  return a === b;
}
