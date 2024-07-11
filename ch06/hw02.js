/** 2.請定義函式distance，說明如下
 * 計算平面座標上，2點的距離，並回傳
 * @param {object}  p1 點1，物件型態，含有2個屬性x、y，表示水平位移量、垂直位移量

 * @param {object}} p2 同上
 * @returns {number} 算術運算的結果
 */
function distance(p1,p2) {
    const x = Math.pow(p2.x - p1.x, 2);
    const y = Math.pow(p2.y - p1.y, 2);
    return Math.sqrt(x + y);
}

console.log(distance({ x: 0, y: 0 }, { x: 12, y: 5 }));




