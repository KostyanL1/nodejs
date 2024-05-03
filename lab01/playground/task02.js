const fs = require('fs');

const lineToAdd = "Hello, World!\n";

fs.appendFile('task2.txt', lineToAdd, (err) => {
    if (err) throw err;
    console.log('Рядок успішно додано до файлу.');
});
