import { calculateMedian } from "./median.js";

test("calculates the median of a list of odd length", () => {
  const list = [10, 20, 30, 50, 60];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutput).toEqual(targetOutput);
});

test("doesn't modify the input", () => {
  const list = [1, 2, 3];
  calculateMedian(list);

  expect(list).toEqual([1, 2, 3]); // Note that the toEqual matcher checks the values inside arrays when comparing them - it doesn't use `===` on the arrays, we know that would always evaluate to false.
});

test("calculate the median of a list of even length", () => {
  const list = [10, 20, 30, 40, 50, 60];
  const currentOutput = calculateMedian(list);
  const targetOutPut = 35;
  expect(currentOutput).toEqual(targetOutPut);
});
test("throws an error when given an empty list", () => {
  expect(() => calculateMedian([])).toThrow(
    new Error("calculateMedian requires a non-empty array")
  );
});

test("throws an error when given something that isn't an array", () => {
  expect(() => calculateMedian("banana")).toThrow(
    new Error("calculateMedian requires an array of numbers")
  );
});

test("throws an error when given an array with a non-number", () => {
  expect(() => calculateMedian(["ten", "twenty", "thirty"])).toThrow(
    new Error("calculateMedian requires an array of numbers")
  );
});

test("throws an error when given no argument", () => {
  expect(() => calculateMedian()).toThrow(
    new Error("calculateMedian requires an array of numbers")
  );
});
