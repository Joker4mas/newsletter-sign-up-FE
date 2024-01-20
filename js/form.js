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

function validateEmail(email){
    const regex =  /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

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
    
    // capture email values
    const emailValue = mailInput.value.trim();

    //verify email if it's valid
    if (validateEmail(emailValue)) {
        // updatedUserEmail(mailInput.value);
        updatedUserEmail(emailValue);

         //this code will replace the default company name on the success page
    

        //this code will clear the input fields
        mailInput.value = "";

        //this code will toggle between the success page and home page
        //after the user has successfully filled in the email
        switchPages();
    }else{

        // if the email is not valid, then display an error message
        error.append = "Please enter a valid email";
    }

   

});

// function myError(e){
//     error.textContent = "Enter an email address";
// }


home.addEventListener('click' , (e) => {
    successMessage.classList.add('hidden');
    mainContainer.style.display=  "";
}) 

