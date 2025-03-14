// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
let userInput = document.querySelector('#userInput1');
let copy = document.querySelector('#copy');
let output = document.querySelector('.output'); 

// add an event listener on the target element
copy.addEventListener('click', handleClick);

// callback function to handle event
function handleClick(event) {
    output.textContent = userInput.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area
let userInput2 = document.querySelector('#userInput2');

// fetch JavaScript objects representing specific elements in the DOM
userInput2.addEventListener('input', handleInput);

let section = document.querySelector('#inputEventExample');
let output2 = document.createElement('div');
output2.setAttribute('class', 'output');
section.appendChild(output2);

// add an event listener on the target element
function handleInput(event) {
    output2.textContent = userInput2.value;
}

// callback function to handle event

