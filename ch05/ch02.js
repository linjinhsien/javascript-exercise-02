// //第二題 (續上題) 請印出陣列所有元素的總和、平均值
// mathrandom(i)  0<i<=9, 取5個  javascriptcode
// Generate 5 unique random integers in the range [0, 9]

let myArray = []; // 建立一個空陣列

while (myArray.length < 5) {
  let randomValue = Math.floor(Math.random() * 10); // 隨機選取 0 到 9 之間的整數
  if (!myArray.includes(randomValue)) {
    myArray.push(randomValue); // 將選取的數字加入陣列
  }
}

console.log(myArray); // 輸出隨機選取的 5 個不重複數字
//------------------------------------------------//bin
//第一題
//----------------------------------------------------------------//
// let myArray = []; // 建立一個空陣列

// for (let i = 0; i < 5; i++) {
//   let randomValue = Math.floor(Math.random() * 10); // 隨機選取 0 到 9 之間的整數
//   myArray.push(randomValue); // 將選取的數字加入陣列
// }

// console.log(myArray); // 輸出隨機選取的 5 個數字
//------------------------------------------//
let sum = myArray.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  
  let average = sum / myArray.length;
  
  console.log("陣列的總和為：" + sum);
  console.log("陣列的平均值為：" + average);