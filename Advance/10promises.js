// if some job as to be done before others even it takes time it has to be finished first. like querying a db.

const one = () => {
    return 'I am One!'
}

const two = () => {
    setTimeout(() => {
        return 'I am Two'
    }, 4000);
}

const three = () => {
    return 'I am Three!';
}


var callMe = async() => {
    
var oneValue=one();
console.log(oneValue);

var twoValue= await two();
console.log(twoValue);

var threeValue=three();
console.log(threeValue);

}

callMe();