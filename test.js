// var test={
//     '0':{
//         '0':{
//             '0':'hello'
//         }
//     }
// }
// console.log(test[0][0][0]);
// function createFunc(){
//     var firstName='Pijush';// closure variable
//     var lastName='Singha';// closure variable
//     var returnObj={
//         getFirstName:function(){
//             return firstName;
//         },
//         getLastName:function (){
//             return lastName;
//         }
//     };
//     return returnObj;
// }
// var person=createFunc();
// console.log(person.getFirstName());
var utility1=require('./Utility/utility1');
var b='as jb f j kbf';
var a=[-20, -19, -2, 45, 96, 100, 145, 200, 234, 1234 ];
console.log(utility1.insertionSortStr(b));
console.log(utility1.bubbleSortStr(b));
console.log(utility1.binarySearchNum(a,34));
/*

//promise code, i will try leter


var firstPromise=function(){
    return new Promise(function(resolve,reject){
    resolve(test());
})}

                        function first(){
                            console.log('bubble sort for number : '+utility.bubbleSortNum(intArr));

                        }
                        function second(){
                        console.log('bubble sort for String: '+utility.bubbleSortStr(str));
                            
                        }
                        function third(){
                        console.log('binary search for String: '+utility.binarySearchStr(str,SearchedStr));
                            
                        }
                        function fourth(){
                        console.log('binary search for number: '+utility.binarySearchNum(intArr,parseInt(SearchedNo)));
                            
                        }
                        function fifth(){
                        console.log('insertion sort  for string: '+utility.insertionSortStr(str));
                            
                        }
                        function sixth(){
                        console.log('insertion sort for number: '+utility.insertionSortNum(intArr));
                            
                        }
                        firstPromise().then(second).then(fourth).then(fifth).then(sixth);*/