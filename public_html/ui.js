/*functions to draw the stick figure and the order the parts are drawn*/
function drawHead () {
  $('.draw-area').append( $('<div/>').addClass("body-part head") );
}
function drawTorso () {
  $('.draw-area').append(
      $('<div/>').addClass("body-part armbox").append(
          $('<div/>').addClass("body-part torso")));
  $('.draw-area').append(
      $('<div/>').addClass("body-part legbox").append(
          $('<div/>').addClass("body-part pelvis")));
} /*draws the left arm */
function drawLeftArm () {
 $('.armbox').prepend( $('<div/>').addClass("body-part leftarm") );
}
function drawRightArm () {
 $('.armbox').prepend( $('<div/>').addClass("body-part rightarm") );   
}
function drawLeftLeg () {
 $('.legbox').prepend( $('<div/>').addClass("body-part leftleg") );   
}
function drawRightLeg() {
 $('.legbox').prepend( $('<div/>').addClass("body-part rightleg") );   
}
var drawSequence = [ drawHead,drawTorso,drawLeftArm,drawRightArm,drawLeftLeg,drawRightLeg ];
function wrongLetter ( letter ) {
    $('#wrong-letters').append(
        $('<span/>').addClass('guessed-letter').text(letter));
}
/*function to reset the ui*/
function resetUI () {
    $('.body-part').remove();
    $('.guessed-letter').remove();
    $('.shown-letter').remove();
}
/*function to draw the word*/
function drawWord( answer ) {
    for ( i in answer ) {
	$('.word-display').append(
	    $('<span/>').addClass('shown-letter').html('&nbsp;'));
    }
}
/*function to update the word*/
function updateWord( answer ) {
    $k = $('.shown-letter:first');
    for ( i in answer ) {
	if ( answer.charAt(i) != '_' ) {
	    $k.text( answer.charAt(i) );
	} else { 
	    $k.html('&nbsp;');
	}
	$k = $k.next();
    }
}
