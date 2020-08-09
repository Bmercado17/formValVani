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

// function showSuccess(input){
// let formControl = input.parentElement;
// formControl.className = "form-control success";
// }

//function to check if a characters is email like

// function isValidEmail(email) {
//   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

//FOLLOWING CODE TO REFACTOR THE CODE ABOVE USING FUNCTIONS

let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let username = document.getElementById("username");

//Show input error message

function showError(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}
//Show input success outline

function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}
//function to check if a characters is email like

function checkEmail(input) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "email is not valid");
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      //trim()gets rib off white space
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters `
    );
  } else {
    showSuccess(input);
  }
}
//check password match or password2
function passwordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Paswords do not match");
  }
}

//get field Name and making the first letter upper case
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkEmail(email);
  passwordsMatch(password, password2);
});
