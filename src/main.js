;
//Hämta element
var codeInput = document.getElementById("code");
var nameInput = document.getElementById("name");
var progressionInput = document.getElementById("progression");
var syllabysInput = document.getElementById("syllabus");
var buttonEl = document.getElementById("submit");
var courseListEl = document.getElementById("courseList");
var addCourseFormEl = document.getElementById("addCourseForm");
//Händelselyssnare - lyssnar på submit och kallar funktion
addCourseFormEl.addEventListener("submit", addCourse);
//Funktion som lägger till kurs
function addCourse(event) {
    event.preventDefault();
    var newCourse = {
        code: codeInput.value,
        name: nameInput.value,
        progression: progressionInput.value,
        syllabus: syllabysInput.value
    };
    writeCourse(newCourse);
}
//Funktion som skriver ut kurs till skärmen
function writeCourse(newCourse) {
    var liEl = document.createElement("li");
    var liElText = document.createTextNode("".concat(newCourse.code, " ").concat(newCourse.name, " ").concat(newCourse.progression, " ").concat(newCourse.syllabus));
    liEl.appendChild(liElText);
    courseListEl.appendChild(liEl);
}
;
