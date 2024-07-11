// //第三題(續上題) 請將陣列排序，若有陣列元素之值等於平均值，印出該元素的索引
// 否則，找出平均值介於哪兩個元素值之間，印出該兩個元素的索引
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

  //----------------------------------------------//
  // 排序陣列
myArray.sort(function (a, b) {
    return a - b;
  });
  
  // 尋找平均值等於某個元素值的索引
  let equalIndex = myArray.indexOf(average);
  
  if (equalIndex !== -1) {
    console.log("平均值等於某個元素值的索引：" + equalIndex);
  } else {
    // 找出平均值介於哪兩個元素值之間的索引
    let lowerIndex = 0;
    let upperIndex = myArray.length - 1;
  
    while (myArray[lowerIndex] < average) {
      lowerIndex++;
    }
  
    while (myArray[upperIndex] > average) {
      upperIndex--;
    }
  
    console.log("平均值介於元素值 " + myArray[lowerIndex] + " 和 " + myArray[upperIndex] + " 之間的索引。");
  }