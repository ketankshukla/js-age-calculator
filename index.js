const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
let resultEl = document.getElementById("result");
let tester = document.getElementById("result")

const calculateAge = () => {
  resultEl.innerText = "";
  const birthdayValue = birthdayEl.value;

  if (!birthdayValue) {
    alert("Please enter your birthday");
    return;
  }

  const age = getAge(birthdayValue);
  resultEl.innerText = age < 0
      ? "The date cannot be greater than today!"
      : `You are ${age} ${age > 1 ? "years" : "year"} old`;
};


const getAge = (birthdayValue) => {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();

  return month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())
      ? age - 1
      : age;
};


btnEl.addEventListener("click", calculateAge);