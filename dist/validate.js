//This is the beginning of the function for validation

const form = document.querrySelector('form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const Submit = document.getElementById('submit');
const home = document.getElementById('disMiss');

//Regular expression as HTML specs
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//compares input vales with RegExpression
window.addEventListener("load", () => {
    const isValid = emailInput.value.length === 0 ||
    emailRegExp.test(emailInput.value);
});

emailInput.addEventListener("input", () => {
    const isValid = emailInput.value.length === 0 ||
    emailRegExp.test(emailInput.value);
    if (isValid) {
        emailInput.className = 'valid';
        errorMessage.textContent = "";
        errorMessage.className = "error";
    }else {
        emailInput.className = "invalid";
    };
});

//This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const isValid = email.value.length === 0 || 
    emailRegExp.test(emailInput.value);
    if (!isValid){
        emailInput.className = "invalid";

    errorMessage.textContent = "Enter a valid email";

    errorMessage.className = "error active";


    }else{
        emailInput.className = "invalid";

        errorMessage.textContent = "";

        errorMessage.className = "error";
    }
    

});