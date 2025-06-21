export function maxProfit(prices) {
  let minPrice = Infinity;  // Минимальная цена для покупки
  let maxProfit = 0;       // Максимальная прибыль
  
  for (let price of prices) {
      // Обновляем минимальную цену, если текущая цена меньше
      if (price < minPrice) {
          minPrice = price;
      } 
      // Рассчитываем потенциальную прибыль и обновляем максимальную
      else if (price - minPrice > maxProfit) {
          maxProfit = price - minPrice;
      }
  }
  
  return maxProfit;
}