// turns out this is a really common one for people to code (of course) I just didn't check when
// I had the idea. I just took a glance at a couple others. Seems like one thing I would benefit
// from here is a state container. I refuse to look at other people solutions until I finish
// mine.

// What do I need to remember?
// the elements
// the order of the elements as they are selected randomly
// i think that would also indicate the 

var gameState = {
    buttons: [], // populated by forEach query selector thing
    simonsList: [], // this will hold the randomly selected list
    userPressIndex: 0 // just going to increment this when the user hits buttons
}

function timedToggleClassOnAndOff(el) {
    // toggle on
    el.classList.toggle('light');

    // toggle off with anonymous function
    setTimeout(function () {
        el.classList.toggle('light');
    }, 400);
}

// this function should return one random item from an array
function getRandButton(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// this function pushes the random button element from one list to
// another list, does this need to be a function?
function addButtonToSimonsList(fromArray, toArray) {
    toArray.push(getRandButton(fromArray));
}

function incrementallyAddRandomButtonToList(fromArray, toArray) {
    // get random button
    var b = getRandButton(fromArray);
    // add it to list
    toArray.push(b);
    // light it up for a little bit (and also play sound, when that is possible)
    timedToggleClassOnAndOff(b);
}



// function to check if button is same as simonsList[index]
function checkPressedButton(b) {
    return b === gameState.simonsList[gameState.userPressIndexindex] ? true : false;
}

// I don't really want to take two arguements here...
function lightOnOffAndIncrement(b, arr) {
    // toggle 'light' class on
    b.addEventListener('mousedown', function () {
        b.classList.toggle('light');
    });

    // toggle 'light' class off
    b.addEventListener('mouseup', function () {
        b.classList.toggle('light');
    });

    // increment the userPressIndex
    b.addEventListener('click', function () {
        console.log(b);
        //console.log(checkPressedButton(b));
        gameState.userPressIndex++;
    });
}


// get buttons
gameState.buttons = document.querySelectorAll('.quarter');

// get test button
var testButton = document.getElementById('test-button');
var checkButton = document.getElementById('check-button');


// only light up buttons when mouse is pressed on them (or keys, later)
gameState.buttons.forEach(function (button) {
    lightOnOffAndIncrement(button);
    // I don't like the way this is coded
//    button.addEventListener('click', function() { 
//       console.log(checkPressedButton(button, gameState.simonsList, gameState.userPressIndex));
 //   });
});


// add random button to light up list and console log the list every time
// the test button is pressed

testButton.addEventListener('click', function () {
    addButtonToSimonsList(gameState.buttons, gameState.simonsList);
    console.log(gameState.simonsList);
});

// this doesn't work anymore because I've removed the check arrays against eachother
// thing now it has to check if the element is the same as the one in the array
// index
checkButton.addEventListener('click', function () {
    console.log(arraysEqual(gameState.simonsList, userButtonList));
});







// pulled this off stack overflow it checks if the arrays 
// have the same elements in the same orders
// this needs to be changed so that it gets the index of the button presses
// as in one press is index of 0, then two presses is index of 1, etc.
// then check that element, on the press, against the element of the same
// index in array 2
function arraysEqual(_arr1, _arr2) {
    // looks like if array 1 is not an array, or array 2 is not an array, or if array 1 length
    // is not equal to array two length, return false
    if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length)
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