//  # Functional Programming Set 1

/*
**Instructions:** 
1. Make use of .map() and .filter() methods. 
2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed. 
3. Do NOT use for-loops.

*/

//  1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

// Your ES6 function here

const incrementNumbers = (arr) => arr.map((item) => item + 3);

const numbers1 = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers1));

// Output: [4, 5, 6, 7, 8]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

//  2. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

// Your ES6 function here

const capitalizeArray = (arr) => arr.map((item) => item.toUpperCase());

const myArray = ["apple", "banana", "cherry"];
console.log(capitalizeArray(myArray));

// Output: ["APPLE", "BANANA", "CHERRY"]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

//  3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// Your ES6 function here

const getAges = (arr) => arr.map((item) => item.age);

const people1 = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];
const ages = getAges(people1);

console.log(ages); // Output: [25, 24, 29]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

//  4. Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

// Your ES6 function here

const getProductNamesInLowerCase = (arr) =>
  arr.map((item) => item.name.toLowerCase());

const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];
console.log(getProductNamesInLowerCase(products));

// Output: ["lip balm", "perfume", "socks"]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

//  5. Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

// Your ES6 function here

const getCityNames = (arr) => arr.map((item) => item.name);

const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

console.log(getCityNames(cities));

// Output: ["New York", "Los Angeles", "Bangalore"]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

//  6. Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

// Your ES6 function here

const filterLongStrings = (arr) => arr.filter((item) => item.length > 5);

const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
console.log(filterLongStrings(fruits));

// Output: ["banana", "cherry", "watermelon", "pineapple"]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

//  7. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

// Your ES6 code here

const isDivisibleBy3and5 = (arr) =>
  arr.filter((item) => item % 3 === 0 && item % 5 === 0);

const numbers2 = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numbers2));

// Output: [30, 15]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

//  8. Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

// Your ES6 code here

const filterByAge = (arr) => arr.filter((item) => item.age > 30 && item);

const people2 = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

console.log(filterByAge(people2));

// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

// 9. Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

// Your ES6 code here

const filterByScore = (arr) => arr.filter((item) => item.score > 80 && item);

const students = [
  { name: "Aditya", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];

console.log(filterByScore(students));

// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

//  10. Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

// Your ES6 code here

const filterByCityAndAge = (arr) =>
  arr.filter((item) => item.city === "Indore" && item.age > 70 && item);

const people3 = [
  { name: "Ridhima", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" },
];
const filteredPeople = filterByCityAndAge(people3);
console.log(filteredPeople);

// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

//  11. Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

// Your ES6 code here

const filterByGenre = (arr) =>
  arr.filter((item) => item.genre === `Science Fiction` && item);

const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { title: "1984", author: "George Orwell", genre: "Science Fiction" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
];

const filteredBooks = filterByGenre(books, "Science Fiction");
console.log(filteredBooks);

// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //

/*  12. Write an ES6 function that takes an array of objects containing employee information (name, age, salary)  
                          and returns an array with only the employees who earn a salary above 22000 and age is above 25.   */

// Your ES6 code here

const filterBySalary = (arr) =>
  arr.filter((item) => item.salary > 22000 && item.age > 25 && item);

const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
];

const filteredEmployees = filterBySalary(employees, 22000, 25);
console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]

//  ------------------------------------------------------------------------------------------------------------------------------------------------------- //
