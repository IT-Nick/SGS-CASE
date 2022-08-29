let city = "";
let workshop = "";
let employee = "";
let team = "";
let shift = "";

function select1(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);

  let optionArray = [];

  s2.innerHTML = "";

  if (s1.value === "moscow") {
    optionArray = ["|Выберите цех", "1|Цех 1", "2|Цех 2"];
    city = "Москва";
  } else if (s1.value === "spb") {
    optionArray = ["|Выберите цех", "3|Цех 3", "4|Цех 4"];
    city = "Санкт-Петербург";
  }

  for (const option in optionArray) {
    const pair = optionArray[option].split("|");
    const newOption = document.createElement("option");

    newOption.value = pair[0];
    newOption.innerHTML = pair[1];

    s2.options.add(newOption);
  }
}

function select2(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);

  let optionArray = [];

  s2.innerHTML = "";

  if (s1.value == "1") {
    optionArray = ["Выберите сотрудника", "Сотрудник 1", "Сотрудник 2"];
    workshop = "Цех 1";
  } else if (s1.value == "2") {
    optionArray = ["Выберите сотрудника", "Сотрудник 3", "Сотрудник 4"];
    workshop = "Цех 2";
  } else if (s1.value == "3") {
    optionArray = ["Выберите сотрудника", "Сотрудник 5", "Сотрудник 6"];
    workshop = "Цех 3";
  } else if (s1.value == "4") {
    optionArray = ["Выберите сотрудника", "Сотрудник 7", "Сотрудник 8"];
    workshop = "Цех 4";
  }

  for (const option in optionArray) {
    const newOption = document.createElement("option");

    newOption.value = optionArray[option];
    newOption.innerHTML = optionArray[option];

    s2.options.add(newOption);
  }
}

function select5() {
  let hour = new Date().getHours();
  let greeting;

  if (hour >= 5 && hour < 12) greeting = "Бригада 1 (Утро)";
  else if (hour >= 12 && hour < 18) greeting = "Бригада 2 (День)";
  else if (hour >= 18 && hour < 24) greeting = "Бригада 3 (Вечер)";
  else if (hour >= 0 && hour < 5) greeting = "Бригада 4 (Ночь)";

  const is1 = document.getElementById("is1");
  is1.innerHTML = greeting;
  team = greeting;
}

function select6() {
  let hour = new Date().getHours();
  let greeting;

  if (hour > 8 && hour < 20) greeting = "Смена 1";
  else greeting = "Смена 2";

  const is2 = document.getElementById("is2");
  is2.innerHTML = greeting;
  shift = greeting;
}

select5();
select6();

function onChangeHandler() {
  const sel1 = document.getElementById("slct1");
  const sel2 = document.getElementById("slct2");
  sel1.onchange = () => select1("slct1", "slct2");
  sel2.onchange = () => select2("slct2", "slct3");
}

onChangeHandler();

function createCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  employee = document.getElementById("slct3").value;
  const resultsArray = [city, workshop, employee, team, shift];
  const json = JSON.stringify(resultsArray);
  createCookie("mycookie", json, 3);
});
