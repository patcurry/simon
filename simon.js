// First, change the class of the quarters so that they light up to their
// respective different colors, but only for a very limited time, then
// the class will have to be removed and the colors will have to go back
// to their original state
function toggleButtonColor(el) {
    // when the 'light' class is added the css takes care of the color
    // the element will display
    el.classList.toggle('light');
}

// pulled this off stack overflow it checks if the arrays 
// have the same elements in the same orders
// this needs to be changed so that it gets the index of the button presses
// as in one press is index of 0, then two presses is index of 1, etc.
// then check that element, on the press, against the element of the same
// index in array 2
function arraysEqual(_arr1, _arr2) {
    // looks like if array 1 is not an array, or array 2 is not an array, or if array 1 length
    // is not equal to array two length, return false
    if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
      return false;
    // new array 1 = array1 concatenated and sorted... I do not understand why they are doing this.
    var arr1 = _arr1.concat().sort();
    var arr2 = _arr2.concat().sort();

    // for each element in the array, check if it is equal to the element of the same
    // index in the other array
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) // <-- here's the important part of the function
            return false;
    }

    // there needs to be an incrementer that can be used to check the correct element
    // in another array, maybe there should just be an index as a third argument for this
    // whole function
      
    return true;
}

// this function should return one random item from an array
function getRandButton(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// this function pushes the random button element from one list to
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

function timedToggleClassOnAndOff(el) {
    // toggle on
    toggleButtonColor(el);
    // toggle off with anonymous function
    setTimeout(function() {
        toggleButtonColor(el)
    }, 400);
}

// function that gets a random button to start, adds it to a list
// lights up the button element for a little bit, then waits
// for the user to start pressing buttons in the correct order
function incrementallyAddRandomButtonToList(fromArray, toArray) {
    // get random button
    var b = getRandButton(fromArray);

    // add it to list
    toArray.push(b);

    // light it up for a little bit (and also play sound, when that is possible)
    timedToggleClassOnAndOff(b);
}

// I don't really want to take two arguements here...
function lightOnOffAndAddButtonToList(b, arr) {
    // toggle 'light' class on
    b.addEventListener('mousedown', function() {toggleButtonColor(b)});
    // toggle 'light' class off
    b.addEventListener('mouseup', function() {toggleButtonColor(b)});
    // add element to list
    b.addEventListener('click', function() {
        arr.push(b);
        console.log(arr);
    });
}

// get buttons
var buttons = document.querySelectorAll('.quarter');

// get test button
var testButton = document.getElementById('test-button');
var checkButton = document.getElementById('check-button');

// make the list that will hold all the buttons in the right order
// should it be something else? Is there an ordered list in JS?
// this should be an ES6 Map object... how can I make that ok for 
// old skool browsers?
var lightUpList = [];
var userButtonList = [];

// only light up buttons when mouse is pressed on them (or keys, later)
// is .forEach es6?
buttons.forEach(function(button) {
    // maybe these two things should be put into a single function
    // with the add button to list thing
//    button.addEventListener('mousedown', function() {toggleButtonColor(button)});
//    button.addEventListener('mouseup', function() {toggleButtonColor(button)});
 //   usersButtonList.push(button);
    lightOnOffAndAddButtonToList(button, userButtonList); 
});

// add random button to light up list and console log the list every time
// the test button is pressed

testButton.addEventListener('click', function() { 
    addButtonToLightUpList(buttons, lightUpList);
    console.log(lightUpList);
});

checkButton.addEventListener('click', function() {
    console.log(arraysEqual(lightUpList, userButtonList));
});