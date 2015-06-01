var words = ['class','float','font','border']; // Array containing the words

/* functions to choose word */
function chooseWord () {
    return words[Math.floor(Math.random() * words.length)];
}

/* function to write the same number of _ as there are letters in the word */
function blanksFromAnswer ( answerWord ) {
    var result = "";
    for ( i in answerWord ) {
        result = "_" + result;
    }
    return result;
}

/* Changes the underscore to the appropriate letter */
function alterAt ( n, c, originalString ) {
    return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
}

/* shows the guessed letter */
function guessLetter( letter, shown, answer ) {
    var checkIndex = 0;

    checkIndex = answer.indexOf(letter);
    while ( checkIndex >= 0 ) {
        shown = alterAt( checkIndex, letter, shown );
        checkIndex = answer.indexOf(letter, checkIndex + 1);
    }
    return shown;
}