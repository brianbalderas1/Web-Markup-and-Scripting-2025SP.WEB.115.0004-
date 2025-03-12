document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const inputValue = inputField.value;
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;
        
        const existingMessage = document.querySelector(".message");
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageElement = document.createElement("p");
        messageElement.classList.add("message");
        
        if (alphanumericPattern.test(inputValue)) {
            messageElement.textContent = "Success! Your input is valid.";
            messageElement.style.color = "green";
            form.appendChild(messageElement);
        } else {
            messageElement.textContent = "Error: Please enter only alphanumeric characters.";
            messageElement.style.color = "red";
            form.appendChild(messageElement);
        }
    });
});