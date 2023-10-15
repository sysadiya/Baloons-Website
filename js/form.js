// Define constants for all of the elements we will be working with
const form = document.querySelector('#myForm');

const nameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#emailAddress');
const msgInput = document.querySelector('#msg');
const ageInput = document.querySelector("#age")

const ageError = document.querySelector("#age + .field-error")
const nameError = document.querySelector('#fullName + .field-error');
const emailError = document.querySelector('#emailAddress + .field-error');
const msgError = document.querySelector('#msg + .field-error');

function validateName() {
  // Code that will run whenever we want to validate the fullName field
     if (nameInput.validity.valid) {
    // Value is valid, so remove any previous error message
    nameError.textContent = '';
    } else {
    // Value is not valid, so display an error message
    showNameError();
    }
  }

  function showNameError() {
    // Code to display an error message for the fullName field
           nameError.textContent = 'Please enter your name';
        }


  function validateAge() {
    // Code that will run whenever we want to validate the fullName field
       if (ageInput.value) {
      // Value is valid, so remove any previous error message
      nameError.textContent = '';
      } else {
      // Value is not valid, so display an error message
      showAgeError();
      }
}
function showAgeError() {
    // Code to display an error message for the fullName field
            ageError.textContent = 'Please enter your age';
        }

  



function validateEmail() {
    // Code that will run whenever we want to validate the email field
    if (emailInput.validity.valid) {
        // Value is valid, so remove any previous error message
        emailError.textContent = '';
        } else {
        // Value is not valid, so display an error message
        showEmailError();
        }
}


function showEmailError() {
    // Code to display an error message for the email field
    if (emailInput.validity.valueMissing) {
        // The field is empty
        emailError.textContent = 'Please enter your email address';
        } else if (emailInput.validity.typeMismatch) {
        // The field contains an invalid email address
        emailError.textContent = 'Your email address does not appear to be correct';
        }
}




function validateMessage() {
    // Code that will run whenever we want to validate the fullName field
   
      if (msgInput.value) {
      // Value is valid, so remove any previous error message
      msgError.textContent = '';
      } else if(msgInput.value == ''){
      // Value is not valid, so display an error message
      showMessageError();
      }
      
  }
  
  function showMessageError() {
        // Code to display an error message for the Message field
         msgError.textContent = 'Please enter Message if any ';
          }


function validateForm(event) {

    // Code that we want to run to validate the entire form (both fields)
    // Keep track of our validation "state"
            let formHasErrors = false;
            if (!nameInput.validity.valid) {
            // Name input is invalid, show its error and change "state"
            formHasErrors = true;
            showNameError();
            }

        if (!emailInput.validity.valid) {
            // Message input is invalid, show its error and change "state"
            formHasErrors = true;
            showEmailError();
            }
        if (!ageInput.value) {
            // Message input is invalid, show its error and change "state"
            formHasErrors = true;
            showAgeError();
            }
        

        if (!msgInput.value) {
            // Message input is invalid, show its error and change "state"
            formHasErrors = true;
            showMessageError();
            }

            // Check the "state" to see if the form should be submitted
            if (formHasErrors) {
            event.preventDefault();
            }
}


// Set up an event listener for each of the fields in the form
// The event we are listening for is "input" (occurs when user types or pastes text into a field)
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
msgInput.addEventListener('input', validateMessage);
ageInput.addEventListener('input', validateAge)

// Set up an event listener for the form
// The event we are listening for is "submit" (occurs when user trys to submit the form)
form.addEventListener('submit', validateForm);
