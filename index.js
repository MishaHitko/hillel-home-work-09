const trueNum = (text) => {
    let num = 0;
    do {
        num = +prompt(text);
    } while (num >= 0 && isNaN(num))
    return num;
}
const numbersElement = trueNum('Введите количество елементов в массиве');
const numbers = [];
for (let count = 0; count < numbersElement; count++) {
    const numberUser = trueNum('Введите елемент массива');
    numbers.push(numberUser);
}
console.log('Массив пользователя', numbers);

const cortNumbers = numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log('Отсортированный массив', cortNumbers);

numbers.splice(1, 3);
console.log('Массив с удаленными елементами', numbers);

