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
const missed = 0;

                        //create a function that returns a random phrase and splits it
const phrase = document.getElementById('phrase');

function getRandomPhraseAsArray(arr){
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const splitPhrase = randomPhrase.split("");
    return splitPhrase;
  } 
const phraseArray = getRandomPhraseAsArray(phrases);
                                
                                //adds the letters of the random phrase to the display
  function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i ++) {
      let li = document.createElement('LI');
      li.textContent = arr[i]; //does lower case change work?
      const displayPhrase = document.querySelector('#phrase ul');
      displayPhrase.appendChild(li);
        if ( arr[i] !== ' ') {
            li.classList.add('letter');
            } else {
                li.classList.add('space');
            }
    }
}
addPhraseToDisplay(phraseArray); 
////////////////////////////////////////////////////////////////up above works
//////////////////////////////////////////////////////down below is where you left off
                                ////////listen for the onscreen keyboard to be clicked

const qwerty = document.getElementById('qwerty');
const buttons = document.querySelectorAll('button');
let li = document.querySelector('#phrase ul');
let letter = li.children;

function listenToButton () {
    for ( i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener ('click', function () {
            this.classList.add('chosen');
            let letter = this.textContent;
            console.log(letter);
        });
    }
}
listenToButton();
console.log(phraseArray);
//if phrase array containe variable letter mark show



// function listenToButton() {
//     for ( i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener ('click', function () {
//             this.classList.add('chosen');
// ////////////////////////////////////////////////////////above works
//         }
//     console.log(this.textContent);
//     }
// }
// listenToButton();

                //CREATE A CHECK LETTER FUNCTION, check if a letter is in the phrase

//     function checkLetter() {
// }
//     let match;
//         for ( j = 0; j < li.length; j++ ) {
//             if ( li[j].textContent === buttons[i].textContent) {
//                 li[j].classList.add('show');
//                 match = buttons[j].textContent;
                
//         } 
//         return match;
// }
// checkLetter();
          
/////////////////////////////////////////////////////////////////////////
// function listenToButton() {
//     for ( i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {
//     this.classList.add('chosen');
//     });
//     console.log(buttons[i]);
//     }
// }
// listenToButton();
  ////////////////////////////////////////////////////////////////////////////  
  ////////////////////////////////////////////////////////////////////////////  


// NOTES
//   node.textContent
//   Set the text content of a node:
  
//   node.textContent = text
//   var x = document.getElementById("myBtn").textContent;  




































