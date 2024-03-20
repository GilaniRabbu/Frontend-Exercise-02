const DisplayOutput = document.getElementById('display');

function appendToDisplay(input) {
    DisplayOutput.value += input;
}

function calculate() {
    try {
        DisplayOutput.value = eval(DisplayOutput.value);
    }
    catch (error) {
        DisplayOutput.value = 'Syntax Error';
    }
}

function clearDisplay() {
    DisplayOutput.value = '';
}