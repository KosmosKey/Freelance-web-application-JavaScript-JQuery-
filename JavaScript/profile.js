// Tabs
const tabs = document.querySelectorAll(".tabs button");
const tabsNavBar = document.querySelectorAll(".tabsNav button");
const tabs_wrap = document.querySelectorAll(".tab-wrap");

// AccountSettings tabs
const buttonTabs = document.querySelectorAll(".AccountSettings button");
const tabsContainer_divs = document.querySelectorAll(".wrapDiv");

// containerPopUps, closeButton, openButton for (POST TUITION)
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
// Black screen overlay after opening containerPopUp
const overlay = document.getElementById("overlay");

// circleNumber is the circle in the POST TUITION (1. Subjects, 2. Location etc ...)
const circleNumber = document.querySelectorAll("[data-circle-number]");
// tabsContainerButton for POST TUITION
const tabsContainerBtn = document.querySelectorAll(".numbersContainer button");

// tabs for POST TUITION containers
const tabWrapTuition = document.querySelectorAll(".tabWrapTuition");
// data-target for jobDescription
const data_tab_content = document.querySelectorAll("[data-tab-content]");
//data-targets for all the steps in the POST TUITION
const tab_target = document.querySelectorAll("[data-tab-target]");

// Values in the POST TUITION
const valueOption = document.querySelectorAll("[data-attribute]");
const input = document.querySelector(".inputValue");
const inputFirst = document.querySelector(".inputValueFirst");
const inputTwo = document.querySelector(".inputValueTwo");
const inputThree = document.querySelector(".inputValueThree");
const inputFour = document.querySelector(".inputValueFour");

// Next Button in the POST TUITION
const nextButtonOne = document.querySelector(".nextButtonOne");
// Subject container POST TUITION
const gradesContainerData = document.querySelector("[data-tab-one]");
// Location container in the POST TUITION
const locationContainer = document.querySelector("[data-tab-two]");
// Area container in the POST TUITION
const studentsContainer = document.querySelector(".Students");
// Online class div in the Location container (POST TUITION)
const onlineClassesDiv = document.querySelector(".onlineClassesContainer");
// Job description container in the POST TUITION
const jobDescriptionContainer = document.querySelector(".jobDescContainer");

// Subject container
const containerOne = document.querySelector("[data-tab-one]");

// Circle SUBJECT and button SUBJECT in the POST TUITION
const circleOne = document.querySelector("[data-circle-one]");
const buttonOne = document.querySelector("[data-target-one]");

// Circle LOCATION and button LOCATION in the POST TUITION
const circleTwo = document.querySelector("[data-circle-two]");
const buttonTwo = document.querySelector("[data-target-two]");

// Circle AREA and button AREA in the POST TUITION
const circleThree = document.querySelector("[data-circle-three]");
const buttonThree = document.querySelector("[data-target-three]");

// Circle OTHER and button OTHER in the POST TUITION
const circleFour = document.querySelector("[data-circle-four]");
const buttonFour = document.querySelector("[data-target-four]");

// InputValue in (Enter Area...) in post tuition
const inputValueFive = document.querySelector(".inputValueFive");

// Checkboxes located in the location container (POST TUITION)
const checkboxFemale = document.querySelector(".checkbox__inputFemale");
const checkboxMale = document.querySelector(".checkbox__input");
const checkboxMatter = document.querySelector(".checkbox__inputMatter");

// Error fields if input values are empty
const errorField = document.querySelector(".errorField");
const errorFieldTwo = document.querySelector(".errorFieldTwo");
const errorFieldThree = document.querySelector(".errorFieldThree");
const errorFieldFour = document.querySelector(".errorFieldFour");
const errorFieldFifth = document.querySelector(".errorFieldFifth");
const optionErrorField = document.querySelector(".errorFieldSix");

// Checkobxes classess in the locationContainer (POST TUITION)
const maleChecked = document.querySelector(".checkbox__input");
const femaleChecked = document.querySelector(".checkbox__inputFemale");
const notMatter = document.querySelector(".checkbox__inputMatter");

// SubmitButton
const submitButton = document.querySelector(".submitButton");

// Inputs data target
const inputLables = document.querySelectorAll("[data-target-inputs]");

// LastError message in the Other Section (POST TUITION)
const errorMessageContainer = document.querySelector(".errorMessageContainer");

// Button (Click here to continue...) after submit the POST TUITION form
const continueButtonSuccess = document.querySelector("[data-close-success]");

