//1.1.有1個正整數n，並印出1~n之內，3的倍數和4的倍數的總和
const n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 4 === 0) {
        sum += i;
    }
}

console.log("3的倍數和4的倍數的總和為："+sum);