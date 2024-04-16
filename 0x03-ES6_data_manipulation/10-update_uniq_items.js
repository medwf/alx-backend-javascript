export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new TypeError('Cannot process');
  }

  return map.forEach(
    (value, key) => (value === 1
      ? map.set(key, 100)
      : map.set(key, value)),
  );
}
