const yearsInput = document.getElementById("years");
const monthInput = document.getElementById("month");
const daysInput = document.getElementById("days");

let yearsResult = document.getElementById("years-result");
let monthResult = document.getElementById("month-result");
let daysResult = document.getElementById("days-result");
let require = document.getElementById("requie");
let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

let now = new Date();
let day = now.getDate();
let month = 1 + now.getMonth();
let year = now.getFullYear();
let monthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let calculateAge = () => {
  let inputs = document.querySelectorAll(".input");
  console.log(inputs);
  let isTrue = true;

  inputs.forEach((i) => {
    if (!i.value) {
      i.style.borderColor = "red";
      i.parentElement.querySelector(".require").textContent =
        "This field is required";
      isTrue = false;
    } else if (monthInput.value > 12 || monthInput.value <= 0) {
      monthInput.style.borderColor = "red";
      monthInput.parentElement.querySelector(".require").textContent =
        "Must be a valid month";
      isTrue = false;
    } else if (daysInput.value > 31 || daysInput.value <= 0) {
      daysInput.style.borderColor = "red";
      daysInput.parentElement.querySelector(".require").textContent =
        "Must be a valid day";
      isTrue = false;
    } else if (
      yearsInput.value <= 0 ||
      yearsInput.value > now.getFullYear()
    ) {
      yearsInput.style.borderColor = "red";
      yearsInput.parentElement.querySelector(".require").textContent =
        "Must be a valid Year";
      isTrue = false;
    } else {
      i.style.borderColor = "black";
      i.parentElement.querySelector(".require").textContent = "";
      isTrue = true;
    }
  });
  return isTrue;
};

function handleSubmit(e) {
  e.preventDefault();
  if (calculateAge()) {
    if (daysInput.value > day) {
      day = day + monthsArr[month - 1];
      month = month - 1;
    }
    if (monthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }

    let OutputDay = day - daysInput.value;
    let OutputMonth = month - monthInput.value;
    let OutputYear = year - yearsInput.value;

    daysResult.innerHTML = OutputDay;
    monthResult.innerHTML = OutputMonth;
    yearsResult.innerHTML = OutputYear;
  }
}
