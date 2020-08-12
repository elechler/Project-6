                          //make sure you have this in program (from project review)
// //check if a letter is in the phrase
// const checkLetter = button => {

// }
// //check if the game has been won or lost
// const checkWin = () => {

// }

// //listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click', e => {

// });
                                                //      START OF MY CODE....

                                    //hides main container when you click START GAME
const overlay = document.querySelectorAll('.start');
const startButton = document.querySelectorAll('.btn__reset');  
    for (let i = 0 ; i < overlay.length; i++) {
        startButton[i].addEventListener('click', function () {
            overlay[i].style.display = 'none';
        });
    }
    
const phrases = [
    'Tim sees little green people',
    'Erin is the best mom ever',
    'Bailey has mad photog skills',
    'Emerson has one thousand nicknames',
    'Shannon is the best kid on the block'
];

                        //create a function that returns a random phrase from an array 
 
const phrase = document.getElementById('phrase');

function getRandomPhraseAsArray(arr){
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const splitPhrase = randomPhrase.split("");
    console.log(splitPhrase);
    return splitPhrase;
  } 
const phraseArray = getRandomPhraseAsArray(phrases);
  
                                //adds the letters of the random phrase to the display

  function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i ++) {
      let li = document.createElement("LI");
      li.textContent = arr[i];
      const displayPhrase = document.querySelector("#phrase ul");
      displayPhrase.appendChild(li);
        if ( arr[i] !== " ") {
            li.classList.add("letter");
            } else {
                li.classList.add("space");
            }
    }
}
addPhraseToDisplay(phraseArray); 
/////////////////////////////////////MINE//////////////////////////////////////
                //CREATE A CHECK LETTER FUNCTION, check if a letter is in the phrase

// function checkLetter(button) {
//     let inputLetter = document.getElementsByClassName('.letter');
//     let correctLetter = null;
//     for (let i = 0; i < inputLetter.length; i ++) {
//         if ( inputLetter[i].textContent === button) {
//         inputLetter[i].classList.add("show");
//         let match = inputLetter[i].textContent;
//         console.log(match);
//         return match;
//     }
//     }
// }
// checkLetter();

//const qwerty = document.getElementById('qwerty');

//                                     //listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click', e => {
//     let element = document.getElementsByTagName('button')[0];
//     for ( let i = 0; i < element.length; i++ ) {
//         if (e.target.tagName == 'BUTTON') {
//             element.classList.add("chosen");
//             //element.style.display = 'none';
//         } 

//     }
    
// });

const missed = 0;

///////////////////////////////END MINE////////////////////////////////////////////


