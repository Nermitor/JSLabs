function f() {
    let arr = prompt('Введите числа').split(' ').map(Number);
    alert(Math.max(...arr));
    alert(arr.join(' больше, чем '));
}

function f1() {
    let arr = [
        {name: 'Меркурий', distance: 0.39},
        {name: 'Венера', distance: 0.72},
        {name: 'Земля', distance: 1},
        {name: 'Марс', distance: 1.52},
        {name: 'Юпитер', distance: 5.20},
        {name: 'Сатурн', distance: 9.54},
        {name: 'Уран', distance: 19.19},
        {name: 'Нептун', distance: 30.06}
    ];

    alert(arr
        .filter(({distance}) => distance <= 1)
        .map(({name}) => name)
        .join(', ')
    )
}

function f2(){
    let arr = [
        {name: 'Иванов', height: 190, weight: 80},
        {name: 'Петров', height: 180, weight: 70},
        {name: 'Сидоров', height: 200, weight: 90},
        {name: 'Кузнецов', height: 195, weight: 85},
        {name: 'Николаев', height: 190, weight: 75},
        {name: 'Федоров', height: 185, weight: 70},
        {name: 'Васильев', height: 190, weight: 80},
        {name: 'Павлов', height: 195, weight: 85},
        {name: 'Семенов', height: 200, weight: 90},
    ];

    alert(arr
        .filter(({height, weight}) => height > 190 && weight < 80)
        .map(({name}) => name)
        .join(', ')
    )
}

function f3() {
    let arr = {
        'Яблоко': { weight: 0.5, calories: 100 },
        'Апельсин': { weight: 0.3, calories: 50 },
        'Банан': { weight: 0.2, calories: 80 },
        'Груша': { weight: 0.4, calories: 120 },
        'Виноград': { weight: 0.6, calories: 150 },
        'Киви': { weight: 0.7, calories: 200 },
        'Ананас': { weight: 0.8, calories: 180 },
    };

    let min = Infinity;
    let minIndexes;
    let products = Object.keys(arr);
    for (let i = 0; i < products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
            let product1 = arr[products[i]];
            let product2 = arr[products[j]];
            if (product1.calories + product2.calories < min) {
                min = product1.calories + product2.calories;
                minIndexes = [i, j];
            }
        }
    }

    let productName1 = products[minIndexes[0]];
    let productName2 = products[minIndexes[1]];
    let totalWeight = arr[productName1].weight + arr[productName2].weight;
    alert(productName1 + ' и ' + productName2 + ', суммарный вес: ' + totalWeight);
}

function f4() {
    // Тоже самое, что и f3, но стереть несколько строк 🙃 👨‍🦽
}