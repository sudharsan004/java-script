var color = ['red', 'blue', 'green', 'orange'];

console.log(color);

//we can also declare by this way
var color = new Array ('red', 'blue', 'green', 'orange');
var color =  Array ('red', 'blue', 'green', 'orange');

console.log(color);

// access array elements by array[index] index start from 0
console.log(color[1]);
// we can also change the values
color[1] = 'purple';
console.log(color[1], color);

// Array methods

var student = ['name','12th',600, true]
console.log(student);

// array.length -gives the length of the array
console.log(student.length);

//array.pop() removes the last element of the array
student.pop()
console.log(student);

//array.push() adds an element to the last position of the array
student.push(true)
console.log(student);

// array.unshift()  inserts an element at the first - it costs shifting all other elements of the array to next position.
// student.unshift('AddThisToFirstPosition');
student.unshift(color);
console.log(student);

student.shift()//removes the first element

console.log(student);

console.log(student.indexOf(true));//finds the position(index of the element in the array)

console.log(student.indexOf('ture'));//if the element is not in array it returns -1


console.log(student);

var stringToArray = Array.from('sudharsan');

console.log(stringToArray);





