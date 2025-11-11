import { getFormValues, validateValues } from "./Validation.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOMContentLoaded');
    const form = document.getElementById("main_form");

    form.addEventListener("submit", (event) => {
        console.log('submit pressed');
        const values = getFormValues(form);

        if (!validateValues(values)) {
            console.log("Некорректные данные");
            event.preventDefault(); // Блокируем отправку формы, если данные некорректны
        }
    });
});






