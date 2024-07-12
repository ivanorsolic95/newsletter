const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");
const inputField = document.getElementById("email-input");

function handleSubmit (e) {

    e.preventDefault()

    const data = {};

    //
    const fields = e.target.querySelectorAll("input");

    for (const field of fields) {
        data[field.name] = field.value;
    }

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //check if the email address is valid
    if(data.email.match(validRegex)) {

        //store email address to display it in HTML
        localStorage.setItem("email", data.email);
        
        //take user to success message page
        window.location.href = "/pages/success-message.html";
    }
    
    //display error message if email address is not valid
    if(window.matchMedia("(min-width:992px)").matches) {
        errorMessage.style.display = 'block';
        inputField.style.borderColor = '#FF6155';
        inputField.style.backgroundColor = 'rgba(255, 97, 85, 0.15)';
        inputField.style.color = '#FF6155';
    }
}

form.addEventListener('submit', handleSubmit);