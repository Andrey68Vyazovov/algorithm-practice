export const maxSubArrayConsole = (array) => {
  let maxSum = array[0];
  let currentSum = array[0];
  
  const stepsTable = [];
  
  console.log(`\nИсходный массив: [${array.join(', ')}]\n`);
  
  for (let i = 1; i < array.length; i++) {
    const previousSum = currentSum;
    const newSum = previousSum + array[i];
    let decision, reason;
    
    if (array[i] > newSum) {
      decision = "Новый подмассив";
      reason = `Текущий элемент (${array[i]}) > суммы предыдущих (${newSum})`;
    } else {
      decision = "Продолжить";
      reason = `Сумма продолжения (${newSum}) ≥ текущего элемента (${array[i]})`;
    }
    
    currentSum = Math.max(array[i], newSum);
    maxSum = Math.max(maxSum, currentSum);
    
    stepsTable.push({
      Шаг: i,
      Элемент: array[i],
      "Пред. сумма": previousSum,
      "Новая сумма": newSum,
      "Решение": `${decision} (${reason})`,
      "Текущая сумма": currentSum,
      "Макс. сумма": maxSum
    }); 
  }

  console.table(stepsTable);
  console.log(`\nФинальный результат: ${maxSum}\n`);
  return maxSum;
};
