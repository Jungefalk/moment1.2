
//Interface för kurs
interface Course {
    code: string,
    name: string,
    progression: string,
    syllabus: string,
};

//Tom array som lagrar kurser
let courses: Course[] = [];

//Hämta element
let codeInput = document.getElementById("code") as HTMLInputElement;
let nameInput = document.getElementById("name") as HTMLInputElement;
let progressionInput = document.getElementById("progression") as HTMLInputElement;
let syllabysInput = document.getElementById("syllabus") as HTMLInputElement;
let courseListEl = document.getElementById("courseList") as HTMLUListElement;
let addCourseFormEl = document.getElementById("addCourseForm") as HTMLFormElement;

//Händelselyssnare - lyssnar på submit och kallar funktion
addCourseFormEl.addEventListener("submit", addCourse);


//Funktion som lägger till kurs
function addCourse(event: Event): void{
event.preventDefault()

let newCourse: Course = {
    code: codeInput.value,
    name: nameInput.value,
    progression: progressionInput.value,
    syllabus: syllabysInput.value
};

writeCourse(newCourse);
}

//Funktion som skriver ut kurs till skärmen
function writeCourse(newCourse: Course): void {

    let liEl = document.createElement("li");
    let liElText = document.createTextNode(`${newCourse.code} ${newCourse.name} ${newCourse.progression} ${newCourse.syllabus}`);
    liEl.appendChild(liElText);
    courseListEl.appendChild(liEl);

    //pusha till array
    courses.push(newCourse);
    
};