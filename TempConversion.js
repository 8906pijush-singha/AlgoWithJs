/*************************************************************************
 * @ purpose :implementing temperature conversion and switch case in js
 * @author  Pijush Singha
 * @version 1.0
 * @since 29/09/2018
 *************************************************************************/
/*
*require('readline') is used to access the readline module
*/
var read=require('readline');
/*
*readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=read.createInterface(process.stdin,process.stdout);
/*
*test() declaretion 
*/
function test()
{
    console.log('............temp conversion.............');
    rl.question('enter "1" for f to c\nand "2" for c to f.\n',function(x){
        switch (parseInt(x)) {
            case 1:rl.question('enter the temperature in fahrenheit ',function(f){
                try{
                    if(f==='') throw 'empty.'
                    if(isNaN(f)) throw 'not a number.'
                    console.log('temp in celsius= '+parseFloat((f-32)*5/9));
                    rl.close();
                }catch(err)
                {
                    console.log('the input is '+err);
                    rl.close();
                }
                
            })
                break;
            case 2:rl.question('enter the temperature in celsius ',function(c){
                try{
                    if(c==='') throw 'empty.'
                    if(isNaN(c)) throw 'not a number.'
                    console.log('temp in fahrenheit= '+parseFloat((c*9/5)+32));
                    rl.close();
                }catch(err)
                {
                    console.log('the input is '+err);
                    rl.close();
                }
            })
                break;
            default:console.log('please insert a valid input');
                    rl.close();
                    break;
        }
    })
}
/**
 * calling the test function to start execuiting the program
 */
test();