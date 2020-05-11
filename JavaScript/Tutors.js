const buttonOpenModal = document.querySelector("[data-target-button]");
const modalOpen = document.querySelector(".listItemContainer");
const listItems = document.querySelectorAll(".listItemContainer ul li");
const pagiantionButton = document.querySelectorAll(".paginationDiv ul li a");
const overlay = document.getElementById("overlay");

pagiantionButton.forEach((buttons) => {
  buttons.addEventListener("click", function () {
    pagiantionButton.forEach((tab) => {
      tab.classList.remove("active");
    });
    buttons.classList.add("active");
  });
});

buttonOpenModal.addEventListener("click", function () {
  modalOpen.classList.add("active");
  overlay.classList.add("active");
});
overlay.addEventListener("click", function () {
  overlay.classList.remove("active");
  modalOpen.classList.remove("active");
});
listItems.forEach((list) => {
  list.addEventListener("click", function () {
    listItems.forEach((item) => {
      item.classList.remove("active");
    });
    list.classList.add("active");
    modalOpen.classList.remove("active");
  });
});

listItems[0].addEventListener("click", function () {
  const TutorField = document.querySelector(".TutorField");
  TutorField.innerHTML = "TutorScore";
  overlay.classList.remove("active");
});

listItems[1].addEventListener("click", function () {
  const TutorField = document.querySelector(".TutorField");
  TutorField.innerHTML = "Last Active";
  overlay.classList.remove("active");
});

listItems[2].addEventListener("click", function () {
  const TutorField = document.querySelector(".TutorField");
  TutorField.innerHTML = "Profile Views";
  overlay.classList.remove("active");
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
