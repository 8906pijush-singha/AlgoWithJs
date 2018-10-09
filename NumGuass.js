/*************************************************************************
 * @ purpose :understanding binary search
 * @author  Pijush Singha
 * @version 1.0
 * @since 27/09/2018
 *************************************************************************/
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
function test(){
    /*
    taking input using command line arguments
    */ 
    try{
        if(isNaN(process.argv[2])) throw 'not a number'
    }catch(err){
        console.log('your command line argument is '+err);
    }
    console.log('think of a number in between 0 to '+(process.argv[2]-1));
    console.log('\nplease type y for yes and n for no..\n');
    noGuass(0,Math.floor((process.argv[2]-1)/2));
}
function noGuass(a,n)
{
    rl.question('is the number in between '+a+' to '+Math.floor(n)+' ?',function(ans){
        if(ans==='y')
        {
            /**
            *checking if the arguments have no difference
            */
            if(n-a==0)
            {
                console.log('your number is: '+n);
                rl.close();
                process.exit(0);
            }
            /*
            *calling the recurcive
            */
            noGuass(a,Math.floor((a+n)/2));
        }
        else if(ans==='n')
        {
            /*
            *checking if the arguments have no difference
            */
            if(n-a==0)
            {
                console.log('your number is: '+(n+1));
                rl.close();
                process.exit(0);
            }
            /*
            *calling the recurcive
            */
            noGuass((n+1),Math.floor((n-a)/2)+(n+1));
        }
        else
        {
            console.log('please type y for yes and n for no and try again.');
            rl.close();
        }
    })    
}
/**
 * calling the test function to start execuiting the program
 */
test();