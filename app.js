let person = prompt("Please enter your name");

let gender = prompt("Please enter your gender");


function genderName(gender1) {
    while (gender1 != "female" && gender1 != "male") {

        gender1 = prompt("Please enter your gender correctly : ");


    }


    if (gender == "female") {
        alert("Hello Mrs " + person);
    }
    else if (gender == "male") {
        alert("Hello Mr " + person);
    }
}

genderName(gender)
// -----------------------------------------------------------------

let drink = prompt("Do you want a hot or cold drink ");

let drinkName = prompt("What do you want to drink?");

alert(drink + " " + drinkName + " is getting prepared");

console.log(person + " " + drinkName);

let customerInfo = [person, gender, drink, drinkName];

for (var i = 0; i < customerInfo.length; i++) {
    console.log(customerInfo[i]);
}

