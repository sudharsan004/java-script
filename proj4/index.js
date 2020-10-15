let cards = document.querySelectorAll('.card');
// this cards is an array.
console.log(cards);

var isFlipped =false;
var firstCard,secondCard;

var success = () => {
    console.log('Correct match');
    firstCard.removeEventListener('click',flipcard)
    secondCard.removeEventListener('click',flipcard)
    firstCard=null;
    secondCard=null;
}

var failure = () => {
    setTimeout(()=>{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    console.log('Wrong match');},500)
}

var checkMatch = () => {
   if( firstCard.getAttribute('data-image') == secondCard.getAttribute('data-image')){
       success()
   } else{
       failure()
   }
}

function flipcard (){
    // console.log(this);
    this.classList.add("flip")
    // if flipping first card- isFlipped = False
    if (!isFlipped){
        isFlipped= true;
        firstCard = this;
    }
    // if isFlipped = true
    else{
        secondCard= this;
        isFlipped = false;
        console.log(firstCard);
        console.log(secondCard);
        checkMatch();
    }
}

cards.forEach((card) => card.addEventListener('click',flipcard));




var reset = () => {
    
}

var shuffle = () => {
    cards.forEach(card => {
        var random = Math.floor(Math.random()*16);
        card.style.order =random;
    });
}
shuffle();