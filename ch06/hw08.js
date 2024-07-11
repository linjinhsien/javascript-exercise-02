/** 8.請複製第7題的power函式至本題。另定義函式power2，說明如下
 * 計算平方值
 * @param {number} a 底數
 * @returns {number} 平方值
 * 提示: 請利用函式power來完成power2的功能
 */

function power2(a) {
    return  power(a,2);
}


function power(a, b) {
    return a ** b;
}

console.log(power2(6));