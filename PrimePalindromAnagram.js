/*************************************************************************
 * @ purpose :Checking prime anagram and prime palindrome in between 0 to 1000
 * @author  Pijush Singha
 * @version 1.0
 * @since 27/09/2018
 *************************************************************************/
/*
*utility is to require the functions of utility
*/ 
var utility=require('./Utility/utility');
/**
 * util is to require the functions of util such a util.inspect() 
 * to print complecated object
 */
var util=require('util');
function test()
{
    console.log('prime anagrams are==>'+util.inspect(utility.primeAnagram(), {depth: null}));
    console.log('prime palindromes are==>'+utility.primePalindrome());    
}
test();