let modal = document.getElementById('modal');
let close = document.getElementById('close');
let main_content = document.getElementById('main_content');
let email_ = document.getElementById('email_');
let emailInput = document.getElementById("email");
let emailError = document.getElementById("emailError");
let email = document.getElementById("email");

emailInput.addEventListener("blur", function() {
    if(emailInput.value==""){
    if (!emailInput.checkValidity()) {
        emailError.classList.remove("hidden");
        email.style.border="2px solid red "
        email.style.backgroundColor="rgb(255,232,230)"
    } else {
        emailError.classList.add("hidden");
    }}
});

emailInput.addEventListener("input", function() {
    if(emailInput.value!=""){
        email.style.borderColor="black"
        email.style.backgroundColor="white"
            emailError.classList.add("hidden");
        }

});

document.getElementById("subscribeForm").addEventListener('submit', function(event) {
    event.preventDefault();
    main_content.classList.add('hidden')
    modal.classList.remove("hidden")
    const emailValue = document.getElementById('email').value;
    email_.textContent=emailValue
});
close.addEventListener('click',()=>{
    modal.classList.add("hidden")
    main_content.classList.remove('hidden')
    emailInput.value=""
    
})