// Chat boxes in the INBOX Tab
const chats = document.querySelectorAll(".chat-boxes");

// Actual chat container between ME and CLIENT
const inboxChatProccess = document.querySelectorAll(".inboxChatProccess");

// "NO MESSAGES" container in the INBOX tab
const inboxContainerMessages = document.querySelector(
  ".inboxContainerMessages"
);

// Input field for change email in the account settings tab
const emailInput = document.getElementById("email");

// Button for updating the email
const emailUpdateButton = document.querySelector(".updateEmailButton");

// Button for change the email
const changeButtonEmail = document.querySelector(".changeButtonEmail");

// Container for changing email
const emailContainerChange = document.querySelector(".modaChangeEmail");

// CloseButton in the change email container
const closeVeriyButton = document.querySelector(".closeButton");

// Button for updating the password
const buttonUpdatePassword = document.querySelector(".updatePasswordButton");

// first Password first input field
const newPasswordInputField = document.querySelector(".PSW");

// second Password first input field
const newPasswordInputFieldTwo = document.querySelector(".PSW_Two");

// changePasswordButton
const changePSW = document.querySelector(".changePSW");

// Button for cancel password change
const cancelPasswordButton = document.querySelector(".cancelPasswordButton");

// dashBoard is the icon when the web is getting responsive
const dashButton = document.querySelector(".dashBoard");

// deleteAccount button in the account settings tab
const deleteAccButton = document.querySelector(".fatalButton");

// CloseButton in the responsive dashBoard
const timesResponsive = document.querySelector(".timesResponsive");

// Repsonsive chatButton
const chatButtonResponsive = document.querySelector(".chatButtonResponsive");

// Dropdown menu in the profile top right
const dropdown_item = document.querySelectorAll(".DRPIT");

let lastActiveTab = null;

// CloseButton in the responsive dashBoard
timesResponsive.addEventListener("click", function () {
  const responsiveNavBar = document.querySelector(".responsiveNavBar");
  const overlayNavBar = document.querySelector(".overlayNavBar");

  responsiveNavBar.classList.remove("active");
  overlayNavBar.classList.remove("active");
});

// chatResponsive button
chatButtonResponsive.addEventListener("click", function () {
  const chatsContainer = document.querySelector(".chats");
  const chat_boxes = document.querySelectorAll(".chat-boxes");
  const overlayChat = document.querySelector(".overlayChat");
  chatsContainer.classList.add("active");
  overlayChat.classList.add("active");
  overlayChat.addEventListener("click", function () {
    overlayChat.classList.remove("active");
    chatsContainer.classList.remove("active");
  });

  chat_boxes.forEach((box) => {
    box.addEventListener("click", function () {
      chatsContainer.classList.remove("active");
      overlayChat.classList.remove("active");
    });
  });
});

