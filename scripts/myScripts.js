// this code below is to check if what is enter in the fields is Valid
// is not a functional registration form just a way to validate

// let form = document.getElementById("form");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let password2 = document.getElementById("password2");
// let username = document.getElementById("username");

//Show input error message

// function showError(input, message) {
//   let formControl = input.parentElement;
//   formControl.className = "form-control error";
//   let small = formControl.querySelector("small");
//   small.innerText = message;
// }
//Show input success outline

//

//function to check if a characters is email like

// function isValidEmail(email) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

//Event listener with a bunch of if statements to validate

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === "") {
//     showError(email, "email is required");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "emial is not valid");
//   } else {
//     showSuccess(email);
//   }
//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === "") {
//     showError(password2, "Verify Password");
//   } else {
//     showSuccess(password2);
//   }
// });
