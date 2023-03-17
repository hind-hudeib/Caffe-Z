let person = prompt("Please enter your name");

let gender = prompt("Please enter your gender");

if (gender == "female" || gender == "FEMALE") {
  alert("Hello Mrs " + person);


}
else if (gender == "male" || gender == "MALE") {
  alert("Hello Mr " + person);
}
else {
  alert("Hello " + person);
}

// -----------------------------------------------------------------

let drink = prompt("Do you want a hot or cold drink ");

let drinkName = prompt("What do you want to drink?");

alert(drink +" " + drinkName + " is getting prepared");


console.log(person +" "+ drinkName);


