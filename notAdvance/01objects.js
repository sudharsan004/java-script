// Functional approach of defining a object
// here this keyword points to the object User itself because we used new keyword(line 14,17) otherwise this would point to global object.
var User = function (name, courseCount) {
    this.name = name;
    this.courseCount = courseCount;

    this.courseBought = function courseBought() {
        console.log(`your course count is ${this.courseCount}`);
    }
}

// Now using prototype we can directly define a property , which can be accessed by all the created objects
User.prototype.getFirstName =function (){
    console.log(this.name);
}
User.prototype.__proto__.usertype = 'RegisteredUsers';

// Every time we use 'new'- keyword a seperate user object is created
var Sudharsan = new User('sudharsan', 2);

Sudharsan.courseBought();

// best practice chek if the property exists and then call it , if the property does not exist it wont be called avoiding undefined.
if(Sudharsan.hasOwnProperty('name')){
Sudharsan.getFirstName();}
// hasOwnProperty checks if the object has this property directly defined in. this does not check the prototype properties.


console.log(`the usertype of Sudharsan is ${Sudharsan.usertype}`);


// console.log(Sudharsan);


var Sudha = new User('sudha', 3);
Sudha.courseBought();
// console.log(Sudha.name);
Sudha.getFirstName();

