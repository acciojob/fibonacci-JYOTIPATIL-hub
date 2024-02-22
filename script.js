function fibonacci(num) {
// your code here
	// Define a function fibonacci that takes a number as a parameter
function fibonacci(num) {
  // Declare two variables to store the previous two fibonacci numbers, initialized to 0 and 1
  let prev = 0;
  let curr = 1;

  // Declare a variable to store the current fibonacci number, initialized to 0
  let fib = 0;

  // Check if the input is 1 or 2, and return the corresponding fibonacci number
  if (num === 1) {
    return prev;
  }
  if (num === 2) {
    return curr;
  }

  // Loop from the third term to the nth term
  for (let i = 3; i <= num; i++) {
    // Calculate the current fibonacci number by adding the previous two fibonacci numbers
    fib = prev + curr;

    // Update the previous two fibonacci numbers
    prev = curr;
    curr = fib;
  }

  // Return the current fibonacci number as a number
  return fib;
}

}

module.exports = fibonacci;
