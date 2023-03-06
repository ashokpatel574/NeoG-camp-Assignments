// # Functional Programming Set 3

// **Instructions:**
// 1. Make use of .filter(), .find() and .reduce() methods.
// 2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
// 3. Do NOT use for-loops.

//  1. Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.

const cars1 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here

const findToyotaCar = (arr) =>
  arr.find(({ make, year }) => make === "Toyota" && year > 2010);

const toyotaCar = findToyotaCar(cars1);
console.log(toyotaCar);
// Output: { make: "Toyota", model: "Camry", year: 2015 }

//-------------------------------------------------------------------------------------------------------------------------//

//  2. Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.

const cars2 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here

const getCarDetails = (arr) => arr.filter(({ year }) => year > 2012);

const getCars = getCarDetails(cars2);
console.log(getCars);
// Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]

//-------------------------------------------------------------------------------------------------------------------------//

//  3. Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".

const products1 = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

// Your code here

const findElectronicsProduct = (arr) =>
  arr.find(({ category }) => category === "electronics");

const electronicsProduct = findElectronicsProduct(products1);
console.log(electronicsProduct);
// Output: { name: "iPad", price: 799, category: "electronics" }

//-------------------------------------------------------------------------------------------------------------------------//

//  4. Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".

const products2 = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

// Your code here

const getAllElectronicProducts = (arr) =>
  arr.filter(({ category }) => category === "electronics");

const electronicProducts = getAllElectronicProducts(products2);
console.log(electronicProducts);
// Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]

//-------------------------------------------------------------------------------------------------------------------------//

//  5. Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.

const students1 = [
  { name: "Alice", age: 16, grade: 90 },
  { name: "Bob", age: 17, grade: 80 },
  { name: "Charlie", age: 15, grade: 95 },
  { name: "David", age: 16, grade: 85 },
];

// Your code here

const filterStudentsByGrade = (arr, givenGrade) =>
  arr.filter(({ grade }) => grade > givenGrade);

const highGradeStudents = filterStudentsByGrade(students1, 85);
console.log(highGradeStudents);
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]

//-------------------------------------------------------------------------------------------------------------------------//

//  6. Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.

const books1 = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

// Your code here

const findBookWithMoreThan500Pages = (arr) =>
  arr.find(({ pageCount }) => pageCount > 500);

const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books1);
console.log(bookWithMoreThan500Pages);
// Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }

//-------------------------------------------------------------------------------------------------------------------------//

//  7. Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.

const customers1 = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 30, gender: "Female" },
  { name: "Bob", age: 40, gender: "Male" },
  { name: "Alice", age: 35, gender: "Female" },
];

// Your code here

const getMaleCustomers = (arr) => arr.filter(({ gender }) => gender === "Male");

const maleCustomers = getMaleCustomers(customers1);
console.log(maleCustomers);
// Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]

//-------------------------------------------------------------------------------------------------------------------------//

//  8. Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.

const games1 = [
  {
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    genre: "RPG",
  },
  { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
  { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genre: "Adventure",
  },
];
// Your code here

const filterByGenre = (arr, givenGenre) =>
  arr.filter(({ genre }) => genre === givenGenre);

const filteredGames = filterByGenre(games1, "RPG");
console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]

//-------------------------------------------------------------------------------------------------------------------------//

//  9. Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.

const cars3 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here

const getCarModel = (arr) =>
  arr.reduce(
    (acc, { model, year }) => (year > 2012 ? [...acc, model] : acc),

    []
  );

const carModels = getCarModel(cars3);
console.log(carModels);
// Output: ["Camry", "Mustang"]

//-------------------------------------------------------------------------------------------------------------------------//

//  10. Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

const books2 = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

// Your code here

const getTitlesWithMoreThan500Pages = (arr) =>
  arr.reduce(
    (acc, { title, pageCount }) => (pageCount > 700 ? [...acc, title] : acc),
    []
  );

const booksWithMoreThan500Pages = getTitlesWithMoreThan500Pages(books2);
console.log(booksWithMoreThan500Pages);
// Output: ["The Lord of the Rings"]

//-------------------------------------------------------------------------------------------------------------------------//

//  11. Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers1 = [12, 23, 4, 2, 11, 21];
// Your code here

const sumOfEvenNumbers = (arr) =>
  arr.reduce((acc, curr) => (curr % 2 == 0 ? acc + curr : acc), 0);

console.log(sumOfEvenNumbers(numbers1));
// Output: 18

//-------------------------------------------------------------------------------------------------------------------------//

//  12. Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.

const students2 = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Alice", score: 85 },
];

// Your code here

const getAverageScore = (arr) =>
  arr.reduce(
    (acc, { score }, i) =>
      i < arr.length - 1 ? acc + score : (acc + score) / arr.length,
    0
  );

console.log(getAverageScore(students2));
// Output: 82.5

//-------------------------------------------------------------------------------------------------------------------------//

//  13. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.

const products3 = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];

// Your code here

const getTotalCost = (arr) =>
  arr.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

console.log(getTotalCost(products3));
// Output: 150

//-------------------------------------------------------------------------------------------------------------------------//

//  14. Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const strings1 = ["Hello", " ", "world", "!"];
// Your code here

const concatenateStrings = (arr) => arr.reduce((acc, curr) => acc + curr, "");

console.log(concatenateStrings(strings1));
// Output: "Hello world!"

//-------------------------------------------------------------------------------------------------------------------------//

//  15. Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers2 = [10, 5, 8, 3, 6];

// Your code here

const getMinimumNumber = (arr) =>
  arr.reduce((acc, curr) => (acc > curr ? curr : acc), arr[0]);

console.log(getMinimumNumber(numbers2));
// Output: 3

//-------------------------------------------------------------------------------------------------------------------------//
