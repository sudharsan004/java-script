var name = 'sudharsan';
console.log(`line 2 ${name}`);


function sayMyName(){
    // name = 's'
    // console.log(this);
    console.log(`line 7 ${name}`);
    
    say()
    function say(){
        name = 'ss'
        console.log(`line 10 ${name}`);
        
        

    }
}
sayMyName()


// global context
console.log(this);
