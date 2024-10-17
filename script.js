function fibonacci(num) {
  // Handle base cases
  if (num === 0) return 0;
  if (num === 1) return 0;
  if (num === 2) return 1;

  // Initialize the first two Fibonacci numbers
  let fib1 = 0, fib2 = 1;

  // Loop to calculate the nth Fibonacci number
  for (let i = 3; i <= num; i++) {
    const fibNext = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibNext;
  }

  return fib2;
}

// Test cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3

