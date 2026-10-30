import { calculateMedian } from "./median.js";
import { calculateMean } from "./mean.js";
const salaryDatasets = [[42000, 51000, 60000], [], [38000, 45000]];

//const salaries = [10, 20, 30, 40, 60, 80, 80];
//const median = calculateMedian(salaries);
//const mean = calculateMean(salaries);

//console.log(`The median salary is ${median}`);
//console.log(`The mean salary is ${mean}`);
for (const salaries of salaryDatasets) {
  try {
    const median = calculateMedian(salaries);
    console.log(`The median salary is ${median}`);
  } catch (error) {
    console.error(`Skipping a dataset: ${error.message}`);
  }
}
