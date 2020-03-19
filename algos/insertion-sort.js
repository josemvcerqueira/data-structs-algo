const insertionSort = numsArray => {
  for (let i = 1; i < numsArray.length; i++) {
    let j = i - 1;
    let temporary = numsArray[i];
    while (j >= 0 && numsArray[j] > temporary) {
      numsArray[j + 1] = numsArray[j];
      j--;
    }
    numsArray[j + 1] = temporary;
  }
  return numsArray;
};
