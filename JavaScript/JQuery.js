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

// JQuery number counter for the second section
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

// Owl carousel JQuery (Slider image)
$(".owl-carousel")
  .on("initialized.owl.carousel changed.owl.carousel", function (e) {
    if (!e.namespace) {
      return;
    }
  })
  .owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
  });
