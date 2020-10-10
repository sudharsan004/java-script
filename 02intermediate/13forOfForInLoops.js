// for of loop is used in arrays and for in loop is used in objects

var color = ['red','blue','green','yellow']

// for of loop

for (const element of color) {
    console.log(element); 
}

console.log('\n');


const Symbols = {
    fb : 'facebook',
    ig : 'instagram',
    wa : 'whatsapp'
}

for (const element in Symbols) {
    // here the element is the key it iterates through the keys of an object 
     console.log(`key is :${element} and value is :${Symbols[element]}`);
     
        
}