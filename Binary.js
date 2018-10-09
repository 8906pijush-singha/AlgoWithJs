/*************************************************************************
 * @ purpose :converting decimal to binary and vice versa
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
            if(isNaN(no))throw 'the iput is not a number'
            if(parseInt(no)<0) throw 'please insert a positive number'
            var binary=utility.toBinary(no);
            var no1=utility.changeNibbles(binary);
            console.log('after changing the nibbles,the new no ='+parseInt(no1,2));
            rl.close();
        }
        catch(err){
            console.log(err);
            rl.close();
        }
    })
}
/**
 * calling the test function to start execuiting the program
 */
test();