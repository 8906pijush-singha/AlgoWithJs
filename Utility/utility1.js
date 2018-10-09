/*************************************************************************
 * @description :sorting and searching using different algo
 * @author  Pijush Singha
 * @version 1.0
 * @since 27/09/2018
 *************************************************************************/
/**
* a map taken to store the elapsed time
*/
var elapsedTime=new Map();
var a,b;
/**
 * 
 * @param {array} arr1 
 * @param {number} target
 * @returns {boolean}  
 */
var binarySearchNum = function (arr1,target)
{
    a=new Date().getMilliseconds();
    var arr=bubbleSortNum(arr1);
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) 
    {
        var m = l + Math.floor((r - l) / 2);
        if (arr[m]== target) 
        {
            b=new Date().getMilliseconds();
            console.log('elapsed time binarySearchNum : '+(b-a));
            elapsedTime.set('binarySearchNum',parseInt(b-a));
            return true;
        }
        if (arr[m] < target) 
        {
            l = m + 1;
        } else 
        {
            r = m - 1;
        }
    } 
    
    elapsedTime.set('binarySearchNum',parseInt(b-a));
    return false;
}
/**
 * 
 * @param {array} arr1 
 * @param {string} target
 * @returns {boolean} 
 */
var binarySearchStr = function(arr1,target)
{
    a=new Date().getMilliseconds();
    var arr=bubbleSortStr(arr1);
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) 
    {
        var m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) 
        {
            b=new Date().getMilliseconds();
            elapsedTime.set('binarySearchStr',parseInt(b-a));
            return true;
        }        
        else if (arr[m].localeCompare(target)<0) 
        {
            l = m + 1;
        } else 
        {
            r = m - 1;
        }
    
    }
    console.log('elapsed time binarySearchStr : '+(b-a));
    return false;
}
/**
 * 
 * @param {array} arr
 * @returns {array} arr1 (sorted one by bubble sort) 
 */
var bubbleSortNum = function (arr)
{
    a=new Date().getMilliseconds();
    var arr1=arr;
    var len = arr1.length,i, j;
    for (i=0; i < len; i++)
    {
        for (j=0; j < len-i; j++)
        {
            if (arr1[j] > arr1[j+1])
            {
                swap(arr1,j,j+1);
            }
        }
    }

    b=new Date().getMilliseconds();
    console.log('elapsed time bubbleSortNum:', (b-a));
    elapsedTime.set('bubbleSortNum',parseInt(b-a));
    //console.log('el', elapsedTime);
    return arr1;
}
/**
 * 
 * @param {array} arr
 * @returns {array} arr1 (sorted one by bubble sort) 
 */
var bubbleSortStr =function(arr)
{
    a=new Date().getMilliseconds();
    //console.log(a);
    var arr1=[];    
    arr1=arr.split(' ');
   // console.log(arr1);
    var len = arr1.length,i, j;
    for (i=0; i < len; i++)
    {
    //    console.log(arr1[i]);
        for (j=0; j < len-i; j++)
        {
            if(arr1[j].localeCompare(arr1[j+1])>0)
                swap(arr1,j,j+1);
        }
    }
    var str=arr1;//.join();//.replace(/\,/g,"");
    b=new Date().getMilliseconds();
    console.log('elapsed time bubbleSortStr: '+(b-a));
    elapsedTime.set('bubbleSortStr',parseInt(b-a));
    return str;
}

/**
 * 
 * @param {array} arr 
 * @param {number} i(index) 
 * @param {number} j (index)
 */
var swap=function (arr,i,j)
{
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    //console.log(arr);
}
/**
 * 
 * @param {array} arr 
 */
var insertionSortNum = function (arr)
{
    a=new Date().getMilliseconds();
    for(var i=1;i<arr.length;i++)
    {
        var value=arr[i];
        var j=i-1;
        while(j>=0&&arr[j]>value)
        {   
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=value;
    }
    b=new Date().getMilliseconds();
    console.log('elapsed time insertionSortNum : ',a,b,(b-a));
    elapsedTime.set('insertionSortNum',parseInt(b-a));
    return arr;
}
/**
 * 
 * @param {string} str 
 */
var insertionSortStr = function(str)
{
    a=new Date().getMilliseconds();
    var arr=str.split(' '); 
    for(var i=1;i<arr.length;i++)
    {
        var value=arr[i];
        var j=i-1;
        while(j>=0&&arr[j].localeCompare(value)>0)
        {   
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=value;
    }
    b=new Date().getMilliseconds();
    elapsedTime.set('insertionSortStr',(b-a));
    console.log('elapsed time insertionSortStr: '+parseInt(b-a));
    return arr;//.join().replace(/\,/g,"");
}
var elapsed = function()
{
    console.log('elapsed time: ');
    console.log(elapsedTime);
}
module.exports={
    bubbleSortNum,
    swap,
    binarySearchNum,
    binarySearchStr,
    insertionSortNum,
    insertionSortStr,
    bubbleSortStr,
    elapsed
}