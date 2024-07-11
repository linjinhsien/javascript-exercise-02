/**
 * 計算 N 個整數的加法或乘法運算，並依指定的進位模式回傳計算結果
 *
 * @param {string} arithmetic 運算符，只接受 '+' 或 '*'
 * @param {Array[]} nums 運算元陣列
 * @param {number} radix 進位模式，可接受 2、8、10（預設）、16
 * @returns {string} 算術運算的結果
 */
function calculate2(arithmetic,nums, radix=10) {

  switch(arithmetic){
          case '+': let sum=0;
            for (let num of nums) {
            sum=sum+num;
            
          }   
              return sum.toString(radix);
          
          case '*':let prod=1;
          for (let num of nums) {

            prod=prod*num;
              
            }
            return prod.toString(radix);
          default :
          return  'error';
      }
}

console.log(calculate2('*',[2, 3, 4],2)); // 預期結果：24
