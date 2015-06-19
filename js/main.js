/* var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;

if (firstName == "General" && lastName != "Assembly") {
	console.log('Hello ' + fullName);
}

var faveColour = prompt('What is your fave colour?').toLowerCase();

if (faveColour == 'red' || 
	faveColour == 'blue' ||
	faveColour == 'green' ||
	faveColour == 'yellow') {
	$('h1').css('color', faveColour);
} else {
	$('h2').text('Sorry - we don\'t have that colour!');
}

var userAge = prompt('How old are you?');
userAge = parseInt(userAge);

if (userAge >= 18) {
	console.log('Welcome!');
} 
else {
	console.log('Go away child!');
}

*/




/* $ means jquery, e.g. 'do this stuff' between the two curly brackets. 
Whereas normal brackets are about identifying parts of the page to do things to (rather than the action). 
Semi colon means end */

/* comments in jQuery in TWO ways, // or /* as in CSS */

// When the page has loaded
$(function() {

	// Hide the sections first
	$('h3').next().hide();

// When the user clicks an h3
	$('h3').on('click', function() {

		// Toggle class of 'open' (which will change the + to -)
		$(this).toggleClass('open');

		// Hide the next element
		$(this).next().slideToggle(1000);


	});

});