//variable initialization
const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById("Email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const message = document.getElementsByClassName("message");

function showError(input){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
  
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className="form-control success";
}
function checkLength(input,min,max){
    if(input.value.length<min || checkLength>max){
        showError(input);
    }
    else{
        showSuccess(input);
    }
}
function passwordMatch(input1,input2){
    if(input1.value===input2.value){
        showSuccess(input1);
        showSuccess(input2);
    }
    else{
        showError(input1);
        showError(input2);
    }
}
function validateEmail(input) 
{ 
 var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
 if (reg.test(input)){
 showSuccess(input);
}
 else{
    showError(input);
 } 
} 

form.addEventListener('submit',function(e){
    e.preventDefault();
    const formElements = [username,email,password,password2];
    formElements.forEach(function(item){
        if(item.value===''){
            showError(item)
        }
        else{
            showSuccess(item);
        }
    });
    checkLength(username,4,15);
    checkLength(password,8,20);
    checkLength(password2,8,20);
    validateEmail(email);
});


