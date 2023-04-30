const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
let resultEl = document.getElementById("result");

function calculateAge() {
  resultEl.innerText = "";
  const birthdayValue = birthdayEl.value;

  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    if (age < 0) {
      resultEl.innerText = "The date cannot be greater than today!";
    } else {
      resultEl.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old`;
    }
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnEl.addEventListener("click", calculateAge);
