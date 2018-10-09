/*************************************************************************
 * @ purpose :sorting and searching using different algo
 * @author  Pijush Singha
 * @version 1.0
 * @since 27/09/2018
 *************************************************************************/
/**
*utility is to require the functions of utility
*/
var utility1=require('./Utility/utility1');
/*
*require('readline') is used to access the readline module
*/
var read=require('readline');
/*
*readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=read.createInterface(process.stdin,process.stdout);
/**
 * global variable str and intArr to use them all over the program
 */
var str;
var intArr=[];

function test()
{ 
    /*
    to take the string from user
    */
    rl.question('enter your String: ',function(s){
        str=s;
        console.log('bubble sort for string:'+str+'==>'+utility1.bubbleSortStr(str));
        console.log('insertion sort for string:'+str+'==>',utility1.insertionSortStr(str));
        //console.log('Date1', new Date())
        /*
        to take the array from user
        */
        rl.question('enter the length of your integer array: ',function (size){
            try{
                if(isNaN(size)) throw 'not a number'
                console.log('enter the elements: ');
                recursion(size);
            }catch(err){
                console.log('the input is '+err);
                rl.close();
            }
            function recursion(size){
            if(size>0)
            {
                rl.question('',function(i){
                    try{
                        if(isNaN(i)) throw 'not a number'
                        intArr.push(parseInt(i));
                        size--;
                        recursion(size);
                    }catch(err){
                        console.log('the input is '+err);
                        rl.close();
                    }                    
                })
            }
            else
            {

                console.log('bubble sort for number:'+intArr+'==>'+utility1.bubbleSortNum(intArr));
                console.log('insertion sort for number:'+intArr+'==>',utility1.insertionSortNum(intArr));        
                //console.log('date2', new Date())
                /*
                to take the sub string that needs to be searched in the given String from user
                */
                rl.question('enter the string you want to search: ',function(a){
                    console.log('binary search for target '+a+' on string :'+str+' returns ',utility1.binarySearchStr(str,a));
                     /*
                    to take the number that needs to be searched in the given array from user
                    */
                    rl.question('enter the no you want to search: ',function(b){
                        try{
                            if(isNaN(b)) throw 'not a number'
                            console.log('binary search for target '+b+' on array :'+intArr +' returns ',utility1.binarySearchNum(intArr,b));
                        }catch(err){
                            console.log('the input is '+err);
                            // rl.close();
                        }
                        rl.close();
                        utility1.elapsed();
                        
                    })
                })                
            }
        }
        })
    })

}
/**
 * calling the test function to start execuiting the program
 */
test();
