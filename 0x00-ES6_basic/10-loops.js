export default function appendToEachArrayValue(array, appendString) {
  const New = [];
  for (const items of array) {
    New.push(appendString + items);
  }

  return New;
}
