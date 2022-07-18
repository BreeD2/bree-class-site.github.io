// Sample: how to use Userfront.resetPassword()
Userfront.init("demo1234");
Userfront.resetPassword({
  password: "myshinynewpassword",
});

// Initialize Userfront
Userfront.init("demo1234");

// 1. Reference the elements on the page
var passwordResetFormEl = document.getElementById("password-reset-form");
var alertEl = document.getElementById("alert");
var passwordEl = document.getElementById("password");
var passwordVerifyEl = document.getElementById("password-verify");

// 2. Reset the user's password
function formResetPassword(e) {
  // Prevent the form's default behavior
  e.preventDefault();
  // Reset the alert to empty
  setAlert();
  // Verify that the passwords match
  var password = passwordEl.value;
  var passwordVerify = passwordVerifyEl.value;
  if (password !== passwordVerify) {
    return setAlert("Password verification must match.");
  }
  // Call Userfront.resetPassword()
  Userfront.resetPassword({
    password: password,
  }).catch(function(error) {
    setAlert(error.message);
  });
}

// Set the alert element to show the message
function setAlert(message) {
  alertEl.innerText = message;
  alertEl.style.display = message ? "block" : "none";
}

// 3. Add an event listener for the password reset form submit
passwordResetFormEl.addEventListener("submit", formResetPassword);

// Initialize Userfront
Userfront.init("demo1234");

// 1. Reference the elements on the page
var passwordResetFormEl = document.getElementById("password-reset-form");
var alertEl = document.getElementById("alert");
var passwordEl = document.getElementById("password");
var passwordVerifyEl = document.getElementById("password-verify");

// 2. Reset the user's password
function formResetPassword(e) {
  // Prevent the form's default behavior
  e.preventDefault();
  // Reset the alert to empty
  setAlert();
  // Verify that the passwords match
  var password = passwordEl.value;
  var passwordVerify = passwordVerifyEl.value;
  if (password !== passwordVerify) {
    return setAlert("Password verification must match.");
  }
  // Call Userfront.resetPassword()
  Userfront.resetPassword({
    password: password,
  }).catch(function(error) {
    setAlert(error.message);
  });
}

// Set the alert element to show the message
function setAlert(message) {
  alertEl.innerText = message;
  alertEl.style.display = message ? "block" : "none";
}

// 3. Add an event listener for the password reset form submit
passwordResetFormEl.addEventListener("submit", formResetPassword);

var password = passwordEl.value;
var passwordVerify = passwordVerifyEl.value;
if (password !== passwordVerify) {
  return setAlert("Password verification must match.");
}

// Catch the error
Userfront.resetPassword(...)
.catch(function(error) {
  setAlert(error.message);
});

// Add the error message to the alert element
function setAlert(message) {
  alertEl.innerText = message;
  alertEl.style.display = message ? "block" : "none";
}
