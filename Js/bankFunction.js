// Utility functions

const elementFromInput = function(inputElement) {
    const inputString = document.getElementById(inputElement);
    const inputValue = inputString.value;
    const inputNumber = parseFloat(inputValue);
    inputString.value = '';
    return inputNumber;
}

const elementFromTag = function (tagElement) {
    const tagString = document.getElementById(tagElement).innerText;
    const tagNumber = parseFloat(tagString);
    return tagNumber;
}

const setTextElement = function (element, value) {
    const textElement = document.getElementById(element);
    textElement.innerText = value;
}

// Deposit functionality

document.getElementById('btn-deposit').addEventListener('click', function() {
    const currentDeposit = elementFromInput('deposit-field');
    const previousDeposit = elementFromTag('deposit-total');
    const totalDeposit = currentDeposit + previousDeposit;
    setTextElement('deposit-total', totalDeposit);
    const previousBalance = elementFromTag('balance-total');
    const totalBalance = previousBalance + currentDeposit;
    setTextElement('balance-total', totalBalance);
});

// Withdraw Functionality

document.getElementById('btn-withdraw').addEventListener('click', function() {
    const currentWithdraw = elementFromInput('withdraw-field');
    const previousWithdraw = elementFromTag('withdraw-total');
    const totalWithdraw = currentWithdraw + previousWithdraw;
    setTextElement('withdraw-total', totalWithdraw);
    const previousBalance = elementFromTag('balance-total');
    const totalBalance = previousBalance - currentWithdraw;
    setTextElement('balance-total', totalBalance);
});