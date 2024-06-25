// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = [
//   "cheyenne",
//   "santa fe",
//   "tucson",
//   "great falls",
//   "honolulu",
// ];
// for (var i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//   }
//   else(cityToCheck ==! cleanestCities[i]); {
//     alert("he is not found");
//   }
//   console.log(cityToCheck.toLowerCase)
// }
// ;

// let cars = citycheck.slice(0,1,2);
// console.log(cars);
// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//   if (str.slice(i, i + 2) === " ") {
//     alert("No double spaces!");
//     break;
//   }
// // }
// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//   }
// }

// switch statements:

// const dayOfWk = ["Sat","Sun"]

// switch (dayOfWk) {
//   case "Sat":
//     alert("Whoopee");
//     break;
//   case "Sun":
//     alert("Whoopee");
//     break;
//   case "Fri":
//     alert("TGIF!");
//     break;
//   default:
//     alert("Shoot me now!");
// // }

// for (var i = 0; i <= 10; i++) {
//   console.log(i+2);
// }

// example 

let x = 10;

function outer() {
    let x = 20;

    function inner() {
        let y = x + 1;
        console.log(y);
    }
    inner();
}

outer();