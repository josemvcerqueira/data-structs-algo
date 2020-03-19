// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

const iterativeResult = fibonacciIterative(8);
console.log(iterativeResult);

const fibonacciRecursive = n =>
  n < 2 ? n : fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);

const recursiveResult = fibonacciRecursive(8);
console.log(recursiveResult);
