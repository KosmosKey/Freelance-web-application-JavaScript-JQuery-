const logInButton = document.querySelector(".Login");

logInButton.addEventListener("click", function () {
  const inputFieldEmail = document.querySelector("input[type=email]");
  const inputFieldPassword = document.querySelector("input[type=password]");
  const errorInputField = document.querySelector(".emailNotValid");
  const passwordNotValid = document.querySelector(".passwordNotValid");

  if (
    inputFieldEmail.value === "" ||
    inputFieldEmail.value.indexOf("@") == -1 ||
    inputFieldEmail.value.indexOf(".") == -1
  ) {
    errorInputField.style.display = "block";
  } else {
    errorInputField.style.display = "none";
  }

  if (inputFieldPassword.value === "") {
    passwordNotValid.style.display = "block";
  } else {
    passwordNotValid.style.display = "none";
  }
});
