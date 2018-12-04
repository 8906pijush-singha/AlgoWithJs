/*************************************************************************
 * @ purpose :reading data from text file and understanding binary search 
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
*fs is to access fs module
*/
var fs=require('fs');
/*
* synchronus and asynchronus functions are declared apart from each other
*/
function test()
{
    var data=fs.readFileSync('./data/simple.txt','utf-8');
    return data;
}
/*
*test2() declaretion 
*/
function test2()
{
    var data=test();
    var data1=data.replace(/\n/g," ");//replacing newline from the file with space
    rl.question('enter the string to be searched: ',function(s){
        var output=utility.binarySearchStr(data1,s);
        rl.close();
        if(output===true)
        {
            console.log('"'+s+'" is their in the file.');
            console.log(utility.elapsed());
        }
        else
        {
            console.log('"'+s+'" is not their in the file.');
            console.log(utility.elapsed());
        }    
    })
}
/**
 * calling the test function to start execuiting the program
 */
test2();