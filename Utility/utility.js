/*************************************************************************
 * @description :creating utility function
 * @author  Pijush Singha
 * @version 1.0
 * @since 27/09/2018
 *************************************************************************/
/**
 * @param {string} a
 * @param {string} b  
 * @returns boolean
 * this code snippet is to return whether two words are anagarm or not
 */
var isAnagram=function (a,b)
{
    var word1,word2;
    //creating corrosponding arrays using string.split() 
    word1=a.toString();
    word2=b.toString();
    var word1Arr=word1.split('');
    var word2Arr=word2.split('');
    //sorting them using Arrays.sort() to campare one by one elements
    word1Arr.sort();
    word2Arr.sort();
    if(word1Arr.length!=word2Arr.length)
        return false;
    //comparing     
    for(var i=0;i<word1Arr.length;i++)
    {
        if(word1Arr[i]!=word2Arr[i])
            return false;
    }
    return true;
}
/**
 * @returns array of prime numbers
 */
function isPrime()
{
    var primeArray=[];
//    console.log('the prime numbers are: ')
    for(var i=2;i<=1000;i++)
    {
        var prime=1;
        var j=2;
        while(j<=i/2)
        {
            if(i%j==0)
            {
                prime=0;
                break;
            }
            j++;

        }
        if(prime===1)
        {
            primeArray.push(i);
        }
    }
    return primeArray;
}
/**
 * @returns map,primeAnagram number map in between 0 to 1000
 */
var primeAnagram=function ()
{
    //var temp3=0;
    var primeAnagramMap=new Map();
    var primeArray=isPrime();
    primeArray.forEach(element => {
        for(var i=0;i<primeArray.length;i++)
        {
            if(element===primeArray[i])
                continue;
            if(isAnagram(element,primeArray[i]))
            {
            //    temp3++;
                primeAnagramMap.set(element,primeArray[i]);
                primeArray.splice(i,1);
            }

        }
        
    });
//    console.log(temp3);
    return primeAnagramMap;
}
/**
 *@return primePalindrome number map in between 0 to 1000
 */
var primePalindrome= function ()
{
    var primeArray=isPrime();
    var primePalindromeArr=[];
    primeArray.forEach(element => {
        var reverseNo=0;
        var no=element;
        while(no>0)
        {
            var temp=no%10;
            no=Math.floor(no/10);
            reverseNo=reverseNo*10+temp;
        //    console.log(reverseNo);
        }
    //    console.log(element+' '+reverseNo);

        if(element===reverseNo)
            primePalindromeArr.push(element);
        
    });
    return primePalindromeArr;
}
/**
 * 
 * @param {array} arr 
 * @return sorted array
 */
var mergeSort=function (arr)
{
    if (arr.length < 2)
        return arr;
    
    var mid=parseInt(arr.length/2);
    var l=arr.slice(0,mid);
    var r=arr.slice(mid,arr.length);
    return merge(mergeSort(l),mergeSort(r));
}
/**
 *merging of two sorted array 
 * @param {array} l 
 * @param {array} r 
 */
var merge=function (l,r)
{
    var arr=[];
    while(l.length && r.length)
    {
        if(l[0].localeCompare(r[0])<0)
            arr.push(l.shift());
        else
            arr.push(r.shift());
    }
    while(l.length)
        arr.push(l.shift());

    while(r.length)
        arr.push(r.shift());
    return arr;
}
/**
 * 
 * @param {number} P 
 * @param {number} Y 
 * @param {number} R
 * @returns {number} payment 
 */
var monthlyPayment=function (P,Y,R)
{
    var n=12*Y;
    var r=R/(12*100);
    var payment= parseFloat(P*r/((1-Math.pow((1+r),-n))));
    return payment;     
}
/**
 * 
 * @param {number} m
 */
var vendingMachine= function (m)
{
    var sum=0;
    var notes=[1,2,3,5,10,50,100,500,1000];
    var len=notes.length-1;
    notesCount(len);
    function notesCount(i)
    {
        while(i>=0)
        {
            if(m/notes[i]>=1)
            {
                var note=Math.floor(m/notes[i]);
                console.log(note+' '+notes[i]+' rupees note');
                sum=sum+note;
                m=m-(note*notes[i]);
            }
            i--;
            notesCount(i);
        }
    }
    if(m===0)
    {
        console.log('total '+sum+' notes required.');
    }
}
/**
 * 
 * @param {number} m 
 * @param {number} d 
 * @param {number} y
 *prints the day according the date   
 */
var gregorianCalendar= function (m,d,y)
{
    var y0=y-Math.floor((14-m)/12);
    var x = y0 +Math.floor(y0/4)-Math.floor(y0/100) +Math.floor(y0/400);
    var m0 =parseInt(m)+(12 * Math.floor((14-m)/12)) - 2;
    var d0 = (parseInt(d) + x + Math.floor(31*m0/12))%7;
    
    switch (d0) {
        case 0:console.log('SUNDAY');
            break;
        case 1:console.log('MONDAY');
            break;
        case 2:console.log('TUESDAY');
            break;
        case 3:console.log('WEDNESDAY');
            break;
        case 4:console.log('THURSDAY');
            break;
        case 5:console.log('FRIDAY');
            break;
        case 6:console.log('SATURDAY');
            break;
        default:console.log('your input is wrong');
            break;
    }
}
/**
 * 
 * @param {number} n
 * @returns {string} as a boolean value 
 */
var toBinary=function(n)
{
    var arr=[0,0,0,0,0,0,0,0];
    if(parseInt(n)===0)
        return arr.join().replace(/\,/g,'');
    var bi='';
    while(n>0)
    {
        bi=bi+n%2;
        n=Math.floor(n/2);
    }
    var rev="";
    var len=7;
    for(var i=0;i<bi.length;i++)
    {
        arr[len]=bi.charAt(i);
        len--;
    }
    return arr.join().replace(/\,/g,'');    
}
var changeNibbles=function (bi)
{
    var arr=bi.split('');
    var arr1=arr.splice(0,4);
    var arr2=arr.splice(0,4);
    var arr3=arr2.concat(arr1);
    return arr3.join().replace(/\,/g,'');
}
/**
 * 
 * @param {number} c
 * @returns {number} t 
 */
var sqrt=function(c)
{
    var t=c;
    var epsilon=1e-15;
    while(Math.abs(t-c/t)>epsilon*t)
    {
        t=(t+(c/t))/2;
    }
    return t;

}

module.exports={
    isAnagram,
    isPrime,
    primeAnagram,
    primePalindrome,
    mergeSort,
    merge,
    monthlyPayment,
    vendingMachine,
    gregorianCalendar,
    toBinary,
    changeNibbles,
    sqrt
} 

















































