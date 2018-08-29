// First, change the class of the quarters so that they light up to their
// respective different colors, but only for a very limited time, then
// the class will have to be removed and the colors will have to go back
// to their original state
const toggleButtonColor = el => {
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
const getRandButton = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}


// get buttons
const buttons = document.querySelectorAll('.quarter');

// only light up buttons when mouse is pressed on them (or keys, later)
buttons.forEach(button => {
    // maybe these two things should be put into a single function
    button.addEventListener('mousedown', () => toggleButtonColor(button));
    button.addEventListener('mouseup', () => toggleButtonColor(button));
});

const lightUpList = [];

//function callEverySecond() {
    // call a function once a second
    setTimeout(() => console.log('hey'), 500);
//}