var name = "Alden";

switch(name) {
  case "Kirsten":
    console.log("Wow, what a cool name!");
    break;
  case "Kristen":
    console.log("Yikes, sorry...");
    break;
  default:
  console.log(`Nice to meet you, ${name}`);
}

// You are given a variable, . Your task is to print:
//
// - ONE, if it is equal to 1.
// - TWO, if it is equal to 2.
// - THREE, if it is equal to 3.
// - FOUR, if it is equal to 4.
// - FIVE, if it is equal to 5.
// - SIX, if it is equal to 6.
// - SEVEN, if it is equal to 7.
// - EIGHT, if it is equal to 8.
// - NINE, if it is equal to 9.
// - PLEASE TRY AGAIN, if it is none of the above.

 var num;

 switch(num) {
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
    break;
  case 3:
    console.log("THREE");
    break;
  case 4:
    console.log("FOUR");
    break;
  case 5:
    console.log("FIVE");
    break;
  case 6:
    console.log("SIX");
    break;
  case 7:
   console.log("SEVEN");
   break;
  case 8:
    console.log("EIGHT");
    break;
  case 9:
    console.log("NINE");
    break;
  default:
     console.log("Please try again");
     break;
 }

 //Create a switch statement that evaluates a month and a year and tells you how many days are in the month


function dayCount(month, year) {

  switch(month) {
    case "September":
    case "April":
    case "June":
    case "November":
      dayCount = 30;
      break;
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "September":
    case "October":
      dayCount = 31
      break;
    case "February":
      if (year % 4 === 0) {
        dayCount = 29;
      } else {
      dayCount = 28;
      }
      break;
    default:
      console.log(`${month} is not a valid month`);
      dayCount = null;
      break;
  }
  return dayCount;
}

console.log(dayCount("February", 2007));
