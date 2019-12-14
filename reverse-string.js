//Implement a function that reverses a string using iteration...and then recursion!
const reverseString = str =>
  str
    .split("")
    .reverse()
    .join("");

console.log(reverseString("yoyo mastery"));
//should return: 'yretsam oyoy'

const reverseStringRecursive = str =>
  str.length
    ? str[str.length - 1] + reverseStringRecursive(str.slice(0, -1))
    : "";

console.log(reverseStringRecursive("yoyo mastery"));
//should return: 'yretsam oyoy'

const reverseStringPTCRecursive = (str, result = "") => {
  result += str[str.length - 1];
  if (str.length > 1)
    return reverseStringPTCRecursive(str.slice(0, -1), result);

  return result;
};

console.log(reverseStringPTCRecursive("yoyo mastery"));
//should return: 'yretsam oyoy'
