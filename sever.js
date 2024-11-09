const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./models/order');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/restaurant', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Маршрут для отдачи статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для приема заказов
app.post('/api/order', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).send({ message: 'Заказ успешно сохранен' });
    } catch (error) {
        res.status(500).send({ message: 'Ошибка при сохранении заказа' });
    }
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
