//This is the beginning of the function for validation
const form = document.querySelector('#newsletter')
// const mailInput = document.querySelector('email')
const error = document.querySelector('#email + span.error');
const Submit = document.querySelector('#subButton');
const mainContainer = document.querySelector('#signUp');
const mailInput = document.querySelector('#email');

const userEmail = document.querySelector('#userEmail');
const successMessage = document.querySelector('.secondContainer');
const home = document.querySelector('#disMiss');

mailInput.addEventListener('onKeyDown', (e)=>{

});


function updatedUserEmail(email) {
    userEmail.textContent = email;
}
function switchPages(){
    mainContainer.classList.toggle("hidden")
    successMessage.classList.toggle("hidden")
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    updatedUserEmail(mailInput.value);
    switchPages();

});

function myError(e){
    error.textContent = "Enter an email address";
}

{/* <input type="text" onkeypress="myFunction()"> */}


// home.addEventListener('click' , (e) => {
//     successMessage.classList.add('hidden');
//     mainContainer.style.display=  "block";
// }) 

// home.addEventListener('click' , (e) => {
//     successMessage.classList.add('hidden');
//     mainContainer.style.display=  "block";
// }) 