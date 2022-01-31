// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

// FizzBuzz using switch
// Language: javascript
// Path: bekki_fizzbuzz.js
for (let i = 1; i <= 100; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log("FizzBuzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;

    default:
      console.log(i);
  }
}

// switch case demonstration
// Language: javascript
// Path: bekki_switch.js
// let day = "Monday";
// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
// }

// function that takes in a string, and if it's a day of the week, prints "Day of the week" otherwise print "Not a day of the week"
function isDayOfWeek(str) {
  if (str === "Monday") {
    console.log("Day of the week");
  } else if (str === "Tuesday") {
    console.log("Day of the week");
  } else if (str === "Wednesday") {
    console.log("Day of the week");
  } else if (str === "Thursday") {
    console.log("Day of the week");
  } else if (str === "Friday") {
    console.log("Day of the week");
  } else if (str === "Saturday") {
    console.log("Day of the week");
  } else if (str === "Sunday") {
    console.log("Day of the week");
  } else {
    console.log("Not a day of the week");
  }
}

// Copilot suggestion
function betterIsDayOfWeek(str) {
  switch (str) {
    case "Monday":
      console.log("Day of the week");
      break;
    case "Tuesday":
      console.log("Day of the week");
      break;
    case "Wednesday":
      console.log("Day of the week");
      break;
    case "Thursday":
      console.log("Day of the week");
      break;
    case "Friday":
      console.log("Day of the week");
      break;
    case "Saturday":
      console.log("Day of the week");
      break;
    case "Sunday":
      console.log("Day of the week");
      break;
    default:
      console.log("Not a day of the week");
  }
}

function betterYetIsDayOfWeek(str) {
  if (
    str === "Monday" ||
    str === "Tuesday" ||
    str === "Wednesday" ||
    str === "Thursday" ||
    str === "Friday" ||
    str === "Saturday" ||
    str === "Sunday"
  ) {
    console.log("Day of the week");
  } else {
    console.log("Not a day of the week");
  }
}

function yetBetterIsDayOfWeek(str) {
  switch (str) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
    case "Sunday":
      console.log("Day of the week");
      break;
    default:
      console.log("Not a day of the week");
  }
}

let index = 234213010;
switch (index) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Not Sunday, Monday nor Tuesday");
    break;
}
