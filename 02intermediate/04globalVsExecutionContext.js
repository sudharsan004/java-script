// Function declarations are scanned and made available by the global context
// Variable declarations are scanned and assigned 'undefined' by the global context

// this will work fine
greet('sudharsan');

function greet(name){
    console.log(`hello ${name}!`);
}

// this will be as undefined
console.log('In line 12', day);

var day = 'monday';

console.log('In line 16', day);


// declaring a function using a variable is also assigned 'undefined' by the global context and will give an error as it is not a function.

// greetings('sudha')
var greetings = function (name){
    console.log(`hello ${name}!`);
}

greetings('sudha');
