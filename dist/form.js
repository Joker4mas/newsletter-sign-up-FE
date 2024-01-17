//This is the beginning of the function for validation

// const form = document.querySelector('subForm');
const emailInput = document.getElementById('email');
//const errorMessage = document.querySelector('email + span.error');
const Submit = document.getElementById('subButton');
const mainContainer = document.getElementById('mainContainer');
const successMessage = document.getElementById('thank');
const home = document.getElementById('disMiss');


Submit.addEventListener('submit', () => {
    successMessage.classList.remove('hidden');
    mainContainer.style.display = ('none');

    
});