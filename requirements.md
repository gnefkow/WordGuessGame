#### Word Guess Game (Challenge - Recommended)


# Display on page:
    * "Press any key to start"
    * Letter blanks
    * Wins + Losses

# Press a key to start
    * Use an event listener for this

-------

## GUESS LETTERS
# Word List
    * should be a list of words for the user to guess
    (Probably as an array or an object)

# Randomly pick a word from the word list

# Display the appropriate number of letters from the word list
    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
    * use the .length SOMETHING (I don't know what this is called. Dot Operator?)
    


# Figure out if the array includes the letter
    * use "includes() method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

# Display already guessed letters

# Display correctly guessed letters
    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
    * if key-input === [letter] then change the display to that letter

# Log a "win" if the letters are all guessed

-------

## Kill the player
# Create a counter with an initial value
    Number of Guesses Remaining: (# of guesses remaining for the user).
    var guesses
# Reduce the value for each guess
    * on key-up when NOT guess a previous letter, reduce the lives variable
# When lives = 0, Game Over

-------

## Restart
# log the win
# log the loss
# Trigger the restart


--------------------------------------------------------------------------------------------------------









##### Word Guess Game Bonuses

1. Play a sound or song when the user guesses their word correctly, like in our demo.
2. Write some stylish CSS rules to make a design that fits your game's theme.
3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
4. Save your whole game and its properties in an object.
5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
6. Don't forget to place your global variables and functions above your object.
   * Remember: global variables, then objects, then calls.
7. Definitely talk with a TA or your instructor if you get tripped up during this challenge.



## NOTES
1. [Watch the demo](https://youtu.be/W-IJcC4tYFI).