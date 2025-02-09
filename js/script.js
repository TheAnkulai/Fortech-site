document.getElementById("form").onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы
    valid(this); // Передаём саму форму в функцию
};

function valid(form) {
    let name = form.elements["name"];
    let email = form.elements["email"];
    let phone = form.elements["phone"];
    let errorMessages = form.getElementsByClassName("error-messages");

    for (let msg of errorMessages) {
        msg.textContent = "";
    }

    let isValid = true;

    if (name.value.trim() === "") {
        errorMessages[0].textContent = "Поле имени не должно быть пустым!";
        isValid = false;
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        errorMessages[1].textContent = "Некорректный email!";
        isValid = false;
    }

    let phoneRegex = /^\+7\d{10}$/;
    if (!phoneRegex.test(phone.value)) {
        errorMessages[2].textContent = "Некорректный номер телефона! Формат: +7XXXXXXXXXX";
        isValid = false;
    }

    if (isValid) {
        alert(`Данные отправлены!\nИмя: ${name.value}\nEmail: ${email.value}\nТелефон: ${phone.value}`);
        form.submit(); // Можно оставить, если нужно реально отправлять форму
    }
}