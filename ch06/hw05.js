/**
 * 
 * @param {number} type 形狀種類，0:圓形、1:矩形
 * @param {object} data 選項物件，形狀的數值
圓形時，包含屬性radius(半徑)
矩形時，包含屬性length(長)、width(寬)
 * @returns {number} 面積
 */


function calShapeArea (type,data){
    switch(type){
        case 0:
            return 3.14*data.radius*data.radius;
        case 1:
            return data.length* data.width;
        default:
            return -1;
    }
}
console.log(calShapeArea(0,{radius: 10}) )
console.log(calShapeArea(1,{length:3, width :5}) )