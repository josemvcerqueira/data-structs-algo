// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number, counter = 1) {
  counter *= number;
  if (number > 1) return findFactorialRecursive(number - 1, counter);
  return counter;
}

function findFactorialIterative(number) {
  let answer = number;
  for (let i = 1; i < number; i++) {
    answer *= number - i;
  }
  return answer;
}

const result = findFactorialIterative(5);
const recursiveResult = findFactorialRecursive(5);
console.log(result);
console.log(recursiveResult);
