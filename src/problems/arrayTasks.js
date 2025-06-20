// 1. Сумма элементов массива
export function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
// 2. Поиск максимального элемента
export function findMax(arr) {
  return Math.max(...arr);
}

// 3. Фильтрация четных чисел
export function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}