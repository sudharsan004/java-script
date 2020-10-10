document.addEventListener('DOMContentLoaded', () => {

    var score =0
    cardObjects = [
        1,2,3,4,5,6,1,2,3,4,5,6
    ]
    var grid = document.querySelector('.grid');
    
    // create random sequence of objects
    var randomArray = cardObjects.sort(() => 0.5-Math.random());
    // console.log(randomArray);
    

    cardsChosen =[];

    

    
    
    // create board 
    function createBoard() {
        cardObjects.forEach(element => {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/qmark.png')
            card.setAttribute('class', element);
            card.setAttribute('style', 'padding:5px')
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        } );
    }
    createBoard();

    function checkForMatch(){
        if(cardsChosen[0]==cardsChosen[1]){
            // cardsChosen[0] = '.'+cardsChosen[0]
            var matchedElements = document.getElementsByClassName(cardsChosen[0]);
            console.log(matchedElements);
            matchedElements[1].remove()
            for (const element of matchedElements) {
                element.remove()
            }
            // matchedElements[1].setAttribute('src', 'images/white.png')
            // matchedElements[1].setAttribute('class', '')
            // matchedElements[1].remove()
            // matchedElements[0].setAttribute('src', 'images/white.png')
            // matchedElements[0].setAttribute('class', '')
            // matchedElements[0].remove()
            score++;
            document.getElementById('result').innerText=score
            if (score===6){
                alert('You Have a sharp memory!! you Won 😜')
            }
        }
        else{
            var unMatchedElement1 = document.getElementsByClassName(cardsChosen[1]);
            var unMatchedElement2 = document.getElementsByClassName(cardsChosen[0]);
            for (const element of unMatchedElement1) {
                element.setAttribute('src', 'images/qmark.png');
            }
            for (const element of unMatchedElement2) {
                element.setAttribute('src', 'images/qmark.png');
            }
            unMatchedElement1[0].setAttribute('src', 'images/qmark.png');
            unMatchedElement2[0].setAttribute('src', 'images/qmark.png');
        }
        cardsChosen=[]
    }

    function flipcard() { 
        console.log(this);
        position =this.getAttribute('class');
        cardsChosen.push(position);
        console.log(cardsChosen);
        this.setAttribute('src',`images/${position}.jpg`);
        this.setAttribute('style','padding:5px');
        // this.setAttribute('id','')
        if (cardsChosen.length ===2){
            setTimeout(checkForMatch,500)
        }
        
    }

    
    
})