export default function cleanSet(set, startString) {
  const text = [];
  if (set instanceof Set) {
    for (const value of set) {
      if (typeof value === 'string' && value.startsWith(startString)
    && (typeof startString === 'string' && startString.length > 0)) {
        text.push(value.slice(startString.length));
      }
    }
  }
  return text.join('-');
}
