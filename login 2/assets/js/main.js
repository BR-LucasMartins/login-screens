const password = document.getElementById("password");
const icon = $("#icon-password");

console.log(icon)

function showPassword(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        icon.html(`<ion-icon lass="icon-password" onclick="showPassword()" name="eye-outline"></ion-icon>`);
    }
    else{
        password.setAttribute('type', 'password');
        icon.html(`<ion-icon lass="icon-password" onclick="showPassword()" name="eye-off-outline"></ion-icon>`);
    }
}