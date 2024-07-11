/**6.請定義函式request，說明如下
 * 功能: 只需將所有參數的內容印出即可
 提示: 僅"示意"HTTP協定發出請求
參數
 * @param {string} url   欲發出請求的目標網址
 * @param {object} option  選項物件，用以描述請求的細節設定，包含以下屬性
 * method: 請求方法，可接受'GET'(預設)、'POST'
*contentType: 請求內容的MIME類型，可接受'application/x-www-form-urlencoded'(預設)、'application/json')
 * @param body 請求本體，請求傳輸的資料
 */

function request(url, option) {
    console.log(`發送請求至 ${url}`);
    if (option) {
        console.log(`請求方法: ${option.method || 'GET'}`);
        console.log(`請求內容類型: ${option.contentType || 'application/x-www-form-urlencoded'}`);
        if (option.body) {
            console.log(`請求本體: ${option.body}`);
        }
    }
}

request('https://www.google.com/', {
  method: 'POST',
  contentType: 'application/json',
  body: JSON.stringify({
    name: 'John Doe',
    email: 'johndoe@example.com',
  })
})