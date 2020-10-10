// write a function to get a name and greet a message.
greet('Sudharsan')
// note this will also work if i call a function before it's defined because of the global context in js
function greet(name){
    console.log(`hello ${name}! How are you?`);
    
}
greet('Sudharsan')


// return - returns something when this function is called.
function getGreeting(name)
{
    return `hello ${name}!`;
}

var greetingMessage = getGreeting('sudha');
console.log(greetingMessage);

console.log(getGreeting('s'));
