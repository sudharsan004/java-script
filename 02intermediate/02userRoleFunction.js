/*
write a function to return the role of the user given the user name and his position, like:
getUserRole('sudha','admin') it should give output as : sudha has all access.

// admin - get full access
// subAdmin - add/delete content
// user - can consumes content and comment on it

*/
function getUserRole(name, position){
    switch (position) {
        case 'admin':
            return `The user ${name} is admin with all access`
            break;//when the return is used rest of the code does not execute so break is not necessary here.

        case 'subAdmin':
            return `The user ${name} is subadmin with all access to add or delete content`
            break;
        case 'admin':
            return `The user ${name} is a user with all access to consuming the content`
            break;

        default:
            return `The user ${name} is a new user.`
            break;
    }
}

console.log(getUserRole('sudha','admin'));


// in js we can also define a function as a variable also there are some more advanced ways 

var greet = function (name) {
 return `hello ${name} !`
}

console.log(greet('sudharsan'));
