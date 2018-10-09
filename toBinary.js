/*************************************************************************
 * @ purpose :converting decimal to binary in js 
 * @author  Pijush Singha
 * @version 1.0
 * @since 01/10/2018
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
    rl.question('enter your number: ',function(no){
        try{
            if(isNaN(no))throw 'not a number'
            console.log("binary representation of the inserted no is "+utility.toBinary(no));
            rl.close();
        }
        catch(err){
            console.log('the input is '+err);
            rl.close();
        }
    })
}
/**
 * calling the test function to start execuiting the program
 */
test();