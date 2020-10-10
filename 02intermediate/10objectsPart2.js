var user = {
    firstName: 'Sudharsan',
    lastName: 'Thiyagarajan',
    phoneNumber: 7010640946,
    role: 'user',
    loginCount: 33,
    isLoggedInFromGoogle: true,

    // defining a list inside an object
    coursesEnrolled: [],
    
    // defining function inside an object note the key acts as the function name
    
    buyCourse: function (courseName)  {
        this.coursesEnrolled.push(courseName);
    },

    getCourseCount : function() {
        return `${this.firstName+' '+this.lastName} has enrolled in ${this.coursesEnrolled.length} courses`;
    },

    info : function (){
        console.table(this);
    }

}

// print all the info about the user
user.info();

// this function returns so use console.log
console.log(user.getCourseCount());

// user buys some course
user.buyCourse('React js');
user.buyCourse('Django');

// print all the info about the user
user.info();

console.log(user.getCourseCount());

console.log(

typeof true);