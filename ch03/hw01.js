// 1.請用程式算出1天又10小時又17分又36秒，共等於幾秒;
const days = 1;
const hours = 10;
const minutes = 17;
const seconds = 36;

//sum = 1 days+ 10 hours + 17 mins

const totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;

console.log("總秒數："+totalSeconds +"秒");
