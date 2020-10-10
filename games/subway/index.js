function start() {

    alert(" Touch right side or left side to move,  Press ok to Start!!!")

    function moveRight() {
        // var character = document.querySelector('#character');
        var currentPosition = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
        var movedPosition = currentPosition + 100;
        if (movedPosition <= 200) {
            character.style.left = movedPosition + 'px';
            console.log(window.getComputedStyle(character).getPropertyValue('left'));
        }

    }

    function moveLeft() {
        // var character = document.querySelector('#character');
        var currentPosition = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
        var movedPosition = currentPosition - 100;
        if (movedPosition >= 0) {
            character.style.left = movedPosition + 'px';
            // console.log(window.getComputedStyle(character).getPropertyValue('left'));
        }

    }

    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft') { moveLeft(); }
        if (event.key === 'ArrowRight') { moveRight(); }
    })
    var speed = 2;
    var block = document.querySelector('#block');
    block.style.top = 500;
    block.style.left = 100;
    character.style.left = 200;
    var score = 0;
    var scoreElement = document.querySelector('#score')
    // Every time the animation runs run this function
    block.addEventListener('animationiteration', () => {
        // get a random number 0,1,2 and multiply it to get 0,100,200 position
        var random = (Math.floor(Math.random() * 3)) * 100;
        // console.log(random);
        block.style.left = random + 'px';
        score++;
        scoreElement.innerHTML = `Score: ${score}`
        var randomNoForImage = (Math.floor(Math.random() * 4));
        var imageNo = [1, 2, 1, 2]//for less probablity of heart
        var imageElement = document.querySelector('.obstacle');
        var imageFile = 'images/' + imageNo[randomNoForImage] + '.gif';
        imageElement.setAttribute('src', imageFile);



        setInterval(() => {
            
                var imageElement = document.getElementById("img").src;
                console.log(imageElement);

                var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
                var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
                var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
                if (characterLeft === blockLeft && blockTop >= 300) {
                    alert('Out! Your Score is ' + score);
                    // prompt('Out! Your Score is ' + score +'Press Enter to start');
                    score = 0;
                    // block.style.animation = 'none';
                }
            
        }, 1);




        // speed
        if (score % 25 === 0 && speed > 0.75) {
            speed = speed - 0.10;
            block.setAttribute('style', `animation: slide ${speed}s infinite linear`);
        }

        // deduce the life scale
        var scale = document.querySelector('#scale');
        var scaleValue = parseInt(window.getComputedStyle(scale).getPropertyValue('width'));
        scale.style.width = (scaleValue - 3) + 'px';
    })

    // setInterval(() => {
    //     var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    //     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    //     var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    //     if (characterLeft === blockLeft && blockTop >= 300) {
    //         alert('Out! Your Score is ' + score);
    //         // prompt('Out! Your Score is ' + score +'Press Enter to start');
    //         score = 0;
    //         // block.style.animation = 'none';
    //     }

    // }, 1);


    document.getElementById('left').addEventListener('touchstart', moveLeft);
    document.getElementById('right').addEventListener('touchstart', moveRight);

}

start()


// setInterval(() => {
//     if (randomNoForImage === 4) {
//         var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
//         var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
//         var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
//         if (characterLeft === blockLeft && blockTop >= 300) {
//             var scale = document.querySelector('#scale');
//             var scaleValue = parseInt(window.getComputedStyle(scale).getPropertyValue('width'));
//             if (scaleValue < 290) {
//                 scale.style.width = (scaleValue + 10) + 'px';
//             } else { scale.style.width = 300 + 'px'; }

//         }
//     }

var block1 = document.querySelector('#block1');

setTimeout(() => {

    var random = (Math.floor(Math.random() * 3)) * 100;
    var probablity = (Math.floor(Math.random() * 3));
        // console.log(random);
        if (probablity===2){
        block1.style.left = random + 'px';
        var imageElement = document.querySelector('.heart');
        var imageFile = 'images/' + '3' + '.gif';
        imageElement.setAttribute('src', imageFile);
        
    var imageElement = document.getElementById("img1").src;
    console.log('hi'+imageElement);
        }
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    var blockLeft = parseInt(window.getComputedStyle(block1).getPropertyValue('left'));
    var blockTop = parseInt(window.getComputedStyle(block1).getPropertyValue('top'));
    if (characterLeft === blockLeft && blockTop >= 300) {
        var scale = document.querySelector('#scale');
            var scaleValue = parseInt(window.getComputedStyle(scale).getPropertyValue('width'));
            if (scaleValue < 290) {
                scale.style.width = (scaleValue + 10) + 'px';
            } else { scale.style.width = 300 + 'px'; }
        // alert('Out! Your Score is ' + score);
        // prompt('Out! Your Score is ' + score +'Press Enter to start');
        // block.style.animation = 'none';
    }

}, 500);