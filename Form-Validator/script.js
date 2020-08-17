//variable initialization
const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById("Email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
}
function showSuccess(input,message){
    const formControl = input.parentElement;
    formControl.className="form-control success";
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username,'Username Required');
    }
    else{
        showSuccess(username);
    }

    if(Email.value === ''){
        showError(Email,'Email Required');
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password,'Username Required');
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2,'Username Required');
    }
    else{
        showSuccess(password2);
    }
}); 

