const fs = require('fs');
const userFile = 'user.json';

function loadUser() {
    try {
        const dataBuffer = fs.readFileSync(userFile);
        const userJSON = dataBuffer.toString();
        return JSON.parse(userJSON);
    } catch (e) {
        return {};
    }
}

function saveUser(user) {
    const userJSON = JSON.stringify(user);
    fs.writeFileSync(userFile, userJSON);
}

function addLanguage(title, level) {
    const user = loadUser();
    const newLanguage = { title, level };
    user.languages.push(newLanguage);
    saveUser(user);
    console.log('Language added successfully.');
}

function removeLanguage(title) {
    const user = loadUser();
    user.languages = user.languages.filter(language => language.title !== title);
    saveUser(user);
    console.log('Language removed successfully.');
}

function listLanguages() {
    const user = loadUser();
    user.languages.forEach((language, index) => {
        console.log(`${index + 1}. ${language.title} - ${language.level}`);
    });
}

function readLanguage(title) {
    const user = loadUser();
    const language = user.languages.find(language => language.title === title);
    if (language) {
        console.log(`Language: ${language.title}`);
        console.log(`Level: ${language.level}`);
    } else {
        console.log('Language not found.');
    }
}

module.exports = {
    addLanguage,
    removeLanguage,
    listLanguages,
    readLanguage
};
