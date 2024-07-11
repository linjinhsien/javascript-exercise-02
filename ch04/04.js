
//4.請設計一程式，含有1個正整數變數n，並印出1~n所有質數的總和
//  for  (let i=9 ;i >= 2;i--){
//     let line = '';
//     for  (let j=2 ;j<=i; j++) {
//         const prod =i*j;
//         const pad = prod < 10 ? ' ':' ';
//         line = line +pad + prod+ ' ';
//     }
//     console.log(line)
//  }
//------------------------------------//
//判斷質數 
// const n=36;

// for (let i=2; i< n; i++){
//     if (n % i===0) {
//         console.log('非質數');
//         break;
//     }
// }
//---------------------------------------//
const n= 10;
let sum= 0;
for (let i=2; i< n; i++)  {
   for(let j=2; j<i;j++){
       sum += i;
       if (i % j===0) {
           sum-= i;
           break;
       }
   }
   sum += i;
}
console.log(sum);