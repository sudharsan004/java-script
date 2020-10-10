// closure
// the firstName function returns the lastName function 
function firstName(firstname) {
    function lastName(lastname) {
        return (`Full name is ${firstname + ' ' + lastname}`)
    }
    return lastName;
}
// the returned lastName function is stored in myName variable , also the memory of the firstName context still exist because it is not completely done.
var myName = firstName('Sudharsan');


// myName - lastName
var myFullName = myName('Thiyagarajan')

console.log(myFullName);

// Or we can also call the function as

console.log(firstName('sudha')('T'));


var add1 = (a) => {

    var add2 = (b) => {

        var add3 = (c) => {
            return a + b + c;
        }
        return add3;
    }
    return add2;
}

// curring is called as -()()()..
sum = add1(5)(4)(2)
console.log(sum);
