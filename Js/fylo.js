document.getElementById("first-form").addEventListener("submit", function (e) {
  var emailField = document.getElementById("email-field");
  var errorMessage = document.getElementById("error-email");

  if (!validationEmail(emailField.value)) {
    errorMessage.style.display = "block";
    emailField.style.border = "1px solid red";
    e.preventDefault();
  }
});

document.getElementById("second-form").addEventListener("submit", function (e) {
  var secondEmailField = document.getElementById("second-email-field");
  var secondErrorMessage = document.getElementById("second-error-message");
  if (!validationEmail(secondEmailField.value)) {
    secondErrorMessage.style.display = "block";
    secondEmailField.style.border = "1px solid red";
    e.preventDefault();
  }
});

function validationEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
