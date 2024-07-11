/**
 * 產生指定範圍的整數亂數
 * @param {number} startNum - 亂數範圍下限
 * @param {number} endNum - 亂數範圍上限
 * @returns {number} 產生的亂數
 */
function getRandom(startNum, endNum) {
    // 產生介於0（包含）和1（不包含）之間的浮點數亂數
    const randomFloat = Math.random();
  
    // 將浮點數亂數轉換為整數，並限制在startNum到endNum之間
    const randomInteger = Math.floor(randomFloat * (endNum - startNum + 1)) + startNum;
  
    return randomInteger;
  }
  
  // 假設範圍為1到50，呼叫函式並印出結果
  const start = 1;
  const end = 50;
  const result = getRandom(start, end);
  console.log("隨機整數：" + result);