function f1() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Number(prompt('Enter number ' + (i + 1)));
    }
    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function f2() {
    let text = prompt('Введите текст');
    text = text.replace('Вася', 'Алексей');
    alert(text);
}

function f3() {
    let text = prompt('Введите текст');
    let arr = text.split(' ');
    const words = [
        'Автомобиль', 'Банан', 'Велосипед', 'Гитара',
        'Дом', 'Еж', 'Жираф', 'Зебра',
        'Игра', 'Кот', 'Лампа', 'Море',
        'Ноутбук', 'Окно', 'Птица', 'Ручка',
        'Солнце', 'Телефон', 'Утка', 'Фламинго'
    ];
    let encryptedText = arr.map(word => {
        let randomWord1 = words[Math.floor(Math.random() * words.length)];
        let randomWord2 = words[Math.floor(Math.random() * words.length)];
        return randomWord1 + ' ' + randomWord2 + ' ' + word + ' ';
    }).join('');
    alert(encryptedText);
    let decryptedText = encryptedText.split(' ').filter((_, index) => (index + 1) % 3 === 0).join(' ');
    alert(decryptedText);
}

function f4() {
    let arr = prompt('Введите координаты концов отрезка').split(' ');
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
    let length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    alert(length);
}

function f5() {
    let phrases = [
        'Звучит неплохо',
        'Да, это определенно надо сделать',
        'Не думаю, что это хорошая идея',
        'Может, не сегодня?',
        'Компьютер говорит нет'
    ];
    let question = prompt('Введите вопрос');
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    alert(randomPhrase);
}

function f6() {
    let dictionary = [
        ['car', 'машина'],
        ['computer', 'компьютер'],
        ['table', 'стол'],
        ['book', 'книга'],
        ['phone', 'телефон'],
        ['computer', 'компьютер'],
        ['book', 'книга'],
        ['computer', 'компьютер'],
        ['book', 'книга'],
        ['computer', 'компьютер']
    ];
    let phrase = prompt('Введите фразу');
    let translatedPhrase = phrase.split(' ').map(word => {
        let translation = dictionary.find(entry => entry[0] === word);
        return translation ? translation[1] : '?';
    }).join(' ');
    alert(translatedPhrase);
}