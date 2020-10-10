// Global context and execution context

greet('sudharsan');

function greet(name){
    console.log(`hello ${name}!`);
}

// The total javascript code is inside a global context and the function is registered in 
// the global context, so even when i call the function before the declaration it works as it is all
// ready registered in gloabl context.


// In browser 'window' is the global context