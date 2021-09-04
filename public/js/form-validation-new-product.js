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
    if (inputName.value.length < 5) {
        hasErrors = true
        errorName.innerHTML = "Write product name"
        if (!hasErrors) {
            inputName.focus()
        }
    }

    // Description
    if (inputDescription.value.length< 20) {
        hasErrors = true
        
        errorDescription.innerHTML = "Write product description"
        
        if (!hasErrors) {
            inputDescription.focus()
        }

        
    }

    // Price
    if (!inputPrice.value) {
        hasErrors = true
        
        errorPrice.innerHTML = "Write product price"
        
        if (!hasErrors) {
            inputPrice.focus()
        }

        
    }

    // Discount
    if (!inputDiscount.value) {
        hasErrors = true
        
        errorDiscount.innerHTML = "Write product discount"
        
        if (!hasErrors) {
            inputDiscount.focus()
        }

        
    }

    
    // image
    if (!inputImage.value) {
        hasErrors = true

        errorImage.innerHTML = "Insert product Image"
        
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