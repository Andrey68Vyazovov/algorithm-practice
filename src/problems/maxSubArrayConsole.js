export const maxSubArrayConsole = (array) => {
    let maxSum = array[0];
    let currentSum = array[0];
    
    console.log(`Исходный массив: [${array.join(', ')}]`);
    console.log(`Инициализация: maxSum = ${maxSum}, currentSum = ${currentSum}\n`);
  
    for (let i = 1; i < array.length; i++) {
      const previousSum = currentSum;
      const newSum = previousSum + array[i];
      
      console.log(`Шаг ${i}:`);
      console.log(`  Текущий элемент array[${i}] = ${array[i]}`);
      console.log(`  Предыдущая сумма: ${previousSum}`);
      console.log(`  Новая сумма (предыдущая + текущий): ${newSum}`);
      
      currentSum = Math.max(array[i], newSum);
      maxSum = Math.max(maxSum, currentSum);
      
      console.log(`  Выбираем максимум между:`);
      console.log(`    - Начать новый подмассив: ${array[i]}`);
      console.log(`    - Продолжить предыдущий: ${newSum}`);
      console.log(`  Текущая сумма: ${currentSum}`);
      console.log(`  Максимальная сумма: ${maxSum}\n`);
    }
  
    console.log(`Финальный результат: ${maxSum}`);
    return maxSum;
  };