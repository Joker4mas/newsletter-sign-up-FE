//This is the beginning of the function for validation

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const Submit = document.getElementById('submit');
const home = document.getElementById('disMiss');

//Regular expression as HTML specs
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//compares input vales with RegExpression
// window.addEventListener("load", () => {
//     const isValid = emailInput.value.length === 0 ||
//     emailRegExp.test(emailInput.value);
// });

emailInput.addEventListener("input", () => {
    const Validate = emailInput.value.length === 0 ||
    emailRegExp.test(emailInput.value);
    if (validate) {  
        emailInput.style.border = "green" ;
    }else {
        emailInput.errorMessage = "Enter your email";
    };
});

//This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const validate = email.value.length === 0 || 
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