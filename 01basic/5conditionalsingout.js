// if user is authenticated show him signout/logout button
// else show login/Signup button

var authenticated = false;


// if(true){}
// if (authenticated)
// {
//     console.log('show logout button');
    
// } else{
//     console.log('show login/signup button');
    
// }

// ternary if condition (short form of if else)
// syntax:
// condition ? if-block : else-block ;
authenticated ?  console.log('show logout button') : console.log('show login/signup button') ;
