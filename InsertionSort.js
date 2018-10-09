/*************************************************************************
 * @ purpose :understanding insertion sort
 * @author  Pijush Singha
 * @version 1.0
 * @since 29/09/2018
 *************************************************************************/
/**
*utility is to require the functions of utility
*/
var utility=require('./Utility/utility1');
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
    rl.question('enter your String: ',function(str){
        console.log('insertion sort-->'+utility.insertionSortStr(str));
        //console.log(utility.elapsed());
        rl.close();
    })
}
/**
 * calling the test function to start execuiting the program
 */
test();