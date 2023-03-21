let person = prompt("Please enter your name");

let gender = prompt("Please enter your gender");


function genderName(gender1) {
    while (gender1 != "female" && gender1 != "male") {

        gender1 = prompt("Please enter your gender correctly : ");


    }


    if (gender1 == "female") {
        alert("Hello Mrs " + person);
    }
    else if (gender1 == "male") {
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

// for (var i = 0; i < customerInfo.length; i++) {
//     console.log(customerInfo[i]);
// }

// Create a div > paragraph > ul > li 
// Fill the data you got from the user into the previous elements : 
// Write it back to the html page 
let mainDiv = document.getElementById("jsDiv")
let ul = document.createElement("ul");

mainDiv.appendChild(ul);

for (var i = 0; i < customerInfo.length; i++) {
    let li = document.createElement("li");

    li.innerHTML = customerInfo[i];
    ul.appendChild(li);
}
