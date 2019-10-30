

  var wordName = ["AMX", "JAVELIN", "CHARGER", "GREMLIN", "WRX"];
  var wordDisplay = "";
  var gameState = "start";
  var wordSplit = "x";
  var letterObj = {};
  var guessedLetters = [""];
  var guessesLeft = 10;
  var boxLetter
  var guessedLetterBox
  
  //DOM Elements
  var startTextEl
  var guessWordEl
  var wordDisplayEl

  //=======================================  START  ===========================================//
function startGame(){
  console.log("the game is starting");
   //Set the DOM Text
   startTextEl = document.getElementById("startText");
   guessWordEl = document.getElementById("guessWord");
   wordDisplayEl = document.getElementById("wordDisplay");
   var word1 = randomWord();
   wordSplit = word1.split("");
   for (var i=0; i < wordSplit.length; i++) {
    letterObj[wordSplit[i]] = false
  };




   //CHOOSE A WORD
   function randomWord() {
       randomWordIndex = Math.floor(Math.random()* wordName.length);  
       return wordName[randomWordIndex];
   };

   // Display the letters on the screen
   startTextEl.style.display = "none";
   guessWordEl.style.display = "block";
   // wordDisplayEl.innerHTML = wordSplit;

   //Add the blank boxes
   for (var i = 0; i < wordSplit.length; i++) {
       boxLetter = $("<div class='boxLetter'>");
       boxLetter.attr("id", "box-" + i);
       boxLetter.attr("letter-is", wordSplit[i]); //gives the box a data attribute of the appropriate letter
       $("#wordDisplay").append(boxLetter);
   };

   console.log(`Game state: ${gameState}`);
   console.log(`The word is "${word1}" and it has ${word1.length} letters: ${wordSplit}`);
   console.log(`The user has ${guessesLeft} guess(es) left.`)
   gameState = "play";
}


//create object for the word?
//get characters from wordSplit push to newObject (has 6 fields)
//when corret guesses = newObject number of fields



//=======================================  GAME OVER!!!!  ===========================================//
function gameOver(){
    // Display the letters on the screen
    startTextEl.style.display = "block";
    startTextEl.innerHTML = "GAME OVER!";
    guessWordEl.style.display = "none";
    wordDisplayEl.style.display = "none";
}


//=======================================  PLAY  ===========================================//
document.addEventListener("keyup", function(){
    var rightLetter
  
    // Turns the key into a string that is uppercase
    var guess = event.key;
      guess.toString();
      guess = guess.toUpperCase();
      console.log(`+++++++ GUESS ${guess} +++++++++`);
    
    function letterGuess() {
      
        //ADD LETTER TO THE GUESSED LETTERS ARRAY    
        guessedLetters.push(guess); 
            console.log("Letters Guessed so far: " + guessedLetters);
        

        
          // Display Letters Guessed
            function putLetter() {
            console.log("putLetter is trying to run");
            $(`[letter-is=${guess}]`).text(rightLetter);
            };
          

        //LOOP: check wordSplit[0] to see if the string === event.key 

            if (wordSplit.includes(guess)) {
              lastGuess = true;
              rightLetter = guess;
              putLetter();
            }
            else {lastGuess = false;}

            if (Object.keys(letterObj).includes(guess)) {
              letterObj[guess] = true
            }
            
            Object.values(letterObj).includes(false)
            



        // Rewards and Punishments!
        if (lastGuess === true) {console.log(`${guess} is in the word!`);}
        else {
            guessesLeft -= 1; 
            console.log(`${guess} is NOT in the word!`)
            console.log(`The user has ${guessesLeft} guess(es) left.`)
            };

        //End game if player continues to suck (Uses up all of her lives)
        if (guessesLeft > 1) {game = "play";}
        else if (guessesLeft == 1) {game = "play"; console.log("Last Guess!!")}
        else {
          console.log("GAME OVER!!!");
          gameOver();
        };
 

    }; //

    letterGuess()

});
startGame();
