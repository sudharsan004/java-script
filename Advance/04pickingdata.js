// destructring the data
var user = ['sudharsan', 4, 'admin'];

console.log(user[0]);
console.log(user[1]);
console.log(user[2]);

// we can assign the similar data type to the lhs and rsh to simplify the calling the variables
var [name, courseCount, role] = user;
console.log(name);
console.log(courseCount);
console.log(role);

// destructring the objects

var college = {
    name: 'pec',
    place: 'vaniyambadi',
    affilated: true,
    fees: 50000
}

// but in case of the object the names should be same as declared at first, otherwise it will show undefined.
var { name, place, isAffilated, fees } = college;

console.log(name);
console.log(place);
console.log(isAffilated);//undefined
console.log(fees);
