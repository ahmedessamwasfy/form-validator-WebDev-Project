const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//is valid email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//is required inputs
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value === '') showError(input, `${input.id} is required`);
        else showSuccess(input);

    });
}

//check length
function checkLength(inputArr) {
    inputArr.forEach(input => {
        const field = input[0];
        const min = input[1];
        const max = input[2];
        if (field.value.length < min || field.value.length > max) {
            showError(field, `${field.id} must be between ${min} and ${max}`);
        }
        else showSuccess(field);
    });
}
//Event hacdlers
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength([[username, 3, 15], [password, 6, 25]]);


    if (!validateEmail(email)) showError(email, "Valid Email is required");
    else showSuccess(email);

}


)