const form = document.querySelector("#login-user")

// los inputs

const inputEmail = form.querySelector('#email')
const inputPassword = form.querySelector('#password')


// los mensajes de error

const errorEmail = form.querySelector('.msg-error-Email')
const errorPassword = form.querySelector('.msg-error-Password')

const inputArray = [
    inputEmail, inputPassword
] 

const msgErrorsArray = [
    errorEmail, errorPassword
] 


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// resetea errores
function resetErrors() {
    msgErrorsArray.forEach(msg => {
        msg.innerHTML = ""
    })
}

// valida el formulario
function validateForm(e) {
    let hasErrors = false
    
    resetErrors()

     // Email
    if (!isNumeric(inputEmail.value) || inputDiameter.value < 0) {
        errorDiameter.innerHTML = "Write your Email"
        
        if (!hasErrors) {
            inputDiameter.focus()
        }

        hasErrors = true
    }

    // Password
    if (!inputPassword.value) {
        errorPassword.innerHTML = "Write your Password"
        
        if (!hasErrors) {
            inputPassword.focus()
        }

        hasErrors = true
    }
    
}

inputArray.forEach(input => {
    input.addEventListener('blur', validateForm)
})

form.addEventListener('submit', validateForm)