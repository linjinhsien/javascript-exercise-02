/** 9.請定義函式filter，說明如下

*功能: 過濾陣列元素，並回傳新陣列，內含通過過濾的元素
參數
*@param {Array} array : 欲被過濾的陣列。此陣列應保持原有的元素，不可異動！
 提示: 因陣列屬於物件型態，會以call by reference方式傳遞，所以不可異動到參數array的內容，否則會影響到呼叫端的陣列！
*@param {Fuction}  callback: 回呼函式，用以表示過濾陣列元素的條件，回傳true表示元素留下；false表示元素捨棄
@returns {Array} 新陣列，內含通過過濾的元素回傳: 新陣列，內含通過過濾的元素
 */
function filter(arry,callback) {
    const resultArray = [];
    for (let e of array) {
        if (callback(e)) {
            resultArray[resultArray.length] = e;
        }
    }
    return resultArray;
}

const array = [5, -3, 2, 21, 4,67];
console.log(filter(array,  e => e % 5===2));