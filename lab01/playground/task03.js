const os = require('os');

const userName = os.userInfo().username;

const greeting = `Hello, ${userName}!`;

console.log(greeting);
const fs = require('fs');
fs.writeFile('task03.txt', greeting, (err) => {
    if (err) throw err;
    console.log('Привітання успішно записано в файл.');
});