function resetGame () {
    resetUI();
    gameAnswer = chooseWord();
    gameShownAnswer = blanksFromAnswer(gameAnswer);
    hangmanState = 0;
    drawWord(gameShownAnswer);

}/* When you win you get the word and a explaination of what the word is and how it is used */
$(document).ready(resetGame);
function win () {
if (gameShownAnswer == 'boolean') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nBoolean is a data type in JavaScript.");
} else if (gameShownAnswer == 'function') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nA JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when something invokes it (calls it).");
} else if (gameShownAnswer == 'string') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nJavaScript strings are used for storing and manipulating text.");
} else if (gameShownAnswer == 'array') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nJavaScript arrays are used to store multiple values in a single variable.");
} else if (gameShownAnswer == 'loop') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nLoops can execute a block of code a number of times. There are different types of loops. For example (For-loop) & (While-loop)");
} else if (gameShownAnswer == 'math') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nThe Math object allows you to perform mathematical tasks on numbers.");
} else if (gameShownAnswer == 'numbers') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nJavaScript has only one type of number. Numbers can be written with, or without, decimals.");
} else if (gameShownAnswer == 'methods') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nJavaScript methods are the actions that can be performed on objects. A JavaScript method is a property containing a function definition.");
} else if (gameShownAnswer == 'body') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nThe text between <body> and </body> describes the visible page content");
} else if (gameShownAnswer == 'elements') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nHTML documents are made up by HTML elements.");
} else if (gameShownAnswer == 'attributes') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nAttributes provide additional information about HTML elements.");
} else if (gameShownAnswer == 'paragraphs') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nHTML documents are divided into paragraphs.");
} else if (gameShownAnswer == 'class') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nThe class selector selects elements with a specific class attribute.");
} else if (gameShownAnswer == 'float') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nWith CSS float, an element can be pushed to the left or right, allowing other elements to wrap around it.");
} else if (gameShownAnswer == 'font') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nCSS font properties define the font family, boldness, size, and the style of a text.");
} else if (gameShownAnswer == 'border') {
    sweetAlert('You win!\n' + "The correct word is: " + gameShownAnswer + "\n\nThe CSS border properties allow you to specify the style, size, and color of an element's border.");
}
/* Resets the game if you loose */
resetGame() ;}
function lose () { sweetAlert('You lose, try again!'); resetGame(); }
function doKeypress () {
    var tempChar = $('#letter-input').val().toLowerCase();
    var tempString = "";
    $('#letter-input').val("");

    // This happens if you win
    tempString = guessLetter( tempChar, gameShownAnswer, gameAnswer );
    if ( tempString != gameShownAnswer ) {
        updateWord( tempString );
        gameShownAnswer = tempString;
        if ( gameShownAnswer === gameAnswer ) {
            win();
        }
    } else {   // This will happen if you loose
        wrongLetter(tempChar);
        drawSequence[ hangmanState++ ]();
        if ( hangmanState === drawSequence.length ) {
            lose();
        }
    }
}
$('#letter-input').keyup( doKeypress );
