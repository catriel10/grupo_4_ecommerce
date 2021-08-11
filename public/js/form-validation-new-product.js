const form = document.querySelector("#create-product")
console.log("Hola Mundo!!!")
// los inputs
const inputName = form.querySelector('#name')
const inputDescription = form.querySelector('#description')
const inputPrice = form.querySelector('#address')
const inputDiscount = form.querySelector('#Discount')

const inputImage = form.querySelector('#image')
// los mensajes de error
const errorName = form.querySelector('.msg-error-name')
const errorDescription = form.querySelector('.msg-error-Description')
const errorPrice = form.querySelector('.msg-error-Price')
const errorDiscount = form.querySelector('.msg-error-Discount')

const errorImage = form.querySelector('.msg-error-image')

const inputArray = [
    inputName, inputDescription, inputPrice, inputDiscount, inputImage
] 

const msgErrorsArray = [
    errorName, errorDescription, errorPrice, errorDiscount, errorImage
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
    if (inputName.value.length < 3) {
        hasErrors = true
        errorName.innerHTML = "Write your Name"
        inputName.focus()
    }

    // Description
    if (!isNumeric(inputDescription.value) || inputDiameter.value < 0) {
        errorDiameter.innerHTML = "Write your Description"
        
        if (!hasErrors) {
            inputDiameter.focus()
        }

        hasErrors = true
    }

    // Price
    if (!inputPrice.value) {
        errorPrice.innerHTML = "Write your Address"
        
        if (!hasErrors) {
            inputPrice.focus()
        }

        hasErrors = true
    }

    // Discount
    if (!inputDiscount.value) {
        errorDiscount.innerHTML = "Write your Discount"
        
        if (!hasErrors) {
            inputDiscount.focus()
        }

        hasErrors = true
    }

    
    // image
    if (!inputImage.value) {
        
        errorImage.innerHTML = "Insert your Image"
        
        if (!hasErrors) {
            inputImage.focus()
        }

        hasErrors = true
    }

    if (hasErrors) {
        e.preventDefault()
    }
    
}

inputArray.forEach(input => {
    input.addEventListener('blur', validateForm)
})

form.addEventListener('submit', validateForm)