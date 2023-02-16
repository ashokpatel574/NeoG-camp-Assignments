//  # ES6+ Practice Question Set 2

//  1. Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

// Your code here

const person1 = {
  name: `Ashok`,
  age: 30,
};

person1.age = 35;

console.log(person1.age); // Output: 35

//-----------------------------------------------------------------------------------------------------------------------//

//  2. Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

//Your ES6 code here

const isSportsCar = (obj) => obj?.horsepower >= 300;

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

//-----------------------------------------------------------------------------------------------------------------------//

//  3. Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than or equal to 21. Otherwise, it should return false.

// Your ES6 code here

const isEligible = (obj, num) => parseInt(obj?.age) + num >= 21;

const person2 = { name: "Ajay", age: 20 };

console.log(isEligible(person2, 1)); // true
console.log(isEligible(person2, 2)); // true

//-----------------------------------------------------------------------------------------------------------------------//

//  4. Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)

// Your ES6 code here

const getViews = (obj) => obj?.views > 1000;

const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430,
};

const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500,
};

console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false

//-----------------------------------------------------------------------------------------------------------------------//

//  5. Swap the values of two variables using array destructuring.

let a = 1;
let b = 2;

// Your ES6 Code here

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

//-----------------------------------------------------------------------------------------------------------------------//

//  6. Convert this function into ES6 with least amount of characters.

/*
function add(a = 30, b = 0) {
  return a + b;
}
*/

const add = (a, b) => a + b;

console.log(add(2, 3));

//-----------------------------------------------------------------------------------------------------------------------//

//  7. Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

// Your ES6 function here

const combineObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = combineObjects(obj1, obj2);

console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}

//-----------------------------------------------------------------------------------------------------------------------//

//  8. Convert the function getData, into an ES6 function with last amount of characters.

// Hint: Destructuring;

/*
function getData(person) {
  const name = person.name;
  const address = person.address.city;
  console.log(name); // John Doe
  console.log(address); // New York
}
*/

const getData = (obj) => {
  const {
    name,
    address: { city, state },
  } = obj;
  console.log(name); // John Doe
  console.log(city); // New York
};

const person3 = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};

getData(person3);

//-----------------------------------------------------------------------------------------------------------------------//

//  9. Write a function that takes a string as input and returns the string in all uppercase letters.

// Youe ES6 code here

const stringToUpperCase = (str) => str.toUpperCase();

console.log(stringToUpperCase("hello")); // "HELLO"

//-----------------------------------------------------------------------------------------------------------------------//

//  10. Write a function that takes two strings as input and concatenates them together.

// Your ES6 code here

const concatenateStrings = (str1, str2) => str1.concat(str2);

console.log(concatenateStrings("hello", "world")); // "helloworld"

//-----------------------------------------------------------------------------------------------------------------------//

//  11. Write a function that takes an array and returns the last element in the array.

// Your ES6 code here

const lastElement = (arr) => arr.pop();

console.log(lastElement([1, 2, 3, 4, 5])); // 5

//-----------------------------------------------------------------------------------------------------------------------//

//  12. Write a function that takes an array and returns the first element of the array.

// Your ES6 code here

const firstElement = (arr) => arr.shift();

console.log(firstElement([1, 2, 3, 4, 5])); // 1

//-----------------------------------------------------------------------------------------------------------------------//

//  13. Write a function that takes an array and a number and returns the sum of first element and the number.

// Your ES6 code here

const sumFirstElement = (arr, num) => arr.shift() + num;

console.log(sumFirstElement([1, 2, 3], 5)); // 6

//-----------------------------------------------------------------------------------------------------------------------//

//  14. Write a function that takes an array and returns the sum of first and last element.

// Your ES6 code here

const sumFirstAndLast = (arr) => arr.shift() + arr.pop();

console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

//-----------------------------------------------------------------------------------------------------------------------//

//  15. Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

// Your ES6 code here

const personInfo = (obj) => `${obj.name} is ${obj.age} years old`;

const person4 = { name: "John", age: 25, occupation: "Software Engineer" };
const person5 = { name: "Jane", age: 45, occupation: "Data Analyst" };

console.log(personInfo(person4)); // Expected output: "John is 25 years old."
console.log(personInfo(person5)); // Expected output: "Jane is 45 years old."

//-----------------------------------------------------------------------------------------------------------------------//
