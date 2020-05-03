/**
 * Takes an index (or array of indexes) and an array of values.
 * If index is an array, converts it from an array of indexes to an array of values from the values array.
 * If index is a number, returns the value from the values array at that index.
 * Made for use in wrapping Theme UI components with custom props.
 */
export default function parseResponsiveProp(index, values) {
  let val
  if (Array.isArray(index)) {
    val = index.map(x => values[x])
  } else {
    val = values[index]
  }
  return val
}
