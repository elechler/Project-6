                         
///////////////////////////////////// VARIABLES //////////////////////////////////         
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
const hearts = document.getElementsByTagName('img');
const tries = document.getElementsByClassName('tries');
let li = document.querySelector('#phrase ul');
let letter = li.children;

////////////////////////////// event listener START GAME and hide overlay /////////////////////
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

/////////////////////////// create getRandomPhraseAsArray /////////////////////////////////
const getRandomPhraseAsArray = arr => {
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    let phraseOfChar = randomPhrase.split('');
    return phraseOfChar;
}
const randomPhrase = getRandomPhraseAsArray(phrases);

////////////////////////////////// addPhraseToDisplay function //////////////////////////////
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

////////////////////////////////// create a checkLetter function /////////////////////////////
function checkLetter(button) {
    let match = null;
    for (let i = 0; i < letter.length; i ++) {
        if (letter[i].textContent.toLowerCase() == button.textContent) {
            letter[i].classList.add('show');
            match = letter[i].textContent;
        }
    } return match;
}

////////////////////////////// add an Event Listener to the keyboard /////////////////////
qwerty.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        event.target.classList.add('chosen');
        event.target.setAttribute('disabled', 'true')
        let letterFound = checkLetter(event.target);
        if (letterFound == null){
            missed++;
            hearts[missed - 1].src = 'images/lostHeart.png';
        }
        checkWin();
    }
});

///////////////////////////// Create a Reset funcion ////////////////////////////////////////
const resetGame = () => {
        missed = 0;
        let resestKeyboard = qwerty.querySelectorAll('.chosen');
            while (li.firstChild) {
                li.removeChild(li.firstChild);
            }
            const newPhraseArray = getRandomPhraseAsArray(phrases);
            getRandomPhraseAsArray(phrases);
            addPhraseToDisplay(newPhraseArray);
            for(let i = 0; i < resestKeyboard.length; i++){
                resestKeyboard[i].classList.remove('chosen');
                resestKeyboard[i].removeAttribute('disabled');
                hearts[i].src = 'images/liveHeart.png';
            }
}

///////////////////////////// create a checkWin funcion ////////////////////////////////////
const checkWin = () => {
    let letter = document.getElementsByClassName('letter');
    let show = document.getElementsByClassName('show');
        if (letter.length == show.length) {
            overlay.className = 'win';
            overlay.firstElementChild.textContent = 'You WON!!';
            overlay.style.display = 'flex';
            startButton.textContent = 'Play Again';
        }
        if ( missed > 4) {
            overlay.className = 'lose';
            overlay.firstElementChild.textContent = `I'm sorry, you LOST!!`;
            overlay.style.display = 'flex';
            startButton.textContent ='Play Again';
        }
        startButton.addEventListener('click', (event) => {
                    resetGame();
                });
}
