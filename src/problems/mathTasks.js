// 1. Факториал числа
export function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
// 2. Проверка на простое число
export function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}