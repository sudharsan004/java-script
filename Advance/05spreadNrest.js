// rest and spread are both the same "...args" but differs only by its usage.

// var result = Math.min(2, 3, 4, 5, 2, 2, 1, 3, 234, 4, 0);
// console.log(result);

// function addNo(a, b) {
//     return a + b;
// }
// console.log(addNo(5, 3));

// // Extra arguments will be ignored
// console.log(addNo(5, 3, 4));

// myArray = [5, 7, 8]

// // console.log(addNo(myArray));
// console.log(addNo(...myArray));//...args here is spread operator while splits the array input as seperate arguments to the function

var myobj ={}
// here the first argument does different function 
Object.assign(myobj,{name:'sudharsan',class:4},{height:170});
console.log(myobj);

// we can create similar functions by using the ...args (rest)
// The ...args will be in an array form []
function addtwo(a,b,...args){//here the first two arguments are compulsory then it can be any number of arguments
    var multiply = a*b;
    var sum = 0;
    // args is in array form
    args.forEach((arg)=>{
        sum+=arg;
    })
    return [multiply,sum]
}

console.log(addtwo(3,2,1,12,1));





