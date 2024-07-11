//5.請設計一程式，含有1個正整數變數n，可隨機印出一個介於1~n的整數

// 假設n為50，呼叫函式並印出結果
const n = 50;
const result = getRandomInteger(n);
console.log("隨機整數："+result);

function getRandomInteger(n) {
    // 產生介於0（包含）和1（不包含）之間的浮點數亂數

  const randomFloat = Math.random();

  // 將浮點數亂數轉換為整數，並限制在1到n之間
  const randomInteger = Math.trunc(randomFloat * n) + 1;

  return randomInteger;
}

