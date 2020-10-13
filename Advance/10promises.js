// if some job as to be done before others even it takes time it has to be finished first. like querying a db.

const one = () => {
    return 'I am One!'
}

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success');
            reject('failed')
        }, 4000);
    })
}

const three = () => {
    return 'I am Three!';
}


// here we make it async and  waiting for the two() function to execute.
var callMe = async () => {

    var oneValue = one();
    console.log(oneValue);

    var twoValue = await two();
    console.log(twoValue);

    var threeValue = three();
    console.log(threeValue);

}

callMe();