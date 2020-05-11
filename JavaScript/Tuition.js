const stars = document.querySelectorAll(".fa-star-o");
const addTitle = document.querySelector(".inputAdd");

addTitle.addEventListener("click", function () {
  const inputRemoveField = document.querySelector(".inputRemove");
  const removeBtn = document.querySelector(".removeBtn");
  inputRemoveField.style.display = "block";
  addTitle.style.display = "none";

  removeBtn.addEventListener("click", function () {
    inputRemoveField.style.display = "none";
    addTitle.style.display = "block";
  });
});

for (let index = 0; index < stars.length; index++) {
  const veryPoor = document.querySelector(".veryPoor");
  stars[index].addEventListener("mouseover", function () {
    for (let j = 0; j < stars.length; j++) {
      stars[j].classList.remove("fa-star");
      stars[j].classList.add("fa-star-o");
    }
    for (let j = 0; j <= index; j++) {
      stars[j].classList.remove("fa-star-o");
      stars[j].classList.add("fa-star");
    }
  });

  stars[0].addEventListener("mouseover", function () {
    veryPoor.innerHTML = "<span style='color: #F44336;'>Very poor</span>";
  });

  stars[1].addEventListener("mouseover", function () {
    veryPoor.innerHTML = "<span style='color: #E57373;'>Poor</span>";
  });

  stars[2].addEventListener("mouseover", function () {
    veryPoor.innerHTML = "<span style='color: #FFC107;'>Average</span>";
  });
  stars[3].addEventListener("mouseover", function () {
    veryPoor.innerHTML = "<span style='color: #B2C06A;'>Good</span>";
  });
  stars[4].addEventListener("mouseover", function () {
    veryPoor.innerHTML = "<span style='color: #1B5E20'>Excellent</span>";
  });

  stars[index].addEventListener("mouseout", function () {
    for (let j = 0; j < stars.length; j++) {
      stars[j].classList.add("fa-star-o");
      stars[j].classList.remove("fa-star");
    }
    for (let j = 0; j <= index; j++) {
      stars[j].classList.remove("fa-star-o");
      stars[j].classList.add("fa-star");
    }
  });
}

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
