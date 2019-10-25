
$( document ).ready(function() {});

    


var wordName = ["AMX", "JAVELIN", "CHARGER", "GREMLIN", "WRX"];

var wordDisplay = "";
var gameState = "start";
var wordSplit = "x";
var guessedLetters = [""];
var guessesLeft = 10;

//DOM Elements
var startTextEl
var guessWordEl
var wordDisplayEl


document.addEventListener("keyup", function(){

//TURN THE GAME ON:
if (gameState === "start") {

    // Would love to get these DOM Elelments up to the top, but it breaks when I try
    //Set the DOM Text
    startTextEl = document.getElementById("startText");
    guessWordEl = document.getElementById("guessWord");
    wordDisplayEl = document.getElementById("wordDisplay");
    
    var word1 = randomWord();
    
    wordSplit = word1.split("");


    //CHOOSE A WORD
    function randomWord() {
        randomWordIndex = Math.floor(Math.random()* wordName.length);  
        return wordName[randomWordIndex];
    };

    // Display the letters on the screen
    startTextEl.style.display = "none";
    guessWordEl.style.display = "block";
    wordDisplayEl.innerHTML = wordSplit;

    //Add the blank boxes
    for (var i = 0; i < wordSplit.length; i++) {
        var boxLetter = $("<div class='boxLetter'>");
        boxLetter.attr("letter-is", wordSplit[i]); //gives the box a data attribute of the appropriate letter
        $("#wordDisplay").append(boxLetter);
    };

    console.log(`Game state: ${gameState}`);
    console.log(`The word is ${word1} and it has ${word1.length} letters. var wordSplit is ${wordSplit}`);
    gameState = "play";

    


} else if (gameState == "play") {   
//=======================================  TIME TO PLAY!!  ===========================================//
    var guess = true;


    function letterGuess() {
        // document.addEventListener("keyup", function(event){
            
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
        if (guessesLeft > -1) {game = "play";}
        else {gameState = "lose"; console.log("GAME OVER!!!")};
        

    }; //

    letterGuess()

} else if (gameState == "lose") { 
//=======================================  GAME OVER!!!!  ===========================================//


    // Display the letters on the screen
    startTextEl.style.display = "block";
    startTextEl.innerHTML = "GAME OVER!";
    guessWordEl.style.display = "none";
    wordDisplayEl.style.display = "none";
};

}); //this ends the on key up Function




//Run Functions


console.log(`Game state: ${gameState}`);

