/**
 * Finds the nth prime number.
 * @param {number} n - The position of the prime number to find.
 * @returns {number} The nth prime number.
 * @throws Will throw an error if the input is not a positive integer.
 */
export function nthPrime(n) {
  if (n < 1) throw new Error("Input must be a positive integer");

  let count = 0;
  let num = 1;

  // Continue finding prime numbers until we reach the nth one
  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }

  return num;
}

/**
 * Generates a specified number of prime numbers starting from a given number.
 * @param {number} start - The number to start checking for primes.
 * @param {number} total - The total number of primes to generate.
 * @returns {number[]} An array of prime numbers.
 */
export function generatePrimes(start, total) {
  const primes = [];
  let num = start;

  // Continue finding prime numbers until we reach the total count needed
  while (primes.length < total) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

/**
 * Finds the nth prime number using a Promise.
 * @param {number} n - The position of the prime number to find.
 * @returns {Promise<number>} A Promise that resolves to the nth prime number.
 */
export function nthPrimePromise(n) {
  return new Promise((resolve, reject) => {
    try {
      const result = nthPrime(n);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Generates a specified number of prime numbers starting from a given number using a Promise.
 * @param {number} start - The number to start checking for primes.
 * @param {number} total - The total number of primes to generate.
 * @returns {Promise<number[]>} A Promise that resolves to an array of prime numbers.
 */
export function generatePrimesPromise(start, total) {
  return new Promise((resolve, reject) => {
    try {
      const result = generatePrimes(start, total);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Checks if a number is prime. (internal function)
 * @param {number} num - The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
