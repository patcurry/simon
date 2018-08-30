var gameState = {
    buttons: [],
    simonsList: [],
    round: 0,
    userPressIndex: 0
}

// get buttons
gameState.buttons = document.querySelectorAll('.quarter');


function getRandButton(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function timedToggleClassOnAndOff(el) {
    // toggle on
    el.classList.toggle('light');

    // toggle off with anonymous function
    setTimeout(function () {
        el.classList.toggle('light');
    }, 400);
}

function addButtonToSimonsList(fromArray, toArray) {
    // get random button
    var b = getRandButton(fromArray);
    // add it to list
    toArray.push(b);
    // light it up for a little bit (and also play sound, when that is possible)
    timedToggleClassOnAndOff(b);
}

// pretty bad can be refactored i guess
// calls new game
function newGame() {
    // reset game
    gameState.simonsList = [];
    gameState.round = 0;
    gameState.userPressIndex = 0;

    // add one button to simon's list and light it up
    addButtonToSimonsList(gameState.buttons, gameState.simonsList);

    console.log('new game', gameState.simonsList);
}



// function to check if button is same as simonsList[index]
function checkPressedButton(b) {
    return b === gameState.simonsList[gameState.userPressIndex] ? true : false;
}

// I don't really want to take two arguements here...
function lightOnOffAndIncrement(b) {
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
        console.log(checkPressedButton(b));
        gameState.userPressIndex++;
    });
}


// get test button
var testButton = document.getElementById('test-button');
var checkButton = document.getElementById('check-button');


// only light up buttons when mouse is pressed on them (or keys, later)
gameState.buttons.forEach(function (button) {
    //checkPressedButton(button);
    lightOnOffAndIncrement(button);
});


// the game is set with this. make this stuff into function that gets called
// when the user press index is the length - 1 of simon's list
testButton.addEventListener('click', function () {
    // increment round
    gameState.round = 1;

    // reset user press index
    gameState.userPressIndex = 0;
    addButtonToSimonsList(gameState.buttons, gameState.simonsList);
    console.log(gameState.simonsList);
});

// this doesn't work anymore because I've removed the check arrays against eachother
// thing now it has to check if the element is the same as the one in the array
// index
checkButton.addEventListener('click', function () {
    console.log(arraysEqual(gameState.simonsList, userButtonList));
});



newGame();



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