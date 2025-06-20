export const maxSubArrayConsole = (array) => {
  let maxSum = array[0];
  let currentSum = array[0];
  
  const stepsTable = [];
  
  console.log(`Исходный массив: [${array.join(', ')}]\n`);
  
  for (let i = 1; i < array.length; i++) {
    const previousSum = currentSum;
    const newSum = previousSum + array[i];
    const decision = array[i] > newSum ? "Новый подмассив" : "Продолжить";
    
    currentSum = Math.max(array[i], newSum);
    maxSum = Math.max(maxSum, currentSum);
    
    stepsTable.push({
      Шаг: i,
      Элемент: array[i],
      "Предыдущая сумма": previousSum,
      "Новая сумма": newSum,
      Решение: decision,
      "Текущая сумма": currentSum,
      "Максимальная сумма": maxSum
    });
  }

  console.table(stepsTable);
  console.log(`\nФинальный результат: ${maxSum}`);
  return maxSum;
};
