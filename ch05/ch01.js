// //第一題,請宣告一個陣列，並利用Math.random()產生5個範圍為0~9的整數值給每個元素，且每個值不可重複
// mathrandom(i)  0<i<=9, 取5個  javascriptcode
// Generate 5 unique random integers in the range [0, 9]

// let uniqueRandomIntegers = new Set();
// while (uniqueRandomIntegers.size < 5) {
//     let randomInt = Math.floor(Math.random() * 10);
//     uniqueRandomIntegers.add(randomInt);
// }

// // Convert the set to an array
// let myArray = Array.from(uniqueRandomIntegers);

// console.log(myArray);

// //------------------------------------------------//bin
//第一題
//----------------------------------------------------------------//
let myArray = []; // 建立一個空陣列

while (myArray.length < 5) {
  let randomValue = Math.floor(Math.random() * 10); // 隨機選取 0 到 9 之間的整數
  if (!myArray.includes(randomValue)) {
    myArray.push(randomValue); // 將選取的數字加入陣列
  }
}

console.log(myArray); // 輸出隨機選取的 5 個不重複數字