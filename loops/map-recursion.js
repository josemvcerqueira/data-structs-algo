const data = [1, 2, 3, 4, 5, 6];

const inc = (x, i, arr) => x + 1;

const map = (arr, fn, i = 0, originalArr = [...arr]) =>
  arr.length
    ? [fn(arr[0], i, originalArr)].concat(
        map(arr.slice(1), fn, i + 1, originalArr)
      )
    : [];

const incArr = map(data, inc);
console.log(incArr);
