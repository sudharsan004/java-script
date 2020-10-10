const courses = [
    {
        name: 'React Js',
        price: 50,
    },
    {
        name: 'Angular Js',
        price: 55,
    },
    {
        name: 'Django - React full stack',
        price: 40,
    },
    {
        name: 'Trading View course',
        price: 61,
    }
]

function createCourseList() {
    var ul = document.querySelector('.list-group');

    ul.innerHTML = '';
    courses.forEach((course) => {


        var li = document.createElement('li');

        var courseName = document.createTextNode(course.name);
        li.appendChild(courseName);
        li.classList.add('list-group-item');

        var spanElement = document.createElement('span');
        var coursePrice = document.createTextNode('$' + course.price);

        spanElement.appendChild(coursePrice);
        spanElement.classList.add('float-right');

        li.appendChild(spanElement);

        ul.appendChild(li);
    })
}

createCourseList()


var button1 = document.querySelector('.sort-accending-btn');

button1.addEventListener('click', () => {
    courses.sort((a, b) => a.price - b.price);
    createCourseList()
}
)
var button2 = document.querySelector('.sort-decending-btn');

button2.addEventListener('click', () => {
    courses.sort((a, b) => b.price - a.price);
    createCourseList()
}
)

