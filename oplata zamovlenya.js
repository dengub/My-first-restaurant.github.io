// Цены на каждое блюдо
const dishPrices = {
    "Паштет із лосося": 320,
    "Лосось Татакі": 370,
    "Тартар із лосося": 495,
    "Тартар з тунця": 480,
    "Карпаччо з яловичини": 540,
    "Креветки в льоду": 550,
    "Севіче з дорадо": 450,
    "Мікс із сирів": 460,
    "Альмавар з теплом і сиром": 285,
    "Креветки з соусом": 350,
    "Фондю з сиром": 400,
    "Гарячий тартар з тунця": 520,
    "Курячі крильця з медом": 320,
    "Карпаччо из лосося": 400,
    "Мідії в вершковому соусі": 430,
    "Філе качки в соусі": 540,
    "Салат 'Моцарела | томати'": 350,
    "Салат 'Лосось | авокадо'": 420,
    "Салат з креветками i диким тунцем": 600,
    "Салат з куркою": 350,
    "Салат з авокадо та шпинатом": 380,
    "Цезар з куркою": 450,
    "Салат 'Грецький'": 320,
    "Салат з телятиною": 390,
    "ТОМ ЯМ": 450,
    "Бульон з курячою грудкою": 260,
    "Суп місо": 220,
    "Крем-суп з грибами": 310,
    "Курячий суп з локшиною": 270,
    "Рибний бульйон": 330,
    "Борщ з пампушками": 250,
    "Овочі Гриль": 200,
    "Рис з овочами": 250,
    "Картопля фрі": 180,
    "Пюре картопляне": 190,
    "Різотто з грибами": 270,
    "Гречка": 160,
    "Паста з овочами": 240,
    "Паста 'Карбонара'": 295,
    "Ризотто з морепродуктами": 260,
    "Паста Болоньєзе": 320,
    "Ризотто з грибами": 330,
    "Паста з креветками": 400,
    "Паста Альфредо": 350,
    "Ризотто з трюфелем": 490,
    "Фісташковий Тірамісу": 240,
    "Кокосовий Чізкейк": 200,
    "Шоколадний фонтан": 180,
    "Профітролі з кремом": 220,
    "Торт Наполеон": 260,
    "Яблучний штрудель": 210,
    "Фрукти асорті": 300,
    "Малиновий": 110,
    "Томатний": 110,
    "Чорна Смородина": 110,
    "Яблучний": 110,
    "Апельсиновий": 110,
    "Вишневий": 110,
    "Мультивітамін": 110
};

// Функция для расчета общей стоимости
function calculateTotal() {
    const dishSelect = document.getElementById("dish");
    const quantityInput = document.getElementById("quantity");
    const totalPriceElement = document.getElementById("totalPrice");

    const selectedDish = dishSelect.value;
    const quantity = parseInt(quantityInput.value) || 0;
    const dishPrice = dishPrices[selectedDish] || 0;

    const totalPrice = dishPrice * quantity;
    totalPriceElement.textContent = `${totalPrice} грн.`;
}

// Добавление обработчика изменения количества или блюда
document.getElementById("dish").addEventListener("change", calculateTotal);
document.getElementById("quantity").addEventListener("input", calculateTotal);

// Обработчик отправки формы
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const messageElement = document.getElementById("message");
    const dish = document.getElementById("dish").value;
    const quantity = parseInt(document.getElementById("quantity").value) || 0;
    const customerName = document.querySelector("[name='customerName']").value.trim();
    const address = document.querySelector("[name='address']").value.trim();
    const phone = document.querySelector("[name='phone']").value.trim();
    const totalPrice = document.getElementById("totalPrice").textContent;

    let errorMessage = "";

    // Валидация имени
    if (!/^[A-Za-zА-Яа-яЁё\s]{2,}$/.test(customerName)) {
        errorMessage += "Введите корректное имя (только буквы, минимум 2 символа).<br>";
    }

    // Валидация адреса
    if (address.length < 10) {
        errorMessage += "Адрес должен содержать не менее 10 символов.<br>";
    }

    // Валидация телефона
    if (!/^(\+?\d{1,3}[- ]?)?\d{10}$/.test(phone)) {
        errorMessage += "Введите корректный номер телефона (например, +380123456789).<br>";
    }

    // Проверка выбора блюда и количества
    if (!dish) {
        errorMessage += "Выберите блюдо из списка.<br>";
    }
    if (quantity <= 0) {
        errorMessage += "Введите корректное количество порций.<br>";
    }

    // Вывод сообщения об ошибках или успешной отправке
    if (errorMessage) {
        messageElement.innerHTML = errorMessage;
        messageElement.style.color = "red";
    } else {
        messageElement.innerHTML = "Форма успешно отправлена!";
        messageElement.style.color = "green";

        // Вывод финального чека
        const finalReceipt = `
            <strong>Чек:</strong><br>
            Блюдо: ${dish}<br>
            Количество порций: ${quantity}<br>
            Имя: ${customerName}<br>
            Адрес: ${address}<br>
            Телефон: ${phone}<br>
            <strong>Общая стоимость: ${totalPrice}</strong>
        `;
        document.getElementById("finalReceipt").innerHTML = finalReceipt;
    }
});





