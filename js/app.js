                        //make sure you have this in program (from project review)
// //adds the letters of a string to the display
// const addPhraseToDisplay = arr => {

// }
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
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

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
// function getRandomPhraseAsArray(arr) {
//     const randomNumber = Math.floor(Math.random() * arr.length );
//     const randomPhrase = arr[randomNumber];
//         function splitFunction() {
//             let splitPhrase = randomPhrase.split("");
//             console.log(splitPhrase);
//         }
//             splitFunction();   
//         }
// let test = getRandomPhraseAsArray(phrases);
        




function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length );
    const randomPhrase = arr[randomNumber];
        function splitFunction() {
            let splitPhrase = [randomPhrase.split("")];
            console.log(splitPhrase);
        }
            splitFunction();   
        }
const splitPhrase = [getRandomPhraseAsArray(phrases)];
      
// const test = 'test';
// document.querySelector('ul').innerHTML = test;


// //adds the letters of a string to the display
// const addPhraseToDisplay = arr => {

// }

//STUCK HERE--- NOTHING WORKS BELOW THIS
function addPhraseToDisplay(arr) {
    const listItems = document.getElementsByTagName('ul');
    for (let i = 0; i < listItems.length; i +=1) {
            listItems[i].textContent = listItems[i].textContent;
            //document.querySelector('ul').innerHTML = listItems;
            
            };
   }
addPhraseToDisplay(splitPhrase);

    
    







//CREATE A CHECK LETTER FUNCTION:
 //check if a letter is in the phrase
// const checkLetter = button => {
// }

// function checkLetter(buttonClicked) {

// }

// const checkLetter = document.getElementsByTagName('li');
// console.log(checkLetter);