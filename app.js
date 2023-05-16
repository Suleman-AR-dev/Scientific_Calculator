let currentExpression = '';

function appendCharacter(character) {
    currentExpression += character;
    document.getElementById('result').value = currentExpression;
}

function deleteCharacter() {
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById('result').value = currentExpression;
}

function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    const result = eval(currentExpression);
    document.getElementById('result').value = result;
    currentExpression = '';
}
