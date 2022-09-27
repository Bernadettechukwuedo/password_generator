const range = document.getElementById('range');
const number = document.getElementById('number');
const button = document.getElementById('generatorbutton');
const upperCase = document.getElementById('uppercase');
const formNumber = document.getElementById('num');
const formSymbol = document.getElementById('symbols');
const passwordDisplay = document.getElementById('display');
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(35, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

number.addEventListener('input', syncAmount);
range.addEventListener('input', syncAmount);
button.addEventListener('submit', e => {
    e.preventDefault();
    const amount = number.value;
    const uppercase = upperCase.checked;
    const num = formNumber.checked;
    const symbols = formSymbol.checked;
    const password = generatePassword(amount, uppercase, num, symbols);
    passwordDisplay.innerText = password
})

function generatePassword(amount, uppercase, num, symbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (num) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (symbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
    const passwordCharacters = []
    for (let i = 0; i < amount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
function syncAmount(e) {
    const value = e.target.value
    number.value = value
    range.value = value

}