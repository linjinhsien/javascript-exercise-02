
// 請用迴圈印出以下內容..

// 18 27 36 45 54 63 72 81
// 16 24 32 40 48 56 64
// 14 21 28 35 42 49
// 12 18 24 30 36
// 10 15 20 25
//  8 12 16
//  6  9
//  4
 
 for  (let i=9 ;i >= 2;i--){
    let line = '';
    for  (let j=2 ;j<=i; j++) {
        const prod =i*j;
        const pad = prod < 10 ? ' ':' ';
        line = line +pad + prod+ ' ';
    }
    console.log(line)
 }

