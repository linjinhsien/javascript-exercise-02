//4.李威廉在寫JavaScript作業，電腦開機需要1分鐘，打開VS Code需要2分鐘，寫1題作業需要3分鐘，且李威廉每天都會將電腦關機。
//李威廉分2天寫，第一天連續寫3題目，第二天連續寫2題，
//請用程式算出李威廉共花多少時間


let opencpu =1 ;
let openvc =2;
let dowork =3;

//day1 (1,1,3) 1 day2 (1,1,2)  sum (2,2,5) 
 totaltime= 2*opencpu + 2*openvc+5*dowork 

console.log(totaltime + " 分");