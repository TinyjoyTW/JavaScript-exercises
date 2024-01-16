// /*******************************************
//     Iteration 1.1 | Tongue Twister
// *******************************************/
// const s1 = "Fred";
// const s2 = "fed";
// const s3 = "Ted";
// const s4 = "bread";
// const s5 = "and";

// // Concatenate the string variables into one new string

// const tongueTwister =
//   s1 +
//   " " +
//   s2 +
//   " " +
//   s3 +
//   " " +
//   s4 +
//   " " +
//   s5 +
//   " " +
//   s3 +
//   " " +
//   s2 +
//   " " +
//   s1 +
//   " " +
//   s4;

// const tongueTwister2 = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// // Print out the concatenated string

// console.log(tongueTwister);
// console.log(tongueTwister2);

// /*******************************************
//     Iteration 1.2 | Camel Tail
// *******************************************/
// const part1 = "java";
// const part2 = "script";

// // Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// const lastLetterUppercase1 = part1.slice(-1).toUpperCase();
// const lastLetterUppercase2 = part2.slice(-1).toUpperCase();
// const result =
//   part1.slice(0, -1) +
//   lastLetterUppercase1 +
//   part2.slice(0, -1) +
//   lastLetterUppercase2;

// // Another way to do it:
// const camelTail =
//   part1.slice(0, part1.length - 1) +
//   part1.charAt(part1.length - 1).toUpperCase() +
//   part2.slice(0, part2.length - 1) +
//   part2.charAt(part2.length - 1).toUpperCase();

// // Print the cameLtaiL-formatted string

// console.log(`CameLtaiL: ${result}`);

// /*******************************************
//     Iteration 2.1 | Calculate Tip
// *******************************************/
// const billTotal = 84;

// // Calculate the tip (15% of the bill total)

// const tipAmount = billTotal * 0.15;

// // Print out the tipAmount

// console.log(`The 15% tip amount is ${tipAmount}`);

// /*******************************************
//     Iteration 2.2 | Generate Random Number
// *******************************************/

// // Generate a random integer between 1 and 10 (inclusive)

// let randomNumber = Math.floor(Math.random() * 10) + 1;

// // Print the generated random number

// console.log(randomNumber);

// /*******************************************
//     Iteration 3.1 | Booleans
// *******************************************/

// const a = true;
// const b = false;

// // Try and guess the output of the below expressions first and write your answers down:
// const expression1 = a && b; //false

// const expression2 = a || b; //true

// const expression3 = !a && b; //false

// const expression4 = !(a && b); //true

// const expression5 = !a || !b; //true

// const expression6 = !(a || b); //false

// const expression7 = a && a; //true

// console.log(expression1);
// console.log(expression2);
// console.log(expression3);
// console.log(expression4);
// console.log(expression5);
// console.log(expression6);
// console.log(expression7);

// // Iteration 1: Names and Input

// const hacker1 = "Joy";
// console.log(`The driver's name is ${hacker1}`);

// const hacker2 = "alsoJoy";
// console.log(`The navigator's name is ${hacker2}`);

// // Iteration 2: Conditionals

// function compareNameLength(driver, navigator) {
//   if (driver.length > navigator.length) {
//     console.log(
//       `The driver has the longest name, it has ${driver.length} characters.`
//     );
//   } else if (driver.length < navigator.length) {
//     console.log(
//       `It seems that the navigator has the longest name, it has ${navigator.length}.`
//     );
//   } else {
//     console.log(
//       `Wow, you both have equally long names, ${driver.length} characters.`
//     );
//   }
// }

// compareNameLength(hacker1, hacker2);
// compareNameLength("Juan", "Alberto");
// compareNameLength("Banana", "Ana");
// compareNameLength("Omar", "Anna");

// // Iteration 3: Loops

// let capName1 = "";
// //Instead of using 'else', break and continue also work.
// for (let i = 0; i < hacker1.length; i++) {
//   if (i < hacker1.length - 1) {
//     capName1 += hacker1[i].toUpperCase() + " ";
//   } else {
//     capName1 += hacker1[i].toUpperCase();
//   }
// }

// let capName2 = "";
// for (let i = hacker2.length - 1; i >= 0; i--) {
//   capName2 += hacker2[i].toUpperCase() + " ";
// }

// console.log(capName1);
// console.log(capName2);

