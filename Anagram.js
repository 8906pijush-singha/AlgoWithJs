/*************************************************************************
 * @ purpose :Testing anagram or not using js
 * @author  Pijush Singha
 * @version 1.0
 * @since 26/09/2018
 *************************************************************************/
/**
*utility is to require the functions of utility
*/
var utility=require('./Utility/utility');
/*
*require('readline') is used to access the readline module
*/
var readline=require('readline');
/*
*readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=readline.createInterface(process.stdin,process.stdout);
/*
*test() declaretion 
*/
function test()
{
    rl.question('enter your first word: ',function(word1){
        rl.question('enter your second word: ',function(word2){
            var a=utility.isAnagram(word1,word2);
            rl.close();
            if(a)
            console.log('the strings are anagram');
            else
            console.log('the strings are not anagram');

        })
    })
}
/**
 * calling the test function to start execuiting the program
 */
test();