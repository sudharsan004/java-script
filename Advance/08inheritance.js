class User{
    constructor(name,phoneNo){
        this.name = name;
        this.phoneNo = phoneNo;
    }
    courseList =[];

    // note this function does not have 'function' keyword, in class we should not use 'function keyword'
    getInfo(){
        return {name:this.name, phoneNo:this.phoneNo,courseList:this.courseList}
    }
    // setter - setting something for a class
    enrollCourse(courseName){
        this.courseList.push(courseName);
    }
    // getter - getting something from the class
    getCourseList(){
        return this.courseList;
    }
    greet(){
        console.log('This is from user class!');
    }
}


class subAdmin extends User{
    constructor(name,phoneNo){
        super(name,phoneNo)
    }
    subAdmin(){
        console.log('This is subAdmin');
    }
}

var jim = new subAdmin('Jim',123);
jim.greet()
console.log(jim.getInfo());
 