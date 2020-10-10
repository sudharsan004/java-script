var counter = document.querySelector('.counter');
var followers = document.querySelector('.followers');

let count =1

setInterval(() => {
    if (count<=1000){
    counter.innerText=count;
    count++}
}, 1);

setTimeout(()=>{
    followers.innerText =' followers'
},5000)