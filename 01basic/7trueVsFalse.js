// Below are falsly values
// undefined
// null
// ''
// 0
// false
// NaN // NaN- not an number 

if(undefined && null && '' && 0 && false && NaN){
}
else{
    console.log("everything is falsy values undefined, null, '', 0, false and NaN ");
    
}

// number vs string - type coercion
if (2 == '2'){
    console.log('"=="-loosely checks the 2 and "2" not the data type only values');
    
}

if (2 === '2'){
    console.log('=== also checks the data type');
    console.log(2+'2');
    // js gives 22 as output
}

function tipper(amount){
    return `the tip amount is ${amount+5}`;
}

var getTips = tipper(200)
console.log(getTips);


var getTips = tipper('200')
console.log(getTips);

// parseInt() - will convert string to int similarly there is also parseFloat
var getTips = tipper(parseInt('200'))
console.log(getTips);
