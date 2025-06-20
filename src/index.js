import { sumArray } from './problems/arrayTasks.js';
//import { maxSubArray} from './problems/maxSubArray.js'   //Максимальная сумма подмассива
import { maxSubArrayConsole } from './problems/maxSubArrayConsole.js';


// Примеры вывода
const numbers = [1, -8, 3, 4, -1, 2, 1, -5, 4];

console.log('Сумма массива:', sumArray(numbers));
//console.log('Максимальная сумма подмассива:', maxSubArray(numbers));
maxSubArrayConsole(numbers);