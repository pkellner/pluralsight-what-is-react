/**
 * Finds the nth Fibonacci number starting from 0.
 * @param {number} n - The position of the Fibonacci number to find.
 * @returns {number} The nth Fibonacci number.
 * @throws Will throw an error if the input is not a positive integer.
 */
export function nthFibonacci(n) {
  if (n < 1) throw new Error("Input must be a positive integer");

  let a = 0, b = 1, temp;

  // Continue finding Fibonacci numbers until we reach the nth one
  for (let i = 1; i < n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }

  return a;
}

/**
 * Generates a specified number of Fibonacci numbers starting from the nth index.
 * @param {number} start - The starting index (nth position) of the Fibonacci sequence.
 * @param {number} totalCnt - The total number of Fibonacci numbers to generate.
 * @returns {number[]} An array of Fibonacci numbers starting from the nth index.
 * @throws Will throw an error if the input is not a positive integer.
 */
export function generateFibonacci(start, totalCnt) {
  if (start < 0 || totalCnt < 1) throw new Error("Invalid input values");

  debugger;

  const startTime = Date.now(); // Start the timer

  const fibonacci = [];
  let a = 0, b = 1, temp;

  // Calculate all Fibonacci numbers up to the start + totalCnt
  for (let i = 0; i < start + totalCnt; i++) {
    if (i >= start) {
      fibonacci.push(a);
    }
    temp = a;
    a = b;
    b = temp + b;
  }

  const endTime = Date.now(); // End the timer
  const duration = ((endTime - startTime) / 1000).toFixed(4); // Calculate duration in seconds to 2 decimal places
  console.log(`Function execution time: ${duration} seconds`);

  return fibonacci;
}



/**
 * Finds the nth Fibonacci number using a Promise, starting from 0.
 * @param {number} n - The position of the Fibonacci number to find.
 * @returns {Promise<number>} A Promise that resolves to the nth Fibonacci number.
 */
export function nthFibonacciPromise(n) {
  return new Promise((resolve, reject) => {
    try {
      const result = nthFibonacci(n);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Generates a specified number of Fibonacci numbers starting from the nth index using a Promise.
 * @param {number} start - The starting index (nth position) of the Fibonacci sequence.
 * @param {number} totalCnt - The total number of Fibonacci numbers to generate.
 * @returns {Promise<number[]>} A Promise that resolves to an array of Fibonacci numbers starting from the nth index.
 */
export function generateFibonacciPromise(start, totalCnt) {
  return new Promise((resolve, reject) => {
    try {
      const result = generateFibonacci(start, totalCnt);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
