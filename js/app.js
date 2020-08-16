                         
///////////////////////////////////// //      START OF MY CODE....         
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('a.btn__reset');  
let missed = 0;
const phrases = [
    'Tim sees little green people',
    'Erin is the best mom ever',
    'Bailey has mad photog skills',
    'Emerson has one thousand nicknames',
    'Shannon is the best kid on the block'
    ];
const overlay = document.getElementById('overlay');
const scoreboard = document.querySelector('#scoreboard ol');//////////////////
const hearts = document.getElementsByTagName('img');
let li = document.querySelector('#phrase ul');
let letter = li.children;
//////////////////////////////event listener START GAME and hide overlay
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});
//////////////////////////////END HIDE OVERLAY

///////////////////////////create getRandomPhraseAsArray 
const getRandomPhraseAsArray = arr => {
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    let phraseOfChar = randomPhrase.split('');
    return phraseOfChar;
}
const randomPhrase = getRandomPhraseAsArray(phrases);
///////////////////////////END OF getRandomPhraseAsArray 

//////////////////////////////////addPhraseToDisplay function
const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i ++) {
        let li = document.createElement('LI');
        li.textContent = arr[i];
        let displayPhrase = document.querySelector('#phrase ul');
        displayPhrase.appendChild(li);
        if ( arr[i] !== ' ') {
            li.classList.add('letter');
        } else {
            li.classList.add('space')
        }
    }
}
addPhraseToDisplay(randomPhrase); 
////////////////////////////////// END OF addPhraseToDisplay function

////////////////////////////////// create a checkLetter function
function checkLetter(button) {
    let match = null;
    for (let i = 0; i < letter.length; i ++) {
        if (letter[i].textContent.toLowerCase() == button.textContent) {
            letter[i].classList.add('show');
            match = letter[i].textContent;
        }
    } return match;
}
////////////////////////////////// END of create a checkLetter function

//////////////////////////////add an Event Listener to the keyboard
qwerty.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        event.target.classList.add('chosen');
        event.target.setAttribute('disabled', 'true')//???????
        //event.target.style.transition = '';
        let letterFound = checkLetter(event.target);
        if (letterFound == null){
            missed++;
            //hearts[missed - 1].src = 'images.lostHeart.png';//??
            hearts[missed - 1].style.display = 'none';
        }
        checkWin();
    }
});
///////////////////////////// END OF add an Event Listener to the keyboard

///////////////////////////// create a checkWin funcion
const checkWin = () => {
    let letter = document.getElementsByClassName('letter');
    let show = document.getElementsByClassName('show');
    
    if (letter.length == show.length) {
        overlay.className = 'win';
        overlay.firstElementChild.textContent = 'You WON!!';
        overlay.style.display = 'flex';
        startButton.style.display = 'none';
    } if ( missed > 4) {
        overlay.className = 'lose';
        overlay.firstElementChild.textContent = `I'm sorry, you LOST!!`;
        overlay.style.display = 'flex';
        //startButton.style.display = 'none';
        let newGameButton = document.createElement('button'); 
        let resetScreen = document.getElementsByTagName('main-container ')[0];    
        startButton.appendChild(newGameButton.textContent('New Game'));
        
    }
}
///////////////////////////// END OF create a checkWin funcion  
  
// Add a button to the “success” and “failure” screens that reset the game. You’ll have to 
// recreate the buttons in the keyboard, generate a new random phrase, and set the number 
// of misses to zero.
///////////////////////////// Create a Reset funcion  


// let newGame = document.createElement('BUTTON').textContent = 'New Game';     
// let resestKeyboard = document.getElementsByClassName('chosen');
    
// function resetGame() {
//     for ( let i = 0; i < resestKeyboard.length; i++) {
//         resestKeyboard[i].classList.remove('chosen');
//     }
//         missed = 0;
//         overlay.style.display = 'initial';
//         startButton.style.display = 'none';
//         overlay.appendChild(newGame);
//         getRandomPhraseAsArray(phrases);
//         addPhraseToDisplay(randomPhrase);
// }




    
    




///////////////////////////// END OF Reset funcion  







