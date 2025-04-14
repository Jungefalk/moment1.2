
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
let codeErrorEl = document.getElementById("codeError") as HTMLSpanElement;
let progressionErrorEl = document.getElementById("progressionError") as HTMLSpanElement;
let clearBtnEl = document.getElementById("clearBtn") as HTMLButtonElement;

//Händelselyssnare
addCourseFormEl.addEventListener("submit", addCourse);
clearBtnEl.addEventListener("click", clearStorage);

//Funktion som rensar localStorage och listan
function clearStorage(): void{
    localStorage.clear();

    courseListEl.innerHTML = "";

}

//Funktion som lagrar data med localStorage
function storeData(): void{

    const jsonStr = JSON.stringify(courses);
    localStorage.setItem("courses", jsonStr)
};

//Funktion som hämtar in datan från localStorage
function loadData(): void{

let storedData = localStorage.getItem("courses");
if(storedData){
  let storedCourses = JSON.parse(storedData);
  courses = storedCourses;

  //striv ut datan
  courses.forEach(course => {
    writeCourse(course)
  });
};
};

//Funktion som lägger till kurs
function addCourse(event: Event): void {
    event.preventDefault()

    let newCourse: Course = {
        code: codeInput.value,
        name: nameInput.value,
        progression: progressionInput.value,
        syllabus: syllabysInput.value
    };

    //Töm innerHTML
    codeErrorEl.innerHTML = "";
    progressionErrorEl.innerHTML = "";

    //Kolla att kurskoden inte redan finns
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].code === newCourse.code) {

            //Felmeddelande i innetHTML
            codeErrorEl.innerHTML = "<p>Kurskoden finns redan</p>";

            //Avbryt funktion
            return;
        };
    };

    //Kolla att progression är korrekt
    if (progressionInput.value != "A" && progressionInput.value != "B" && progressionInput.value != "C") {

        //Felmeddelande i innerHTML
        progressionErrorEl.innerHTML = "<p> Ange korrekt progression. A, B eller C.</p>"

        //Avbryt funktion
        return;
    }

    //pusha till array
    courses.push(newCourse);
    storeData();

    //Töm inputfält
    codeInput.value = "";
    nameInput.value = "";
    progressionInput.value = "";
    syllabysInput.value = "";


    writeCourse(newCourse);
}

//Funktion som skriver ut kurs till skärmen
function writeCourse(newCourse: Course): void {

    courseListEl.innerHTML += ` <tr>
    <td>${newCourse.code}</td>
    <td>${newCourse.name}</td>
    <td>${newCourse.progression}</td>
    <td><a href="${newCourse.syllabus}">${newCourse.syllabus}</a></td>
    </tr> `

};

//Hämta sparad data
loadData();