// //第五題
// mathrandom(i)  0<i<=9, 取5個  javascriptcode
// Generate 5 unique random integers in the range [0, 9]
// 請宣告一個二維陣列，並用巢狀for迴圈將值放入陣列內。結果如下..

[
    [ 18, 27, 36, 45, 54, 63, 72, 81 ],
    [ 16, 24, 32, 40, 48, 56, 64 ],
    [ 14, 21, 28, 35, 42, 49 ],
    [ 12, 18, 24, 30, 36 ],
    [ 10, 15, 20, 25 ],
    [ 8, 12, 16 ],
    [ 6, 9 ],
    [ 4 ]
]

//------------------------------------------------//bin
const resultArray = [];
for (let i = 9; i >= 2; i--) {
    const innerArray = [];
    for (let j = 2; j <= i; j++) {
        innerArray.push(i * j);
    }
    resultArray.push(innerArray);
}

console.log(resultArray);
