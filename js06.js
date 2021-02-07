// Conditions
// conditional statements
// 1 - if
// 2 - else
// 3 - else if
// 4 - switch

if (new Date().getHours() < 18) {
    return console.log("Good Day");
} else {
    return console.log("bed time");
}

var time = 11;
if (time > 12) {
    return console.log("Lunch time");
} else {
    return console.log("prepare for lunch");
}

var day = 1;
if (day >= 6) {
    return console.log("it's a weekend soon");
} else if (day >= 3) {
    return console.log("it's a middle of the week");
} else {
    return console.log("It's a beginning of the week");
}

function myFunction(time) {
    var greeting = "";
    if (time < 10) {
        return greeting = "Good morning";
    } else if (time < 20) {
        return greeting = "Good day";
    } else {
        return greeting = "Good evening";
    }
}
console.log(myFunction(21));

// Javascript Switch Statement 

var day = "";
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Looking forward to the weekend";
}

console.log("Today is a " + day);
