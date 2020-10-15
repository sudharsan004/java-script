var button = document.querySelector('.btn');
var joke = document.querySelector('.joke');

button.addEventListener('click',()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data.value);
        joke.innerHTML=data.value;
    })
    .catch(()=>{
        console.log('error');
    })
})

