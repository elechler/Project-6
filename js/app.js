                        //make sure you have this in program (from project review)
//return a random phrase from an array
// const getRandomPhraseAsArray = arr => {

// }
// //adds the letters of a string to the display
// const addPhraseToDisplay = arr => {

// }
// //check if a letter is in the phrase
// const checkLetter = button => {

// }
// //check if the game has been won or lost
// const checkWin = () => {

// }
// //listen for the start game button to be pressed
// startButton.addEventListener('click', () => {

// });
// //listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click', e => {

// });


const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('.btn__reset');
const missed = 0;

const phrases = [
    'Tim sees little green people',
    'Erin is the best mom ever',
    'Bailey has mad photog skills',
    'Emerson has one thousand nicknames',
    'Shannon is the best kid on the block'
];





//hides main container when you click anywhere, NOT JUST THE BUTTON START GAME
const overlay = document.querySelectorAll('.start');
    for (let i = 0 ; i < overlay.length; i++) {
        overlay[i].addEventListener('click', function () {
            overlay[i].style.display = 'none';
            
        });
    }
    



