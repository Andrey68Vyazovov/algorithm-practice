export const findPairWithSum = (arr, target) => {
  const sorted = [...arr].sort((a, b) => a - b); // сортировка массива по возрастанию - обязательное условие алгоритма (через копию)
  
  // инициализируем указатели: left - начало массива, right - конец массива
  let left = 0;
  let right = sorted.length - 1;

  // цикл работает пока указатели не встретятся
  while (left < right) {
      const sum = sorted[left] + sorted[right];
      
      if (sum === target) {
          return [sorted[left], sorted[right]];
      } else if (sum < target) {
          left++;
      } else {
          right--;
      }
  }
  
  return null;
};