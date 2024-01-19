//This is the beginning of the function for validation
const form = document.querySelector('#newsletter')
const error = document.querySelector('#email + span.error');
const Submit = document.querySelector('#subButton');
const mainContainer = document.querySelector('#signUp');
const mailInput = document.querySelector('#email');
const userEmail = document.querySelector('#userEmail');
const successMessage = document.querySelector('.secondContainer');
const home = document.querySelector('#disMiss');

// mailInput.addEventListener('onKeyDown', (e)=>{

// });

// function validateEmail(){
//     const regex =  /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;
//     if (!(mailInput.match(emailCorrectPattern))) {
//         error.textContent = 'Enter email address';
//         return false;
//     }
// }

function updatedUserEmail(email) {
    userEmail.textContent = email;
}
function switchPages(){
    successMessage.classList.remove('hidden');
    mainContainer.style.display=  "none";
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // validateEmail();
    updatedUserEmail(mailInput.value);
    mailInput.value = "";
    switchPages();

});

// function myError(e){
//     error.textContent = "Enter an email address";
// }


home.addEventListener('click' , (e) => {
    successMessage.classList.add('hidden');
    mainContainer.style.display=  "";
}) 

