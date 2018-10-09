/*************************************************************************
 * @ purpose :understanding insertion sort
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
    rl.question('enter the list of strings: ',function(str){
        var str1=str.split(' ');
        console.log('merge sort-->'+utility.mergeSort(str1));
        rl.close();
    })
}
/**
 * calling the test function to start execuiting the program
 */
test();