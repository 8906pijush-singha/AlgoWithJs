/*************************************************************************
 * @ purpose :understanding calculation in js 
 * @author  Pijush Singha
 * @version 1.0
 * @since 29/09/2018
 *************************************************************************/
/**
*utility is to require the functions of utility
*/
var utility=require('./Utility/utility');
/*
*test() declaretion 
*/
function test()
{
    /**
     * checking if the inputs are invalid or not
     */
    try{
        if(process.argv[2]===''||process.argv[3]===''||process.argv[4]==='') throw 'empty.'
        if(isNaN(process.argv[2])||isNaN(process.argv[3])||isNaN(process.argv[4])) throw 'not number'

        console.log ('payment= '+utility.monthlyPayment(process.argv[2],process.argv[3],process.argv[4]));
    }catch(err){
        console.log('the command line arguments are '+err);
    }
}
/**
 * calling the test function to start execuiting the program
 */
test();