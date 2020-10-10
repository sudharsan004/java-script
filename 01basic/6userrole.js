// create an application having following roles for users
// admin - get full access
// subAdmin - add/delete content
// user - can consumes content and comment on it


var userType = 'subAdmin';
// we can also use if else to do this but switch case is a  better way to compare many cases :)

//syntax:
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

switch (userType) {
    case 'admin':
        console.log('gets full access !');
        break;

    case 'subAdmin':
        console.log('can create/delete content');
        break;

    case 'user':
        console.log('can consume and comment');
        break;

    default:
        console.log('Normal user');
        break;
}

// if break is not used it will execute code below it also ,
//  if we use return instead of console log we use return, 
// we can skip the break as retun keyword terminates further executon of the switch block.