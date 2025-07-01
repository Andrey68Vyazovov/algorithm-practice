export function zigzagConvert(s, numRows) {
  if (numRows === 1 || s.length === 0) {
    return s;
  }
  
  const result = [];
  const n = s.length;
  
  const cycleLen = 2 * numRows - 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < n; j += cycleLen) { // Итерируемся по каждому символу в строке
      result.push(s[j + i]); // Добавляем символ в результирующий массив

      // Если текущая строка не является первой или последней и не выходит за пределы строки
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
        result.push(s[j + cycleLen - i]); // Добавляем символ в результирующий массив
      }
    }
  }
  
  return result.join(""); // Преобразуем массив в строку и возвращаем результат
}