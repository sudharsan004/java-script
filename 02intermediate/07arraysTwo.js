var isEven = (number) => {
    // returns true or false
    return number % 2 === 0;
}


// just for reference ternary if else
// 5 ? console.log('hi'):console.log('h');


// if all the elements pass the test it returns true
var result = [3, 4, 5, 6].every(isEven);
console.log(result);

// arrow functions function without name
()=>{}

// in callback function if we use {} we should return something otherwise we can use ()- or just the code without {}.
var result = [2, 4, 58, 6].every((number) => ( number %2 ===0));
// var result = [2, 4, 58, 6].every((number) => {
//     return number %2 ===0;
    // (number %2 ===0) ?  console.log(true)
    //  : console.log(false);

    // if (number % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
// })

console.log(result);
