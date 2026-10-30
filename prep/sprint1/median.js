export function calculateMedian(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMedian requires an array of numbers");
    }
    const middleIndex = Math.floor(list.length / 2);
    if (list.length % 2 === 0) {
      return (list[middleIndex - 1] + list[middleIndex]) / 2;
    }

    return list[middleIndex];
  }
}
