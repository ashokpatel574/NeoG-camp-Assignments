// # Functional Programming Set 4

// **Instructions:**
// 1. Make use of **.reduce()** method in this set.
// 2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
// 3. Do NOT use for-loops.

//  1. Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings1 = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here

const totalLength = (arr) => arr.reduce((acc, curr) => acc + curr.length, 0);

console.log(totalLength(strings1));
// Output: 30

//------------------------------------------------------------------------------------------------------------------------//

// 2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers1 = [1, 2, 3, 4, 5];
// Your code here

const sumSquares = (arr) => arr.reduce((acc, curr) => acc + curr * curr, 0);

console.log(sumSquares(numbers1));
// Output: 55

//------------------------------------------------------------------------------------------------------------------------//

//  3. Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const items1 = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];
// Your code here

const totalValue = (arr) => arr.reduce((acc, { price }) => acc + price, 0);

console.log(totalValue(items1));
// Output: 60

//------------------------------------------------------------------------------------------------------------------------//

//  4. Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here
const concatStrings = (arr) => arr.reduce((acc, curr) => acc + curr, "");

console.log(concatStrings(["this", "is", "fun"]));
// Output: 'thisisfun'

//------------------------------------------------------------------------------------------------------------------------//

//  5. Write an ES6 function to multiply and return all the elements of a given array.

const numbers2 = [1, 2, 3, 4, 5];
// Your code here

const product = (arr) => arr.reduce((acc, curr) => acc * curr, arr[0]);

console.log(product(numbers2));
// Output: 120

//------------------------------------------------------------------------------------------------------------------------//

//  6. Write an ES6 function that takes an array of strings and returns the longest string.

const strings2 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here

const longestString = (arr) =>
  arr.reduce((acc, curr) => (acc.length > curr.length ? acc : curr), arr[0]);

console.log(longestString(strings2));
// Output: 'Haule Haule'

//------------------------------------------------------------------------------------------------------------------------//

//  7. Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people1 = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];
// Your code here

const oldestPersonName = (arr) =>
  arr.reduce((acc, curr) => (curr.age > acc.age ? curr : curr.name)).name;

console.log(oldestPersonName(people1));
// Output: 'Naina'

//------------------------------------------------------------------------------------------------------------------------//

//  8. Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
// Your code here

const getAverageAge = (arr) =>
  arr.reduce((acc, { age }) => acc + age, 0) / arr.length;

console.log(getAverageAge(people2));
// Output: { averageAge: 32.5 }

//------------------------------------------------------------------------------------------------------------------------//

//  9. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const products1 = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 },
];
// Your code here

const findMostExpensiveProduct = (arr) => {
  return arr.reduce((acc, curr) => (curr.price > acc.price ? curr : acc));
};
console.log(findMostExpensiveProduct(products1));
// { name: "Slipper", price: 40, quantity: 3 }

//------------------------------------------------------------------------------------------------------------------------//

// 10. Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana",
];
// Your code here

const countStrings1 = (arr) =>
  arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

console.log(countStrings1(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }

//------------------------------------------------------------------------------------------------------------------------//
