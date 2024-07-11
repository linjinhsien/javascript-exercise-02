//3.請用迴圈印出以下內容..

//2 5 8 11 14 17 20 23 26 29 32
// let a0=2;
// let result = "";
// for (let i=0; i<= 10; i++)  {
//  a=  a0+3*i
//   result =a + "";
// }
// console.log(a);
let a0 = 2;
let result = "";

for (let i = 0; i <= 10; i++) {
    let a = a0 + 3 * i;
    result += a + " ";
}

console.log(result.trim());