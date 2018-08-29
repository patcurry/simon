// First, change the class of the quarters so that they light up to their
// respective different colors, but only for a very limited time, then
// the class will have to be removed and the colors will have to go back
// to their original state
function toggleButtonColor(el) {
    // when the 'light' class is added the css takes care of the color
    // the element will display
    el.classList.toggle('light');
}

// I need to have a button that adds elements to a list
// then that list can be checked against the random button list

// does this need to be a function?
// no
/*
function addButtonToListOnPress(b, arr) {
    return arr.push(b);
}
*/

function lightOnOffAndAddButtonToList(b, arr) {
    // toggle on
    b.addEventListener('mousedown', function() {toggleButtonColor(b)});
    // toggle off
    b.addEventListener('mouseup', function() {toggleButtonColor(b)});
    // add button to list
    b.addEventListener('click', function() {
        arr.push(b);
        console.log(arr);
    });
}

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
var checkButton = document.getElementById('check-button');

// make the list that will hold all the buttons in the right order
// should it be something else? Is there an ordered list in JS?
// this should be an ES6 Map object... how can I make that ok for 
// old skool browsers?
var lightUpList = [];
var userButtonList = [];

// only light up buttons when mouse is pressed on them (or keys, later)
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


// pulled this off stack overflow
// seems to also check orders
function arraysEqual(_arr1, _arr2) {

    // looks like if array 1 is not an array, or array 2 is not an array, or if array 1 length
    // is not equal to array two length, return false
    if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
      return false;

    // new array 1 = array1 concatenated and sorted... I do not understand why this is happening
    
    var arr1 = _arr1.concat().sort();
    var arr2 = _arr2.concat().sort();
    

    // seems to work the same with this, but going to leave it with what was written
    // before
    /*
    var arr1 = _arr1;
    var arr2 = _arr2;
    */

    // can this be written in a different way?
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}


testButton.addEventListener('click', function() { 
    addButtonToLightUpList(buttons, lightUpList);
    console.log(lightUpList);
});

checkButton.addEventListener('click', function() {
    console.log(arraysEqual(lightUpList, userButtonList));
});