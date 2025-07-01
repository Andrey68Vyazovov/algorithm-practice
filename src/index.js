// алгоритм максимальной суммы подмассива
//import { maxSubArray} from './problems/maxSubArray.js' 
//const numbers = [1, -8, 3, 4, -1, 2, 1, -5, 4];
//console.log('Максимальная сумма подмассива:', maxSubArray(numbers));

// алгоритм поиска пары чисел для полуения целевой суммы
//import {findPairWithSum} from './problems/findPairWithSum.js';
//console.log('Пара:', findPairWithSum([1, 4, -5, 15, 8], 10));

// алгоритм максимальной суммы прибыли на акциях
//import { maxProfit } from './problems/maxProfit.js';
//console.log("Максимальная прибыль:", maxProfit([7,1,5,3,6,4]));

// алгоритм поиска палиндрома наибольшей длины
//import { longestPalindrome } from "./problems/longestPalindrome.js";
//const s = "мама мыла раму";
//console.log("Максимальный палиндром:", longestPalindrome(s));

// зигзагообразное преобразование
//import { zigzagConvert } from "./problems/zigzagConvert.js";
//const s = "PAYPALISHIRING";
//console.log(zigzagConvert(s, 3));

// поиск двух чисел в массиве по их общей сумме с использованием map(АНАЛОГ findPairWithSum)
import { twoSum } from "./problems/findPairWithSumMap.js";
const nums = [3,5,6,2,4,7];
console.log("Пара:", twoSum(nums, 12));