// deleteAccount evenListener
deleteAccButton.addEventListener("click", function () {
  const modalDeleteAccount = document.querySelector(".modalDeleteAccount");
  const cancelButton = document.querySelector(".buttonCancel");
  modalDeleteAccount.classList.add("active");
  overlay.classList.add("active");

  cancelButton.addEventListener("click", function () {
    modalDeleteAccount.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    modalDeleteAccount.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// responsive icon evenListener
dashButton.addEventListener("click", function () {
  const responsiveNavBar = document.querySelector(".responsiveNavBar");
  const overlayNavBar = document.querySelector(".overlayNavBar");
  responsiveNavBar.classList.add("active");
  overlayNavBar.classList.add("active");
  overlayNavBar.addEventListener("click", function () {
    overlayNavBar.classList.remove("active");
    responsiveNavBar.classList.remove("active");
  });
  tabsNavBar.forEach((tab) => {
    tab.addEventListener("click", function () {
      overlayNavBar.classList.remove("active");
      responsiveNavBar.classList.remove("active");
    });
  });
});

// cancel button for password container tab evenListener
cancelPasswordButton.addEventListener("click", function () {
  const modalChangePassword = document.querySelector(".modalChangePassword");

  overlay.classList.remove("active");
  modalChangePassword.classList.remove("active");
});

// change Password eventlistener
changePSW.addEventListener("click", function () {
  const modalChangePassword = document.querySelector(".modalChangePassword");
  modalChangePassword.classList.add("active");
  overlay.classList.add("active");
  overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
    modalChangePassword.classList.remove("active");
  });
});

// first Password input field keypress eventlistener
newPasswordInputFieldTwo.addEventListener("keypress", function (e) {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  const passwordOne = document.querySelector(".passwordOne");
  const passwordTwo = document.querySelector(".passwordTwo");

  const errorPasswordText = document.querySelector(".errorPasswordText");

  const modalChangePassword = document.querySelector(".modalChangePassword");
  const modalSuccessChangePassword = document.querySelector(
    ".modalSuccessChangePassword"
  );

  const doneButton = document.querySelector(".okButton");
  if (e.key === "Enter") {
    e.preventDefault();
    if (password1 != password2 || (password1 === "" && password2 === "")) {
      passwordOne.classList.add("box");
      passwordTwo.classList.add("box");
      errorPasswordText.style.display = "block";
    } else {
      passwordOne.classList.remove("box");
      passwordTwo.classList.remove("box");
      errorPasswordText.style.display = "none";
      modalChangePassword.classList.remove("active");
      modalSuccessChangePassword.classList.add("active");
    }
    doneButton.addEventListener("click", function () {
      modalSuccessChangePassword.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
  overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
    modalSuccessChangePassword.classList.remove("active");
  });
});

// second Password input field keypress eventlistener
newPasswordInputField.addEventListener("keypress", function (e) {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  const passwordOne = document.querySelector(".passwordOne");
  const passwordTwo = document.querySelector(".passwordTwo");

  const errorPasswordText = document.querySelector(".errorPasswordText");

  const modalChangePassword = document.querySelector(".modalChangePassword");
  const modalSuccessChangePassword = document.querySelector(
    ".modalSuccessChangePassword"
  );

  const doneButton = document.querySelector(".okButton");
  if (e.key === "Enter") {
    e.preventDefault();
    if (password1 != password2 || (password1 === "" && password2 === "")) {
      passwordOne.classList.add("box");
      passwordTwo.classList.add("box");
      errorPasswordText.style.display = "block";
    } else {
      passwordOne.classList.remove("box");
      passwordTwo.classList.remove("box");
      errorPasswordText.style.display = "none";
      modalChangePassword.classList.remove("active");
      modalSuccessChangePassword.classList.add("active");
    }
    doneButton.addEventListener("click", function () {
      modalSuccessChangePassword.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
  overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
    modalSuccessChangePassword.classList.remove("active");
  });
});

// Button for update the password eventlistener
buttonUpdatePassword.addEventListener("click", function () {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  const passwordOne = document.querySelector(".passwordOne");
  const passwordTwo = document.querySelector(".passwordTwo");

  const errorPasswordText = document.querySelector(".errorPasswordText");

  const modalChangePassword = document.querySelector(".modalChangePassword");
  const modalSuccessChangePassword = document.querySelector(
    ".modalSuccessChangePassword"
  );

  const doneButton = document.querySelector(".okButton");

  if (password1 != password2 || (password1 === "" && password2 === "")) {
    passwordOne.classList.add("box");
    passwordTwo.classList.add("box");
    errorPasswordText.style.display = "block";
  } else {
    passwordOne.classList.remove("box");
    passwordTwo.classList.remove("box");
    errorPasswordText.style.display = "none";
    modalChangePassword.classList.remove("active");
    modalSuccessChangePassword.classList.add("active");
  }
  overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
  });
  doneButton.addEventListener("click", function () {
    modalSuccessChangePassword.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// Button for change email eventlistener
changeButtonEmail.addEventListener("click", function () {
  const canceButton = document.querySelector("[data-cancel-button]");
  const modaVerifyEmail = document.querySelector(".modaVerifyEmail");
  emailContainerChange.classList.add("active");
  overlay.classList.add("active");
  canceButton.addEventListener("click", function () {
    emailContainerChange.classList.remove("active");
    overlay.classList.remove("active");
  });
  overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
    emailContainerChange.classList.remove("active");
    modaVerifyEmail.classList.remove("active");
  });
});

// input for change Email keypress eventlistener
emailInput.addEventListener("keypress", function (e) {
  const inputFieldEmail = document.querySelector(".emailValue");
  const modaVerifyEmail = document.querySelector(".modaVerifyEmail");
  const emailContainerChange = document.querySelector(".modaChangeEmail");
  if (e.key === "Enter") {
    e.preventDefault();
    if (
      emailInput.value === "" ||
      emailInput.value.indexOf("@") == -1 ||
      emailInput.value.indexOf(".") == -1
    ) {
      document.querySelector(".errorInputEmail").style.display = "block";
      inputFieldEmail.classList.add("active");
    } else {
      document.querySelector(".errorInputEmail").style.display = "none";
      inputFieldEmail.classList.remove("active");
      emailContainerChange.classList.remove("active");
      modaVerifyEmail.classList.add("active");
    }
  }
});

// input for update Email eventlistener
emailUpdateButton.addEventListener("click", function () {
  const inputFieldEmail = document.querySelector(".emailValue");
  const modaVerifyEmail = document.querySelector(".modaVerifyEmail");
  const emailContainerChange = document.querySelector(".modaChangeEmail");
  if (
    emailInput.value === "" ||
    emailInput.value.indexOf("@") == -1 ||
    emailInput.value.indexOf(".") == -1
  ) {
    document.querySelector(".errorInputEmail").style.display = "block";
    inputFieldEmail.classList.add("active");
  } else {
    document.querySelector(".errorInputEmail").style.display = "none";
    inputFieldEmail.classList.remove("active");
    emailContainerChange.classList.remove("active");
    modaVerifyEmail.classList.add("active");
  }
});

// Chats for each (function)
chats.forEach(function (tabIndex) {
  tabIndex.addEventListener("click", function () {
    inboxChatProccess.forEach(function (div_content, index_content) {
      div_content.style.display = "block";
      inboxContainerMessages.style.display = "none";
      inboxContainerMessages.classList.remove("d-flex");
    });
  });
});

// Button for closing verify email containerPopUp
closeVeriyButton.addEventListener("click", function () {
  const modaVerifyEmail = document.querySelector(".modaVerifyEmail");
  modaVerifyEmail.classList.remove("active");
  overlay.classList.remove("active");
});

// Container tabs for each function
tabsContainerBtn.forEach(function (tabButtonNumber, number_index) {
  tabButtonNumber.addEventListener("click", function () {
    tabWrapTuition.forEach(function (div_content, index_content) {
      if (index_content === number_index) {
        div_content.style.display = "block";
      } else {
        div_content.style.display = "none";
      }
    });
  });
});

// For each tabs in the responsive Dashboard
tabsNavBar.forEach((tab, index_button) => {
  tab.addEventListener("click", function () {
    tabs_wrap.forEach(function (div_content, index_content) {
      if (index_content === index_button) {
        div_content.style.display = "block";
      } else {
        div_content.style.display = "none";
      }
    });
  });
});

// Button one eventlistener for the POST TUITION
buttonOne.addEventListener("click", function () {
  circleTwo.classList.remove("active");
  buttonTwo.classList.remove("active");
  circleThree.classList.remove("active");
  buttonThree.classList.remove("active");
  circleFour.classList.remove("active");
  buttonFour.classList.remove("active");
});

// Button two eventlistener for the POST TUITION
buttonTwo.addEventListener("click", function () {
  circleOne.classList.remove("active");
  buttonOne.classList.remove("active");
  circleThree.classList.remove("active");
  buttonThree.classList.remove("active");
  circleFour.classList.remove("active");
  buttonFour.classList.remove("active");
});

// Button three eventlistener for the POST TUITION
buttonThree.addEventListener("click", function () {
  circleOne.classList.remove("active");
  buttonOne.classList.remove("active");
  circleFour.classList.remove("active");
  buttonFour.classList.remove("active");
  circleTwo.classList.remove("active");
  buttonTwo.classList.remove("active");
});

// Button four eventlistener for the POST TUITION
buttonFour.addEventListener("click", function () {
  circleOne.classList.remove("active");
  buttonOne.classList.remove("active");
  circleThree.classList.remove("active");
  buttonThree.classList.remove("active");
  circleTwo.classList.remove("active");
  buttonTwo.classList.remove("active");
});

// Function for making the circle ACTIVE
function circleActive() {
  if (containerOne.style.display === "block") {
    circleOne.classList.add("active");
    buttonOne.classList.add("active");
  }
}

// Tab_target for each color change in the POST TUITION
tab_target.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    if (lastActiveTab) {
      lastActiveTab.children[0].classList.remove("active");
    }
    circleOne.classList.remove("active");
    buttonOne.classList.remove("active");
    e.target.children[0].classList.add("active");
    lastActiveTab = e.target;
  });
});

