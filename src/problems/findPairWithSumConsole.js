export const findPairWithSumConsole = (arr, targetSum) => {
  // Сортируем массив (обязательное условие для работы алгоритма)
  const sortedArray = [...arr].sort((a, b) => a - b);
  
  console.log(`Исходный массив: [${arr.join(', ')}]`);
  console.log(`Отсортированный массив: [${sortedArray.join(', ')}]`);
  console.log(`Целевая сумма: ${targetSum}\n`);

  let left = 0;
  let right = sortedArray.length - 1;
  let step = 1;

  const stepsTable = [];

  while (left < right) {
    const currentSum = sortedArray[left] + sortedArray[right];
    const stepInfo = {
      Шаг: step++,
      Left: `[${left}] = ${sortedArray[left]}`,
      Right: `[${right}] = ${sortedArray[right]}`,
      Сумма: currentSum,
      Действие: ''
    };

    if (currentSum === targetSum) {
      stepInfo.Действие = `Найдена пара! ${sortedArray[left]} + ${sortedArray[right]} = ${targetSum}`;
      stepsTable.push(stepInfo);
      console.table(stepsTable);
      console.log(`\nРезультат: [${sortedArray[left]}, ${sortedArray[right]}]\n`);
      return [sortedArray[left], sortedArray[right]];
    } else if (currentSum < targetSum) {
      stepInfo.Действие = `${currentSum} < ${targetSum} → двигаем LEFT вправо`;
      left++;
    } else {
      stepInfo.Действие = `${currentSum} > ${targetSum} → двигаем RIGHT влево`;
      right--;
    }

    stepsTable.push(stepInfo);
  }

  console.table(stepsTable);
  console.log('\nРезультат: Пара не найдена\n');
  return null;
};