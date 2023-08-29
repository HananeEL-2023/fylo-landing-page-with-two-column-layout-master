document.getElementById("first-form").addEventListener("submit", function (e) {
  const emailField = document.getElementById("email-field");
  const errorMessage = document.getElementById("error-email");

  if (!validationEmail(emailField.value)) {
    errorMessage.style.display = "block";
    emailField.style.border = "1px solid red";
    e.preventDefault();
  }
});

function validationEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
