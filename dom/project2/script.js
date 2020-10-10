const red = document.querySelector('.red');

const blue = document.querySelector('.blue');

const green = document.querySelector('.green');

const violet = document.querySelector('.violet');

const center =document.querySelector('.center');


var bgColor = window.getComputedStyle(red);

const changeColor = (element) =>{
    var bgColor = window.getComputedStyle(element).backgroundColor;
   return center.style.background = bgColor;
}

red.addEventListener('mouseenter',()=>changeColor(red));
blue.addEventListener('mouseenter',()=>changeColor(blue));
green.addEventListener('mouseenter',()=>changeColor(green));
violet.addEventListener('mouseenter',()=>changeColor(violet));


