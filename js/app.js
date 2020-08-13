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
      let li = document.createElement('LI');
      li.textContent = arr[i];
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

/////////////////////////////////////not MINE//////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// // // check if a letter is in the phrase

function checkLetter (button) {
    let letters = document.querySelectorAll('.letter')
    let match = '';
    for (let i = 0; i < letters.length; i++) {
        const li = letters[i];
      if (button.textContent === li.textContent.toLowerCase() ) {
       match = li.classList.add('show');
       } 
    }
    return match;
}
// // // Listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    const button = e.target;
    const buttons = document.querySelector('button');
    if (button.tagName === 'BUTTON') {
        button.classList.add('chosen');
    } 
    const letterFound =  checkLetter(button);
    const letters = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    if (letterFound.className !== 'show' && button.tagName === 'BUTTON') {
        const li = document.querySelector('.tries');
        missed ++;
        li.remove();
    }
checkWin();
return letterFound;    
});


/////////////////////////////////////MINE//////////////////////////////////////
/////////////////////////////////////MINE//////////////////////////////////////
                //CREATE A CHECK LETTER FUNCTION, check if a letter is in the phrase
// const qwerty = document.getElementById('qwerty');
// const buttons = document.querySelectorAll('button');

// function checkLetter(arr) {
//     for (let i = 0; i < arr.length; i ++) {
//         let letters = document.querySelectorAll('.letter');
//         let match = ''; //null?
//             for (let i = 0; i < letters.length; i ++) {
//                 const li = letters[i];
//                     if ( arr[i] === li.textContent.toLowerCase()) { // textContent to button?
//                         match = li.classList.add('show');
//                         console.log(letters[i]);
//                     }
//             }
//             return match;
//  }
// }
//  //checkLetter();

    
// qwerty.addEventListener('click', (e) => {
//     const button = e.target;
//     //const buttons = document.querySelectorAll('button');
//         if (button.tagName == 'BUTTON') {
//             button.classList.add("chosen");
//             //checkLetter(); use this inside this function
//             //const letterFound = checkLetter(button);
//         }      
// });

// const letterFound = checkLetter(buttons);

//                                     //listen for the onscreen keyboard to be clicked


// const missed = 0;

///////////////////////////////END MINE////////////////////////////////////////////








// // check if the game has been won or lost

// function checkWin () {
//     const letters = document.querySelectorAll('.letter');
//     const show = document.querySelectorAll('.show');
//     const liLetters = letters;
//     const liShow = show;
//     const lost = `You Lose`;
//     const win = `You Win`;
//   if  (liLetters.length == liShow.length) {
//         const overLayDiv = document.querySelector('#overlay');
//         overLayDiv.classList.remove("start");
//         overLayDiv.classList.add("win");
//         overLayDiv.innerHTML = `<h1>${win}</h1>`;
//         overLayDiv.style.display = 'flex';
//     } else if   (missed > 4) {
//         overLayDiv.classList.remove("start");
//         overLayDiv.classList.add("lose");
//         overLayDiv.innerHTML = `<h1>${lost}</h1>`;
//         overLayDiv.style.display = 'flex';
//     }
// }