circleActive();

// Tab_target change background color of button when click
tab_target.forEach((tab) => {
  tab.addEventListener("click", function () {
    tab_target.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

// NextButton eventlistener
nextButtonOne.addEventListener("click", function (e) {
  if (inputFirst.value) {
    errorField.style.display = "none";
  }

  if (inputTwo.value) {
    errorFieldTwo.style.display = "none";
  }

  if (inputFirst.value.length == "") {
    errorField.style.display = "block";
  }
  if (inputTwo.value.length == "") {
    errorFieldTwo.style.display = "block";
  } else {
    gradesContainerData.style.display = "none";
    locationContainer.style.display = "block";
    buttonOne.classList.remove("active");
    circleOne.classList.remove("active");
    circleTwo.classList.add("active");
    buttonTwo.classList.add("active");
  }
});

// Function for the first value
function valueFirst() {
  if (valueFirst.value) {
    errorField.style.display = "none";
  }
}

// Eventlistener for second NEXT Button in the POST TUITION
document.querySelector(".nextButtonTwo").addEventListener("click", function () {
  const toggleCheckbox = $('#toggle[type="checkbox"]');
  if (toggleCheckbox.is(":not(:checked)")) {
    if (inputThree.value) {
      errorFieldThree.style.display = "none";
    }
    if (inputFour.value) {
      errorFieldFour.style.display = "none";
    }

    if (inputThree.value.length == "") {
      errorFieldThree.style.display = "block";
    }
    if (inputFour.value.length == "") {
      errorFieldFour.style.display = "block";
    } else {
      locationContainer.style.display = "none";
      studentsContainer.style.display = "block";
      circleTwo.classList.remove("active");
      buttonTwo.classList.remove("active");
      circleThree.classList.add("active");
      buttonThree.classList.add("active");
    }
  } else {
    locationContainer.style.display = "none";
    studentsContainer.style.display = "block";
    circleTwo.classList.remove("active");
    buttonTwo.classList.remove("active");
    circleThree.classList.add("active");
    buttonThree.classList.add("active");
  }
});

// Location checkbox function
$(document).ready(function () {
  $('#toggle[type="checkbox"]').click(function () {
    if ($(this).is(":checked")) {
      $(".lableCheckedContainer").removeAttr("style").hide();
    } else if ($(this).is(":not(:checked)")) {
      $(".lableCheckedContainer").removeAttr("style").show();
      $(".errorFieldFour").removeAttr("style").hide();
      $(".errorFieldThree").removeAttr("style").hide();
    }
  });
});

// Eventlistener for first BACK Button in the POST TUITION
document.querySelector(".backButtonOne").addEventListener("click", function () {
  locationContainer.style.display = "none";
  gradesContainerData.style.display = "block";
  circleTwo.classList.remove("active");
  buttonTwo.classList.remove("active");
  circleOne.classList.add("active");
  buttonOne.classList.add("active");
});

// Eventlistener for third BACK Button in the POST TUITION
document
  .querySelector(".backButtonThree")
  .addEventListener("click", function () {
    studentsContainer.style.display = "none";
    onlineClassesDiv.style.display = "block";
    buttonTwo.classList.add("active");
    circleTwo.classList.add("active");
    buttonThree.classList.remove("active");
    circleThree.classList.remove("active");
  });

// Eventlistener for third NEXT Button in the POST TUITION
document
  .querySelector(".nextButtonThree")
  .addEventListener("click", function () {
    const checked = $('.radio[type="checkbox"]');

    if (checked.is(":not(:checked)")) {
      optionErrorField.style.display = "block";
      if (checked.is(":checked")) {
        optionErrorField.style.display = "none";
      }
    }
    if (inputValueFive.value) {
      errorFieldFifth.style.display = "none";
    }

    if (inputValueFive.value.length == "") {
      errorFieldFifth.style.display = "block";
    }

    if (checked.is(":checked") && inputValueFive.value) {
      jobDescriptionContainer.style.display = "block";
      studentsContainer.style.display = "none";
      circleFour.classList.add("active");
      buttonFour.classList.add("active");
      circleThree.classList.remove("active");
      buttonThree.classList.remove("active");
    }
  });

// Click here to continue ....  button after submit the POST TUITION form
continueButtonSuccess.addEventListener("click", function () {
  const successContainer = document.querySelector(".modalContainerSuccess");
  const resultTuition = document.querySelector(".resultTuition");
  const noTuitionContainer = document.querySelector(".noTuitionContainer");
  const buttonPostTuition = document.querySelector(".buttonPostTuition");
  const firstInputValue = document.querySelector(".inputValueFirst");
  const postTution = document.querySelector(".postTution");
  const submitButton = document.querySelector("button .submitButton");

  successContainer.classList.remove("active");
  overlay.classList.remove("active");
  noTuitionContainer.style.display = "none";
  buttonPostTuition.classList.add("active");

  buttonPostTuition.addEventListener("click", function () {
    const modals = document.querySelector(".modalContainer");
    const subjectsPart = document.querySelector(".subjects");
    const jobDescContainer = document.querySelector(".jobDescContainer");

    $(".postTution").hide();
    $(".postTution").hide();
    $(".nextButtonTwo").show();
    $(".ChangeButton").hide();
    $(".errorField").hide();
    $(".errorFieldTwo").hide();
    $(".errorFieldThree").hide();
    $(".errorFieldFour").hide();
    $(".errorFieldFifth").hide();

    modals.classList.add("active");
    overlay.classList.add("active");
    subjectsPart.style.display = "block";
    jobDescContainer.style.display = "none";
    circleFour.classList.remove("active");
    buttonFour.classList.remove("active");
    circleOne.classList.add("active");
    buttonOne.classList.add("active");
  });

  resultTuition.innerHTML += `
    <div class="purple">
        <div class="time d-flex justify-content-end">
          <div class="clock d-flex p-3">
            <i class="far fa-clock mt-1"></i>
            <p class="ml-2">Posted 59 minutes ago</p>
          </div>
          <div class="ED d-flex ml-auto text-white">
            <div
              class="editButton d-flex justify-content-center align-items-center"
              data-tooltip="Edit"
            >
              <i class="far fa-edit"></i>
            </div>
            <div
              class="deleteButton d-flex justify-content-center align-items-center ml-2"
              data-tooltip="Delete"
            >
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
        <div class="lineExample"></div>
        <div class="pendingApproval d-flex p-3">
          <div class="icon d-flex align-items-center">
            <i class="fas fa-hourglass-half"></i>
          </div>
          <div class="timeClock d-block ml-2">
            <h5 class="m-0">Pending Approval</h5>
            <p class="m-0">
              Currently under review. Check back later.
            </p>
          </div>
        </div>
        <div class="lineExample"></div>
        <div class="
        Messsages p-3">
          <h5 class="m-0">Description:</h5>
          <div class="textMessage m-0">
            <p class="m-0">
              I am looking for a tutor who can teach me programming
              algorithm. I would also like a spansih teacher
            </p>
          </div>
        </div>
        <div class="lineExample m-0 p-0"></div>
        <div
          class="tablesSubjects d-flex justify-content-between p-3"
        >
          <div class="subjectDiv">
            <h5 class="m-0">Subjects:</h5>
            <p>Maths</p>
          </div>

          <div class="subjectDiv">
            <h5 class="m-0">Grades:</h5>
            <p>Nursery</p>
          </div>

          <div class="subjectDiv">
            <h5 class="m-0">Qualifications:</h5>
            <p class="m-0 college">
              Should have a degree from:
              <strong class="d-block">Nixor College</strong>
            </p>
          </div>
        </div>
        <div class="lineExample"></div>
        <div class="locationDiv p-3">
          <h5 class="m-0">Locality:</h5>
          <div class="loc mt-1 d-flex align-items-center">
            <i class="fas fa-map-marker-alt"></i>
            <p class="m-0 ml-2">
              Afghanistan, <strong>kabul</strong>
            </p>
          </div>
        </div>
        <div class="lineExample"></div>
      </div>
  `;
  const editButton = document.querySelectorAll(".editButton");

  editButton.forEach((button) => {
    button.addEventListener("click", function () {
      const subjectsPartOne = document.querySelector(".subjects");
      const jobDescriptionContainer = document.querySelector(
        ".jobDescContainer"
      );
      const modalContainerChanges = document.querySelector(
        ".modalContainerChanges"
      );
      const modal = document.querySelector(".modalContainer");
      const submitButton = document.querySelector(".submitButton");
      const editTuition = document.querySelector(".ChangeButton");
      editTuition.addEventListener("click", function () {
        modal.classList.remove("active");
        modalContainerChanges.classList.add("active");
        setTimeout(() => {
          modalContainerChanges.classList.remove("active");
        }, 1250);
        setTimeout(() => {
          overlay.classList.remove("active");
        }, 1250);
      });
      submitButton.style.display = "none";
      editTuition.style.display = "block";
      modal.classList.add("active");
      overlay.classList.add("active");
      subjectsPartOne.style.display = "block";
      jobDescriptionContainer.style.display = "none";
      circleFour.classList.remove("active");
      buttonFour.classList.remove("active");
      circleOne.classList.add("active");
      buttonOne.classList.add("active");
    });
  });
  deleteButton();
});

// SubmitButton in the POST TUITION eventlistener
submitButton.addEventListener("click", function () {
  var allInputs = $(":input[type=text]");
  const successContainer = document.querySelector(".modalContainerSuccess");
  const activeModalContainer = document.querySelector(".modalContainer.active");
  if (errorMessageContainer.style.display === "block") {
    successContainer.classList.remove("active");
  }

  if (allInputs.val() == "") {
    errorMessageContainer.style.display = "block";
    successContainer.classList.remove("active");
  }
  if (allInputs.val()) {
    errorMessageContainer.style.display = "none";
    successContainer.classList.add("active");
    activeModalContainer.classList.remove("active");
  }
  continueButtonSuccess.addEventListener("click", function () {
    successContainer.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// Online classes CheckBOX Function
$(".radio").change(function () {
  const checked = $(this).is(":checked");
  $(".radio").prop("checked", false);
  if (checked) {
    $(this).prop("checked", true);
  }
});

// Fifth backButton click function
document
  .querySelector(".backButtonFifth")
  .addEventListener("click", function () {
    jobDescriptionContainer.style.display = "none";
    studentsContainer.style.display = "block";
    buttonFour.classList.remove("active");
    circleFour.classList.remove("active");
    circleThree.classList.add("active");
    buttonThree.classList.add("active");
  });

// Tabs for each container Subjects, Location, Area and OTHER in TUITION POST
tabsContainerBtn.forEach(function (tabButtonNumber, number_index) {
  tabButtonNumber.addEventListener("click", function () {
    tabWrapTuition.forEach(function (div_content, index_content) {
      if (index_content === number_index) {
        div_content.style.display = "block";
      } else {
        div_content.style.display = "none";
      }
    });
  });
});

// function For deleteButton after getting Pending Apporval
function deleteButton() {
  const deleteButton = document.querySelectorAll(".deleteButton");
  const deleteContainer = document.querySelector(
    ".modalDeleteTuitionContainer"
  );
  const modalHasDeleted = document.querySelector(".modalTuitionHasDeleted");
  const keepButton = document.querySelector(".keepItButton");
  const deleteChoice = document.querySelector(".deleteThisButton");
  deleteButton.forEach(function (deletebutton) {
    deletebutton.addEventListener("click", function () {
      overlay.classList.add("active");
      deleteContainer.classList.add("active");
    });
    keepButton.addEventListener("click", function () {
      overlay.classList.remove("active");
      deleteContainer.classList.remove("active");
    });
    overlay.addEventListener("click", function () {
      overlay.classList.remove("active");
      deleteContainer.classList.remove("active");
    });
    deleteChoice.addEventListener("click", function () {
      deleteContainer.classList.remove("active");
      modalHasDeleted.classList.add("active");
      setTimeout(() => {
        modalHasDeleted.classList.remove("active");
        overlay.classList.remove("active");
      }, 1750);
    });
  });
}

// ButtonTabs for Account Settings and Blocked Users
buttonTabs.forEach(function (tabButton, tab_indexButton) {
  tabButton.addEventListener("click", function () {
    buttonTabs.forEach(function (tabButton) {
      tabButton.classList.remove("active");
    });

    tabsContainer_divs.forEach(function (content_div, content_indexDiv) {
      if (content_indexDiv === tab_indexButton) {
        content_div.style.display = "block";
      } else {
        content_div.style.display = "none";
      }
    });
  });
});

// Tabs for Inbox, Settings, Courses and etc.
tabs.forEach(function (tab, tab_index) {
  tab.addEventListener("click", function () {
    tabs_wrap.forEach(function (content, content_index) {
      if (content_index === tab_index) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

// dropdown menu function
dropdown_item.forEach(function (tab, index) {
  tab.addEventListener("click", function () {
    tabs_wrap.forEach(function (wrap_div, content_div) {
      if (index === content_div) {
        wrap_div.style.display = "block";
      } else {
        wrap_div.style.display = "none";
      }
    });
  });
});

// Function for open TUITION POST
openModalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

// EventListener for Overlay (Black screen)
overlay.addEventListener("click", function () {
  const modals = document.querySelectorAll(".modalContainer.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

// ModalClose Eventlistener
closeModalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const modal = document.querySelector(".modalContainer");
    closeModal(modal);
  });
});

// open containerModal
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

// Close containerModal
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// Drop down menu on profile
$(document).ready(function () {
  $(".dropdown, .btn-group").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});

// Click function for the (By City in FOOTER)
$(document).ready(function () {
  $("#buttonClick").click(function () {
    $("#firstItems").toggle();
    $("#arrow-right, #arrow-down").toggle();
  });
});

// Click function for the (Subject in FOOTER)
$(document).ready(function () {
  $("#buttonClickSubject").click(function () {
    $("#SubjectContainer").toggle();
    $("#arrow-right-subject, #arrow-down-subject").toggle();
  });
});
// Click function for the (Institute in FOOTER)
$(document).ready(function () {
  $("#buttonClickInstitute").click(function () {
    $("#InstituteContainer").toggle();
    $("#arrow-right-institute, #arrow-down-institute").toggle();
  });
});
// Click function for the (Discipline in FOOTER)
$(document).ready(function () {
  $("#buttonClickDiscipline").click(function () {
    $("#DisciplineContainer").toggle();
    $("#arrow-down-discipline, #arrow-right-discipline").toggle();
  });
});

// Click function for the (Grades in FOOTER)
$(document).ready(function () {
  $("#buttonClickGrades").click(function () {
    $("#GradesContainer").toggle();
    $("#arrow-down-grades, #arrow-right-grades").toggle();
  });
});

// Input data (Select Subjects)
const tagify = new Tagify(input, {
  whitelist: [
    "Maths",
    "Programming",
    "C++",
    "Html",
    "CSS",
    "JavaScript",
    "CSS",
    "Java",
    "Python",
    "Git",
    "Geography",
    "English",
    "Pakistan",
    "Religion",
    "Arts & Humanities",
    "Building & Planning",
    "Business & Management",
    "Computing and IT",
    "Design",
    "Education Childhood & Youth",
    "Engineering",
    "Art",
    "Biology",
    "Chemistry",
    "Chinese",
    "Classics",
    "Computer Science",
    "Drama",
    "Economics",
    "English",
    "English as an Additional Language",
    "Food & Nutrition",
    "French",
    "Geography",
    "German",
    "Global Perspectives",
    "History",
    "Italian",
    "Learning Support",
    "Music",
    "Physical Education",
    "Physics",
    "Technology",
    "Social Sciences",
    "Science",
    "Psychology & Counselling",
    "Nursing & Healthcare Practice",
    "Medical Sciences",
    "Mathematics & Statistics",
    "Law",
    "Languages",
    "Health & Wellbeing",
    "Health & Social Care",
    "Environment & Development",
    "Politics",
    "Product Design",
    "Psychology",
    "Religion & Philosophy",
    "Spanish",
    "The Human Universe",
  ],
});

// Input data (Select Grades)
const tagifyTwo = new Tagify(inputTwo, {
  whitelist: [
    "Nursery",
    "KG",
    "Class 1 to 5",
    "Class 6 to 8",
    "Class 9",
    "Matric",
    "O levels",
    "A levels",
    "Bacehlor",
    "Masters",
    "PhD",
    "CSS",
    "GRE",
    "GMAT",
    "SAT",
    "Fsc. (Part 1)",
    "Fsc. (Part 2)",
    "Intermidate",
  ],
});

// Input data (Select Area)
const tagifyThree = new Tagify(inputThree, {
  maxTags: 3,
  whitelist: [
    "Pakistan",
    "India",
    "Afghanistan",
    "Class 6 to 8",
    "Class 9",
    "Matric",
    "O levels",
    "A levels",
    "Bacehlor",
    "Masters",
    "PhD",
    "CSS",
    "GRE",
    "GMAT",
    "SAT",
    "Fsc. (Part 1)",
    "Fsc. (Part 2)",
    "Intermidate",
  ],
});

// Input data (Choose a city)
const tagifyFour = new Tagify(inputFour, {
  whitelist: [
    "Kabul",
    "Ghazni",
    "Khost",
    "Class 6 to 8",
    "Class 9",
    "Matric",
    "O levels",
    "A levels",
    "Bacehlor",
    "Masters",
    "PhD",
    "CSS",
    "GRE",
    "GMAT",
    "SAT",
    "Fsc. (Part 1)",
    "Fsc. (Part 2)",
    "Intermidate",
  ],
});

// Input data (Select Subjects)
const tagifyFive = new Tagify(inputValueFive, {
  whitelist: [
    "Kabul",
    "Ghazni",
    "Khost",
    "Class 6 to 8",
    "Class 9",
    "Matric",
    "O levels",
    "A levels",
    "Bacehlor",
    "Masters",
    "PhD",
    "CSS",
    "GRE",
    "GMAT",
    "SAT",
    "Fsc. (Part 1)",
    "Fsc. (Part 2)",
    "Intermidate",
  ],
});
