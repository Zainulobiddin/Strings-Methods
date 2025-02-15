// #Task1:
// Create a function which makes the last character of a string repeatnnumber of times.

// let modifylast = (text, n) => {
//     let lastLetter = text.at(-1)
//     for (let i = 0; i < n-1; i++) {
//         text = text.concat(lastLetter)
//     }
//     return text
// }
// console.log(modifylast('salom', 2));
// console.log(modifylast('Hello', 3));
// console.log(modifylast('hey', 6));
// console.log(modifylast('excuse me what?', 5));

// #Task2.
// Create a function that takes a string and returns the concatenated first and last character.

// let firstLast = function (text) {
//     return text.charAt(0).concat(text.at(-1))
// }
// console.log(firstLast("ganesh"));
// console.log(firstLast("shiva"));
// console.log(firstLast("vishnu"));

// #Task3
// Write to fucntions: 1. toInt(): A function to convert a string to an integer.
// 2. toString(): A function to convert an integer to a string

//string => number
// let toInt = (satr) => {
//     return +satr
// }

// // number => string
// let toString = (integer) => {
//     return integer.toString()
// }

// console.log(typeof toInt('234'));
// console.log(typeof toString(123));

// #Task4
// Create a fucntion that takes in a word and detemines whether or not it is plural.
// A plural word is one that ends in "s".

// function isPlural(text) {
//     return text.at(-1) === "s"
// }
// console.log(isPlural("changes"));
// console.log(isPlural("change"));
// console.log(isPlural("dudes"));

// #Task5
// Create a function that takes a string of lowercase charaters and returns that string reversed and in upper case.

let reverseCapitalize = (str) => {
    return str.split("").reverse().join("").toUpperCase();
  };
  
  console.log(reverseCapitalize("abc"));
  console.log(reverseCapitalize("hellothere"));
  console.log(reverseCapitalize("input"));
  