;
//Hämta element
var codeInput = document.getElementById("code");
var nameInput = document.getElementById("name");
var progressionInput = document.getElementById("Progression");
var syllabysInput = document.getElementById("syllabus");
var buttonEl = document.getElementById("submit");
var courseListEl = document.getElementById("courseList");
var addCourseFormEl = document.getElementById("addCourseForm");
//Händelselyssnare - lyssnar på submit och kallar funktion
addCourseFormEl.addEventListener("submit", addCourse);
//Funktion som lägger till kurs
function addCourse(event) {
    event.preventDefault();
    writeCourse();
}
//Funktion som skriver ut kurs till skärmen
function writeCourse() {
}
;
