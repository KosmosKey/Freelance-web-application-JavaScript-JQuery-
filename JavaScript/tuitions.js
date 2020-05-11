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

// Eventlistener for second NEXT Button in the POST TUITION
document.querySelector("#toggle").addEventListener("click", function () {
  const toggleCheckbox = $('#toggle[type="checkbox"]');
  const toggleCheckboxTwo = document.querySelector(".inputsTwo");
  const lableCheckedTwo = document.querySelector(".lableCheckedTwo");
  const personParagraph = document.querySelector(".personParagraph");
  if (toggleCheckbox.is(":not(:checked)")) {
    toggleCheckboxTwo.style.display = "none";
    lableCheckedTwo.style.display = "none";
    personParagraph.style.display = "none";
  }
  if (toggleCheckbox.is(":checked")) {
    toggleCheckboxTwo.style.display = "block";
    lableCheckedTwo.style.display = "block";
    personParagraph.style.display = "block";
  }
});

document.querySelector("#toggleOne").addEventListener("click", function () {
  const toggleCheckbox = $('#toggleOne[type="checkbox"]');
  const toggleCheckboxTwo = document.querySelector(".inputsTwo");
  const lableCheckedTwo = document.querySelector(".lableChecked");
  const personParagraph = document.querySelector(".onlineParagraph");
  const cityContainer = document.querySelector(".cityContainer");
  if (toggleCheckbox.is(":not(:checked)")) {
    toggleCheckboxTwo.style.display = "none";
    lableCheckedTwo.style.display = "none";
    personParagraph.style.display = "none";
    cityContainer.style.display = "none";
  }
  if (toggleCheckbox.is(":checked")) {
    toggleCheckboxTwo.style.display = "block";
    lableCheckedTwo.style.display = "block";
    personParagraph.style.display = "block";
    cityContainer.style.display = "block";
  }
});

// Click function for the (By City in FOOTER)
$(".clickBtn").click(function () {
  $("#caret-right, #caret-down, #lableFour, .personParagraphTwo").toggle();
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
