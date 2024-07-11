/**
 * 10.有一陣列如下
 *  const array = [1, 2, 3, 4, 5];
 *  請另定義函式，用來過濾array的元素，過濾條件為大於3，此函式須傳入第9題的函式filter
 *  上述函式，請使用不同語法各撰寫一次
 *      10-1. 使用定義函式語法
 *      10-2. 使用匿名函式語法
 *      10-3. 使用箭頭函式語法
 */

const array = [1, 2, 3, 4, 5];
function  callback(e) {
        return e>3}

        function filter(arry,callback) {
            const resultArray = [];
            for (let e of array) {
                if (callback(e)) {
                    resultArray[resultArray.length] = e;
                }
            }
            return resultArray;
        }
    
console.log(filter(array, callback));
console.log(filter(array, function (e) { return e > 3; }));
console.log(filter(array, e => e > 3));
