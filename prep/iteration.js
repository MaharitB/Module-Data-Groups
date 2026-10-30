function calculateMean(list) {
  let total = 0;
  for (const item of list) {
    total += item;
  }
  return total;
}
console.log(calculateMean([10, 20, 30, 40]));
