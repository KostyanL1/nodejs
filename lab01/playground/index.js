const _ = require("lodash");


const numbers = process.argv.slice(2).map(Number);

if (numbers.length === 0 || numbers.some(isNaN)) {
    console.log('Не введено жодних чисел або введені дані не є числами. Введіть числа через консоль при запуску додатку.');
} else {
    // 1. _.chunk(): Розбиває масив на підмасиви заданого розміру
    const chunkedArray = _.chunk(numbers, 2);
    console.log('Chunked Array:', chunkedArray);

    // 2. _.map(): Створює новий масив, застосовуючи функцію до кожного елемента оригінального масиву
    const mappedArray = _.map(numbers, num => num * 2);
    console.log('Mapped Array:', mappedArray);

    // 3. _.filter(): Фільтрує масив, залишаючи тільки ті елементи, які задовольняють умову
    const filteredArray = _.filter(numbers, num => num % 2 === 0);
    console.log('Filtered Array:', filteredArray);

    // 4. _.sum(): Обчислює суму всіх елементів масиву
    const sum = _.sum(numbers);
    console.log('Sum:', sum);

    // 5. _.sortBy(): Сортує масив за значенням, що повертає функція
    const sortedArray = _.sortBy(numbers, num => -num); // Сортування у зворотньому порядку
    console.log('Sorted Array:', sortedArray);
}
