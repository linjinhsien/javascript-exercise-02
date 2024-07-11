//2.請用程式算出93784秒，是幾天又幾小時又幾分又幾秒
const ts = 93784;
const dt=86400;
const ht=3600;
const mt= 60;


//const totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;

const days = Math.trunc( ts/dt);
const rdt=ts-dt;
const hours = Math.trunc(rdt/ht);
const rht= rdt-hours*ht;
const minutes = Math.trunc(rht/mt);
rmt= rht-minutes*mt;
const seconds = rmt;
// const days = Math.floor(totalSeconds / secondsInDay);
// const remainingSecondsAfterDays = totalSeconds - days * secondsInDay;

// const hours = Math.floor(remainingSecondsAfterDays / secondsInHour);
// const remainingSecondsAfterHours = remainingSecondsAfterDays - hours * secondsInHour;

// const minutes = Math.floor(remainingSecondsAfterHours / secondsInMinute);
// const remainingSeconds = remainingSecondsAfterHours - minutes * secondsInMinute;

 console.log(days+'天'+hours+'時'+minutes+'分'+seconds+'秒');
