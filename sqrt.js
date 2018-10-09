/*************************************************************************
 * @ purpose :getting square root using newtons law
 * @author  Pijush Singha
 * @version 1.0
 * @since 29/09/2018
 *************************************************************************/
/**
*utility is to require the functions of utility
*/
var utility=require('./Utility/utility');
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
    rl.question('enter the number: ',function(no){
        try{
            if(isNaN(no))throw 'the input is not a number'
            if(parseInt(no)<0) throw 'the input is negetive'
            var sqrt=utility.sqrt(no);
            console.log('the square root of the given no is '+sqrt);
            rl.close(); 
        }catch(err){
            rl.close(); 
            console.log(err);
        }
    })
}
/**
 * calling the test function to start execuiting the program
 */
test();
