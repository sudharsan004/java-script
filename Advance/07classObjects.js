// this syntax is used in frameworks/library
// import { User } from "./06class.js";

const importedUser = require('./06class.js')

const sudharsan = new importedUser('sudharsan',7010640946)

sudharsanInfo =sudharsan.getInfo();
console.log(sudharsan.getInfo());


sudharsan.enrollCourse('python');
sudharsan.enrollCourse('django');

// looping through the object
for (const key in sudharsanInfo) {
    if (sudharsanInfo.hasOwnProperty(key)) {
        const element = sudharsanInfo[key];
        console.log(element);
        
    }
}

// looping through the list

let courseList = sudharsan.getCourseList();
var courseLen =courseList.length;
console.log(`the total courses are ${courseLen}`);

courseList.forEach(c=> console.log(c));

