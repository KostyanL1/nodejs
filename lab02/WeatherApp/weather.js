const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    let weatherData = null;
    let error = null;

    if (city) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f4fb4f349e11b4f6b154bcbaac5368b&lang=uk&units=metric`);
            weatherData = response.data;
        } catch (err) {
            error = 'Помилка отримання даних про погоду';
            console.error(error, err);
        }
    }

    res.render('weatherApp', { weatherData, error });
});

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}/weather`);
});