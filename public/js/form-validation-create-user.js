const form = document.querySelector("#create-user")

console.log(form)

// los inputs
const inputName = form.querySelector('#name')
const inputLastName = form.querySelector('#lastname')
const inputEmail = form.querySelector('#email')
const inputAddress = form.querySelector('#address')
const inputPassword = form.querySelector('#password')
const inputConfirmPassword = form.querySelector('#confirm-password')
const inputImage = form.querySelector('#image')


// los mensajes de error
const errorName = form.querySelector('.msg-error-name')
const errorLastName = form.querySelector('.msg-error-lastname')
const errorEmail = form.querySelector('.msg-error-email')
const errorAddress = form.querySelector('.msg-error-address')
const errorPassword = form.querySelector('.msg-error-password')
const errorConfirmPassword = form.querySelector('.msg-error-confirm-password')
const errorImage = form.querySelector('.msg-error-image')

const inputArray = [
    inputName, inputLastName, inputEmail, inputAddress, inputPassword, inputConfirmPassword, inputImage
] 

const msgErrorsArray = [
    errorName, errorLastName, errorEmail, errorAddress, errorPassword, errorConfirmPassword, errorImage
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

    // name
    if (inputName.value.length < 2) {
        hasErrors = true
        errorName.innerHTML = "Name must be at least 2 characters long"
        if(!hasErrors){
            inputName.focus()
        }
    }

    // lastname
    if (inputLastName.value.length < 2) {
        hasErrors = true
        errorLastName.innerHTML = "Lastname must be at least 2 characters long"
        if(!hasErrors){
            inputLastName.focus()
        }
    }
    

    // Email
    if (inputEmail.value.length < 8) {
        hasErrors = true

        errorEmail.innerHTML = "Write your Email"
        
        if (!hasErrors) {
            inputEmail.focus()
        }
    }

    // Address
    if (!inputAddress.value) {
        hasErrors = true

        errorAddress.innerHTML = "Write your Address"
        
        if (!hasErrors) {
            inputAddress.focus()
        }
    }

    // Password
    if ( inputPassword.value.length < 8 ) {
        hasErrors = true

        errorPassword.innerHTML = "Password must be at least 8 characters long"
        
        if (!hasErrors) {
            inputPassword.focus()
        }    
    }

    // ConfirmPassword
    if ( inputConfirmPassword.value.length < 8 ) {
        hasErrors = true

        errorConfirmPassword.innerHTML = "Confirm your Password Correctly"
        
        if (!hasErrors) {
            inputConfirmPassword.focus()
        }
    }

    if (hasErrors) {
        e.preventDefault()
    }

    // image
    if (!inputImage.value) {
        hasErrors = true

        errorImage.innerHTML = "Insert your Image"
        
        if (!hasErrors) {
            inputImage.focus()
        }
    }

    if (hasErrors) {
        e.preventDefault()
    }
    
}

inputArray.forEach(input => {
    input.addEventListener('blur', validateForm)
})

form.addEventListener('submit', validateForm)