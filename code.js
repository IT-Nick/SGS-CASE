
var timeNow = new Date().toLocaleTimeString();

var city = "";
var workshop = "";
var employee = "";
var team = "";
var shift = "";

function select1(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(s1.value == "moscow") {
        var optionArray = ['|Выберите цех', '1|Цех 1', '2|Цех 2'];
        city = "Москва";
    }
    else if(s1.value == "spb") {
        var optionArray = ['|Выберите цех', '3|Цех 3', '4|Цех 4'];
        city = "Санкт-Петербург";
    }

    for(var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");
  
        newoption.value = pair[0]
        newoption.innerHTML = pair[1];
        
        s2.options.add(newoption);
    }
}

function select2(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(s1.value == "1") {
        var optionArray = ['Выберите сотрудника', 'Сотрудник 1', 'Сотрудник 2'];
        workshop = "Цех 1";
    }
    else if(s1.value == "2") {
        var optionArray = ['Выберите сотрудника', 'Сотрудник 3', 'Сотрудник 4'];
        workshop = "Цех 2";
    }
    else if(s1.value == "3") {
        var optionArray = ['Выберите сотрудника', 'Сотрудник 5', 'Сотрудник 6'];
        workshop = "Цех 3";
    }
    else if(s1.value == "4") {
        var optionArray = ['Выберите сотрудника', 'Сотрудник 7', 'Сотрудник 8'];
        workshop = "Цех 4";
    }

    for(var option in optionArray) {
        var newoption = document.createElement("option");
  
        newoption.value = optionArray[option];
        newoption.innerHTML = optionArray[option];
        
        s2.options.add(newoption);
    }

}

function select5() {
    var hour = new Date().getHours();
    var greeting;

    if (hour >= 5 && hour < 12)
        greeting = "Бригада 1 (Утро)";
    else if (hour >= 12 && hour < 18)
        greeting = "Бригада 2 (День)";
    else if (hour >= 18 && hour < 24)
        greeting = "Бригада 3 (Вечер)";
    else if (hour >= 0 && hour < 5)
        greeting = "Бригада 4 (Ночь)";
    

    document.getElementById("is1").innerHTML = greeting;
    team = greeting;
}

function select6() {
    var hour = new Date().getHours();
    var greeting;

    if (hour > 8 && hour < 20)
        greeting = "Смена 1";
    else
        greeting = "Смена 2";

    document.getElementById("is2").innerHTML = greeting;
    shift = greeting;
}

select5();
select6();

var sel1 = document.getElementById("slct1");
sel1.onchange = function() {
    select1(this.id, 'slct2');
}; 

var sel2 = document.getElementById("slct2");
sel2.onchange = function() {
    select2(this.id, 'slct3');
}; 


function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}


document.querySelector("#submit").onclick = function() {
    employee = document.getElementById("slct3").value;
    var resultsArray = [city, workshop, employee, team, shift];
    var json = JSON.stringify(resultsArray);
    createCookie('mycookie', json, 3);
}
