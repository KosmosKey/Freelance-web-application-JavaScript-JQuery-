const singUpButton = document.querySelector(".Login");
const inputFirstName = document.querySelector("input[type=firstname]");
const inputLastName = document.querySelector("input[type=lastname]");
const inputEmail = document.querySelector("input[type=email]");
const passwordInput = document.querySelector("input[type=password]");

singUpButton.addEventListener("click", function () {
  const firstNameError = document.querySelector(".firstNameError");
  const lastNameError = document.querySelector(".lastNameError");
  const emailErrorText = document.querySelector(".emailErrorText");
  const passwordError = document.querySelector(".passwordError");

  if (inputFirstName.value.length == "") {
    lastNameError.style.display = "block";
  } else {
    lastNameError.style.display = "none";
  }

  if (inputLastName.value.length == "") {
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
  }

  if (
    inputEmail.value === "" ||
    inputEmail.value.indexOf("@") == -1 ||
    inputEmail.value.indexOf(".") == -1
  ) {
    emailErrorText.style.display = "block";
  } else {
    emailErrorText.style.display = "none";
  }

  if (passwordInput.value.length == "") {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});
