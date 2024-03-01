const modal = document.getElementById('modal');
const close = document.getElementById('close');
const main_content = document.getElementById('main_content');
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("blur", function() {
    const isValidEmail = emailRegex.test(emailInput.value.trim());
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email required";
        showError();
    } else if (!isValidEmail) {
        emailError.textContent = "Email required";
        showError();
    } else {
        hideError();
    }
});

emailInput.addEventListener("input", function() {
    hideError();
});

document.getElementById("subscribeForm").addEventListener('submit', function(event) {
    event.preventDefault();
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Email required";
        showError();
    } else {
        main_content.classList.add('hidden');
        modal.classList.remove("hidden");
        document.getElementById('email_').textContent = emailInput.value.trim();
    }
});

close.addEventListener('click', () => {
    modal.classList.add("hidden");
    main_content.classList.remove('hidden');
    emailInput.value = "";
});

function showError() {
    emailError.classList.remove("hidden");
    email.style.border = "2px solid red";
    email.style.backgroundColor = "rgb(255,232,230)";
}

function hideError() {
    emailError.classList.add("hidden");
    email.style.borderColor = "black";
    email.style.backgroundColor = "white";
}
