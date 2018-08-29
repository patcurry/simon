// First, change the class of the quarters so that they light up to their
// respective different colors, but only for a very limited time, then
// the class will have to be removed and the colors will have to go back
// to their original state
function toggleButtonColor(el) {
    // when the 'light' class is added the css takes care of the color
    // the element will display
    el.classList.toggle('light');
}

// how do I make a function that randomly selects one of the four
// buttons, turns the light on and off, then waits, and on the next
// time it is run it selects another button to light up, then another
// and another, and so on

// here's the random selector thing
// var item = buttons[Math.floor(Math.random()*buttons.length)];

// this function should return one random item from an array
function getRandButton(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// this function pushes the random button from one list to
// another list, does this need to be a function?
function addButtonToLightUpList(fromArray, toArray) {
    toArray.push(getRandButton(fromArray));
}

function clearLightUpList(arr) {
    // this is not good functional programming, I should
    // pop everything out of the list or something. Right now
    // I'm just replacing the list with an empty list. 
    return arr =[];
}

// get buttons
var buttons = document.querySelectorAll('.quarter');

// get test button
var testButton = document.getElementById('test-button');

// make the list that will hold all the buttons in the right order
// should it be something else? Is there an ordered list in JS?
// this should be an ES6 Map object... how can I make that ok for 
// old skool browsers?
var lightUpList = [];

// only light up buttons when mouse is pressed on them (or keys, later)
buttons.forEach(function(button) {
    // maybe these two things should be put into a single function
    button.addEventListener('mousedown', function() {toggleButtonColor(button)});
    button.addEventListener('mouseup', function() {toggleButtonColor(button)});
});


// add random button to light up list and console log the list every time
// the test button is pressed



testButton.addEventListener('click', function() { 
    addButtonToLightUpList(buttons, lightUpList);
    console.log(lightUpList);
});
