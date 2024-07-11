
//5.請設計一程式，含有2個正整數變數year(年)、month(月)，印出該年該月有幾天
// :exclamation: *註: 需考慮閏年
// :link: https://zh.wikipedia.org/wiki/闰年

// const year = parseInt(prompt("請輸入年份："));
// const month = parseInt(prompt("請輸入月份："));

const year = 2035;
const month = 2;

if (month < 1 || month > 12) {
    console.error("月份必須介於 1 到 12 之間。");
} else {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    switch (month) {
        case 2:
            console.log(year + "年" + month + "月有 " + (isLeapYear ? 29 : 28) + " 天。");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(year + "年" + month + "月有 30 天。");
            break;
        default:
            console.log(year + "年" + month + "月有 31 天。");
            break;
    }
}