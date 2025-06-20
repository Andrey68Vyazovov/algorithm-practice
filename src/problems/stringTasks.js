// 1. Переворот строки
export function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 2. Проверка на палиндром
  export function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }