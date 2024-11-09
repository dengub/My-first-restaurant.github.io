function validateForm(event) {
    event.preventDefault(); // Предотвращает отправку формы

    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    // Регулярное выражение для проверки номера телефона
    const phonePattern = /^\+?[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        message.style.color = "red";
        message.textContent = "Введите корректный номер телефона.";
        return false;
    }

    // Проверка корректности email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
        message.style.color = "red";
        message.textContent = "Введите корректный адрес электронной почты.";
        return false;
    }

    // Если все данные корректны
    message.style.color = "green";
    message.textContent = "Бронирование столика успешно отправлено!";
    return true;
}

function setLanguage(lang) {
    // Получаем все элементы, у которых есть атрибуты для разных языков
    const elements = document.querySelectorAll('[data-lang-uk], [data-lang-ru], [data-lang-en]');
    
    elements.forEach(element => {
        // Устанавливаем текст для каждого элемента в зависимости от выбранного языка
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });
}
function loadTranslations(language) {
  fetch(`${language}.json`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('welcome').innerText = data.welcome;
      document.getElementById('contact').innerText = data.contact;
      document.getElementById('about').innerText = data.about;
    })
    .catch(error => console.error("Error loading translations:", error));
}

function changeLanguage(language) {
  loadTranslations(language);
}

// Завантажити мову за замовчуванням при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage("en"); // Тут можна змінити мову за замовчуванням
});





