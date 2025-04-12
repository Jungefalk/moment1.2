
//Interface för kurs
interface Course{
code: string,
name: string,
progression: string,
syllabus: string,
};

//Hämta element
let codeInput = document.getElementById("code") as HTMLInputElement;
let nameInput = document.getElementById("name") as HTMLInputElement;
let progressionInput = document.getElementById("Progression") as HTMLInputElement;
let syllabysInput = document.getElementById("syllabus") as HTMLInputElement;
let buttonEl = document.getElementById("submit") as HTMLButtonElement;
let courseListEl = document.getElementById("courseList") as HTMLUListElement;