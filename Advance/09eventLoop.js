const one = () => {
    console.log('I am One!');
}

const two = () => {
    // js engine will tell "ok you are lazy, u can run after 4 sec, let me run other code :)"
    setTimeout(() => {
        console.log('This will run after 4 seconds!');
    }, 4000);
    console.log('I am Two!');
}

const three = () => {
    console.log('I am Three!');
}

one()
two()
three()
// true ? console.log('one') : console.log('two');


