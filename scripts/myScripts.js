let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let username = document.getElementById('username');

//Show input error message
function showError(input, message){
    let formControl = input.parentElement;
}

//Event listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(username)

   if(username.value === ""){
       showError(username,'Username is required')
   }else{
       showSuccess(username);
   }
});
 