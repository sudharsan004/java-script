class User{
    constructor(name,phoneNo){
        this.name = name;
        this.phoneNo = phoneNo;
    }
    // in class we should not use let,var ,const etc.
    // when we use # before a variable it is private variable it can only be accessed within the class
    #courseList =[];

    // note this function does not have 'function' keyword, in class we should not use 'function keyword'
    getInfo(){
        return {name:this.name, phoneNo:this.phoneNo,courseList:this.#courseList}
    }
    // setter - setting something for a class
    enrollCourse(courseName){
        this.#courseList.push(courseName);
    }
    // getter - getting something from the class
    getCourseList(){
        return this.#courseList;
    }
}
// exporting this User class so we can access in other files

module.exports = User;

var sam = new User('sam',19038091230122);
sam.enrollCourse('cyber security')
console.log(sam.getCourseList());

// when we use # before a variable it is private variable it can only be accessed within the class
console.log(sam.courseList); //since it is a private variable we cannot directly get
 