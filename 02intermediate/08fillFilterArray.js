var testArray =[4,3,2,523,32]

// aray.fill('fillSomething',startindex,endindex)
console.log(testArray.fill('i',0,3));

var myArray =[ 76,78,43,45,90,5,8,9]

// array.filter(callbackFn => filter condition) Returns the elements of an array that meet the condition specified in a callback function.
const result= myArray.filter((element)=> element % 5 != 0 )

console.log(result);
