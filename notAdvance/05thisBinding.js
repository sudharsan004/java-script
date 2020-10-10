var sudharsan = {
    name: 'sudharsan',
    std: 12,
    marks: 946,
    course: 'B.E. Computer Science Engineering',
    getInfo: function () {
        console.log(`
        Student Name is ${this.name},
        he is Studying in ${this.std} 
        has scored ${this.marks} 
        in the ${this.course}
        `);
    }
}

var sudha ={
    name: 'm',
    std: 12,
    marks: 800,
    course: 'B.Tech IT',
}

// borrowing the method from sudharsan object 
getInfoSudha=sudharsan.getInfo.bind(sudha);
// bind returns the reference only we should run it
// sudharsan.getInfo.bind(sudha)()
// another way of running
getInfoSudha=sudharsan.getInfo.bind(sudha);
getInfoSudha()


// call() directly runs the borrowed function
sudharsan.getInfo.call(sudha)

console.log(sudharsan.getInfo.toString());


