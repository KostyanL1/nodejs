const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get('/weather', (req, res) => {
    const weather = {
        description: "Clear sky"
    };
    res.render('weather', { weather });
});

app.get("/weather/:city", (req, res) => {
    const city = req.params.city;
    const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
    res.send(cityName);
});

app.get("/weather", (req, res) => {
    const city = req.query.city;
    const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
    res.send(cityName);
});

app.get('/login', (req, res) => {
    res.send("Login page");
});

app.get('/', (req, res) => {
    res.render('index');
});

// Сервер слухає порт 3000
app.listen(3000, () => {
    console.log("Example app listening on port 3000");
});
