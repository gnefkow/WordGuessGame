
var wordName = ["AMX", "JAVELIN", "CHARGER", "GREMLIN", "WRX"];


//DOM Elements

var word1 = randomWord()
var wordSplit = word1.split("");
var guessesLeft = 10;
var guess = true;
var guessedLetters = [""];
var gameOver = false;

// DISPLAY A RANDOM CAR NAME
function randomWord() {
    randomWordIndex = Math.floor(Math.random()* wordName.length);
    return wordName[randomWordIndex];
}



document.addEventListener("keyup", function(){
    //this is a "callback function" - "when this happens (keyup) , call this function"
    // Would love to get these DOM Elelments up to the top, but it breaks when I try
    var startTextEl = document.getElementById("startText");
    var guessWordEl = document.getElementById("guessWord");
    var wordDisplayEl = document.getElementById("wordDisplay");


    
    startTextEl.style.display="none";
    guessWordEl.style.display = "block";
    wordDisplay.innerHTML = wordSplit; // Will this need to be a for loop that creates different <p> tags or something?
    console.log(wordSplit);

})

//User can Guess a letter
function letterGuess() {
    document.addEventListener("keyup", function(event){
        
    //ADD LETTER TO THE GUESSED LETTERS ARRAY    
    guessedLetters.push(event.key); 
        console.log("Letters Guessed so far: " + guessedLetters);

    //LOOP: check wordSplit[0] to see if the string === event.key 
    for (var i = 0; i < wordSplit.length; i++) {
        if (wordSplit.includes(event.key)) {lastGuess = true;}
        else {lastGuess = false;}
        };

    // Rewards and Punishments!
    if (lastGuess === true) {console.log("var guess knows its true!")}
      else {
        guessesLeft -= 1; 
        console.log("Letter in word? " + lastGuess)
        console.log(guessesLeft);
        };

    //End game if player continues to suck (Uses up all of her lives)
    if (guessesLeft > -1) {gameOver = false;}
    else {gameOver = true; console.log("GAME OVER!!!")};
    })
};





//Run Functions
letterGuess()
console.log("The random car should be " + word1 + ", it should have " + word1.length + " letters.");

console.log(guess);
