function f1() {
    const alphabet = {};

    for (let i = 0; i < 32; i++) {
        const letterCode = 1072 + i;
        const letter = String.fromCharCode(letterCode);
        alphabet[letter] = i + 1;
    }

    function encodeText(text) {
        return Array.from(text, letter => (letter.toLowerCase() in alphabet) ? alphabet[letter.toLowerCase()] : '').join(' ').trim();
    }

    function decodeText(encodedText) {
        return encodedText.split(' ').map(code => {
            for (const letter in alphabet) {
                if (alphabet[letter] === parseInt(code)) {
                    return letter;
                }
            }
            return '';
        }).join('');
    }

    const originalText = prompt('Введите любой текст');
    console.log('Исходный текст:', originalText);

    const encodedText = encodeText(originalText);
    console.log('Закодированный текст:', encodedText);

    const decodedText = decodeText(encodedText);
    const reversedText = decodedText.split('').reverse().join('');
    console.log('Раскодированный текст в обратном порядке:', reversedText);
}

function f2(){
    function decimalToBase(number, base) {
        if (number === 0) {
            return '0';
        }

        const digits = '0123456789ABCDEF';

        let result = '';
        while (number > 0) {
            const remainder = number % base;
            result = digits[remainder] + result;
            number = Math.floor(number / base);
        }

        return result;
    }

    const decimalNumber = parseInt(prompt('Введите натуральное число в десятичной системе:'));
    const targetBase = parseInt(prompt('Введите целевую систему счисления:'));

    const convertedNumber = decimalToBase(decimalNumber, targetBase);
    console.log(`Результат перевода числа ${decimalNumber} из десятичной системы в систему счисления по основанию ${targetBase}: ${convertedNumber}`);
}