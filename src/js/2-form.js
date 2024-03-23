document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо необхідні елементи форми
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector("input");
    const messageInput = form.querySelector("textarea");
    const localStorageKey = "feedback-form-state"; // Ключ для локального сховища

    // Перевіряємо, чи є збережені дані у локальному сховищі
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
        // Якщо є збережені дані, заповнюємо поля форми ними
        const { email, message } = JSON.parse(storedData);
        emailInput.value = email.trim();
        messageInput.value = message.trim();
    }

    // Відстежуємо подію input на формі
    form.addEventListener("input", onFormInput);

    // Обробник події submit форми
    form.addEventListener("submit", onFormSubmit);

    
    
    function onFormInput(event) { // Перевіряємо, чи змінено значення в полях email або message
        if (event.target === emailInput || event.target === messageInput) {
            // Записуємо дані у локальне сховище
            const formData = {
                email: emailInput.value,
                message: messageInput.value
            };
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
        };
    };
            
        
    function onFormSubmit(event) {
        event.preventDefault(); // Забороняємо стандартну поведінку форми

        // Отримуємо дані з полів форми
        const formData = {
            email: emailInput.value,
            message: messageInput.value
        };

        // Очищаємо локальне сховище
        localStorage.removeItem(localStorageKey);

        // Очищаємо поля форми
        emailInput.value = '';
        messageInput.value = '';

        // Виводимо дані у консоль
        console.log('Form data:', formData);

    };
});
