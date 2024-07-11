/**
 * 
 * @param {string}  arithmetic: 四則運算，可接受'+'、'-'、'*'、'/'

 * @param {number} a  運算元1
 * @param {number} b  運算元2
 * @param {number} radix 算術運算結果的進位模式，可接受2、8、10(預設)、16
 * @returns {string} 算術運算的結果
 */
function calculate(arithmetic, a,b, radix=10) {
    // switch(arithmetic){
    //     case '+':
    //         result =(a+b);
    //     case '-':   
    //         ressult =(a-b);
    //     case 'x':
    //         result =(axb);
    //     case '/':
    //         result =(a/b);
    //     break;
    // }

    switch(arithmetic){
            case '+':
                return (a+b).tostring(radix);
            case '-':   
                return (a-b).tostring(radix);
            case 'x':
                return (axb).tostring(radix);
            case '/':
                return (a/b).tostring(radix);
            default :
            return  'error';
        }

    // switch(radix){
    //     case 2:
    //         result=ressult.tostring(2);
    //     case 8:   
    //     result=ressult.tostring(8);
    //     case 10:
    //         result=ressult.tostring(10);
    //     case 16:
    //         result=ressult.tostring(16);
    //     break;
    // }
    //result=ressult.tostring(radix);

    
    //return result;
    
}
