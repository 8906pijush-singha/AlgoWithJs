/*************************************************************************
 * @ purpose :understanding calculation on implementing Gregorian Calendar in js
 * @author  Pijush Singha
 * @version 1.0
 * @since 01/10/2018
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
     * checking the input is invalid or not
     */
    try{
        if(process.argv[2]===''||process.argv[3]===''||process.argv[4]==='') throw 'empty command line arguments.'

        if((isNaN(process.argv[2])&&process.argv[2]<=12&&process.argv[2]>0)||
        (isNaN(process.argv[3])&&process.argv[3]<=31&&process.argv[3]>0)||
        isNaN(process.argv[4])) throw 'command line arguments are not number or it is invalid.'

        if(parseInt(process.argv[2])=== 2 && parseInt(process.argv[3])>=30) throw 'it is not a valid date.'
    
        /*
        checking for leap year
        */
        var ly=(function(){
            var y=parseInt(process.argv[4]);
            if(y%400===0||(y%4===0&&y%100!==0))
                return true;
            else
                return false;
        })();
        if(parseInt(process.argv[2])=== 2 && parseInt(process.argv[3])===29 && ly===false) throw 'it is not a valid date.'
        
        if(process.argv[2]%1!==0||process.argv[3]%1!==0||process.argv[4]%1!==0) throw 'date can not be in fraction.'
        /**
         * calling the utility function
         */
        utility.gregorianCalendar(parseInt(process.argv[2]),parseInt(process.argv[3]),parseInt(process.argv[4]));

    }catch(err){
        console.log(err.toString());
    }

}
test();
