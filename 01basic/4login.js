// chech if a user is logged in and show him his dash board

var isLoggedInFromGoogle = false;
var isLoggedInFromMail = true;
var isLoggedInFromFacebook = false;


if (isLoggedInFromGoogle){
    console.log('You are logged in redirecting to dashboard...');

}
if (isLoggedInFromMail){
    console.log('You are logged in redirecting to dashboard...');

}
if (isLoggedInFromFacebook){
    console.log('You are logged in redirecting to dashboard...');

}

// using or-|| 
if (isLoggedInFromFacebook || isLoggedInFromGoogle || isLoggedInFromMail){
    console.log('You are logged in redirecting to dashboard...');

}


// similarly we can use && and operator 


