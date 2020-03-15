export function defaultTOString(item: unknown) {
  if (item === null) {
    return 'NULL';
  } else if(item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return JSON.stringify(item);
}
