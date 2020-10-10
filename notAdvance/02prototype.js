var a = [1, 3, 4];

// defining a new function on array object
a.__proto__.getSum = function () {
    var total = 0;
    this.forEach(element => {
        total += element
    });
    console.log(`the sum of the array ${this} is equal to ${total}`);
}

// now that the new function is defined we can access that function in every array object we create
b = [543, 324, 2];
b.getSum();

c = ['himalayas']
c.getSum();

d = {
    name: 'sudha',
    favcolor:'red',
}

d.__proto__.rollno=25;
console.log(d);
console.log(d.rollno);
