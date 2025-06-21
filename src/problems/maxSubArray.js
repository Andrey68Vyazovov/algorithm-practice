// 1. Максимальная сумма подмассива (алгоритм Кадане)
export const maxSubArray = (array) => {
  let maxSum = array[0],
    currentSum = array[0];
  for (let i = 1; i < array.length; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
