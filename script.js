let currentInput = '';
let operation = '';
let previousInput = '';
let result = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function setOperation(op) {
    if (currentInput === '') return; // Prevent operation if input is empty
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay('0');
}

function applyFunction(func) {
    if (currentInput === '') return;
    let num = parseFloat(currentInput);
    switch (func) {
        case 'sqrt':
            currentInput = Math.sqrt(num).toString();
            break;
        case 'sin':
            currentInput = Math.sin(degreesToRadians(num)).toString();
            break;
        case 'cos':
            currentInput = Math.cos(degreesToRadians(num)).toString();
            break;
        case 'tan':
            currentInput = Math.tan(degreesToRadians(num)).toString();
            break;
        case 'log':
            currentInput = Math.log10(num).toString();
            break;
        case 'ln':
            currentInput = Math.log(num).toString();
            break;
        default:
            break;
    }
    updateDisplay(currentInput);
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;

    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    previousInput = '';
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