// function sortName(driver, navigator) {
//   if (driver.localeCompare(navigator) === -1) {
//     console.log("The driver's name goes first.");
//   } else if (driver.localeCompare(navigator) === 1) {
//     console.log("Yo, the navigator goes first, definitely.");
//   } else {
//     console.log("What?! You both have the same name?");
//   }
// }

// sortName(hacker1, hacker2);
// sortName("Anna", "Anna");
// sortName("Anna", "Abby");

// /* Bonus 1: Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.*/

// const longText = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

// const wordArray = longText.split(/\s+/);
// const wordCount = wordArray.length;
// console.log(`The number of words in this article is:  ${wordCount}`);

// const etCount = longText.match(/ et /g).length;
// console.log(etCount);

// //Solution with for loops and conditions:

// let wordCountResult = 0;
// for (let i = 0; i < wordArray.length; i++) {
//   wordCountResult++;
// }
// console.log(wordCountResult);

// let countEt = 0;
// for (let i = 0; i < wordArray.length; i++) {
//   if (wordArray.includes("et")) {
//     countEt++;
//   } else {
//     console.log("not found");
//   }
// }

// console.log(countEt);

// //Bonus 2: How to check if a string is a palindrome?
// //for loop

// const phraseToCheck = "A man, a plan, a canal, Panama!";

// const isPalindrome = (str) => {
//   const newStr = str.replace(/\W/g, "").toLowerCase();
//   for (let i = 0; i < newStr.length / 2; i++) {
//     const leftCharacter = newStr[i];
//     const rightCharacter = newStr[newStr.length - 1 - i];
//     if (leftCharacter !== rightCharacter) {
//       return false;
//     }
//   }
//   return true;
// };

// // const isPalindrome = (str) => {
// //   str = str.replace(/\W/g, "");
// //   str = str.toLowerCase();
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] !== str[str.length - 1 - i]) {
// //       return false;
// //     }
// //   }
// //   return true;
// // };

// console.log(isPalindrome(phraseToCheck));

// const sumNumbers = (a, b) => {
//   console.log("some values");
//   return a + b;
// };

// // Capitalize the first letter of each array item:
// const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];
// const capCities = cities.map(city => city[0].toUpperCase() + city.slice(1));
// console.log(capCities);

// const students = [
//   {
//     name: "Tony Parker",
//     firstProject: 80,
//     secondProject: 75,
//     finalExam: 90,
//   },
//   {
//     name: "Marc Barchini",
//     firstProject: 84,
//     secondProject: 65,
//     finalExam: 65,
//   },
//   {
//     name: "Claudia Lopez",
//     firstProject: 45,
//     secondProject: 95,
//     finalExam: 99,
//   },
//   {
//     name: "Alvaro Briattore",
//     firstProject: 82,
//     secondProject: 92,
//     finalExam: 70,
//   },
//   {
//     name: "Isabel Ortega",
//     firstProject: 90,
//     secondProject: 32,
//     finalExam: 85,
//   },
//   {
//     name: "Francisco Martinez",
//     firstProject: 90,
//     secondProject: 55,
//     finalExam: 78,
//   },
//   {
//     name: "Jorge Carrillo",
//     firstProject: 83,
//     secondProject: 77,
//     finalExam: 90,
//   },
//   {
//     name: "Miguel López",
//     firstProject: 80,
//     secondProject: 75,
//     finalExam: 75,
//   },
//   {
//     name: "Carolina Perez",
//     firstProject: 85,
//     secondProject: 72,
//     finalExam: 67,
//   },
//   {
//     name: "Ruben Pardo",
//     firstProject: 89,
//     secondProject: 72,
//     finalExam: 65,
//   },
// ];

// const finalGrades = students.map((student) => {
//   const firstSecondProjects = (student.firstProject + student.secondProject) / 2 * 0.4;
//   const finalExamGrade = student.finalExam * 0.6;  
//   const finalGrades = firstSecondProjects + finalExamGrade;
//   return { name: student.name, finalGrade: finalGrades};
  
// });
// console.log(JSON.stringify(finalGrades));

const menu = [
  { name: 'Carrots', calories: 150 },
  { name: 'Steak', calories: 350 },
  { name: 'Broccoli', calories: 120 },
  { name: 'Chicken', calories: 250 },
  { name: 'Pizza', calories: 520 }
];

const averageCalories = menu.reduce((accumulator,current) => {
    return accumulator = accumulator + current.calories; 
}, 0) / menu.length;

console.log(averageCalories); // 278
