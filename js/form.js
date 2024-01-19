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

//update success page company email address
function updatedUserEmail(email) {
    userEmail.textContent = email;
}

//function update to toggle between states
function switchPages(){
    successMessage.classList.remove('hidden');
    mainContainer.style.display=  "none";
}

//form event listener
form.addEventListener('submit', (e) => {
    //prevent default
    e.preventDefault();
    // validateEmail();

    //this code will replace the default company name on the success page
    updatedUserEmail(mailInput.value);

    //this code will clear the input fields
    mailInput.value = "";

    //this code will toggle between the success page and home page
    //after the user has successfully filled in the email
    switchPages();

});

// function myError(e){
//     error.textContent = "Enter an email address";
// }


home.addEventListener('click' , (e) => {
    successMessage.classList.add('hidden');
    mainContainer.style.display=  "";
}) 

