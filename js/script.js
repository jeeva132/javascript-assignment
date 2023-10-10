let firstName = "Ravi";
let lastName = "Verma";
const PI = 3.14159;

console.log(firstName);
console.log(lastName);
console.log(PI);

let greeting = "Namaste,";
let city = "Mumbai";

console.log(greeting);
console.log(city);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

const person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

const fruits = ["apple", "banana", "orange"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});

let age = 25;

if (age >= 18) {
  console.log("Ravi is eligible to vote.");
}

let temperature = 30;

if (temperature >= 30) {
  console.log("It's a hot day.");
} else {
  console.log("It's not so hot.");
}

let marks = 85;
let grade;

if (marks >= 90) {
  grade = "A+";
} else if (marks >= 80) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else {
  grade = "C";
}

console.log(`Sanya's grade is ${grade}`);

let day = "Monday";
let message;

switch (day) {
  case "Monday":
    message = "It's the start of the week.";
    break;
  case "Saturday":
  case "Sunday":
    message = "It's the weekend!";
    break;
  default:
    message = "It's a weekday.";
}

console.log(`Today is ${day}. ${message}`);

let num1 = 5;
let num2 = 7;

let isEqual = num1 === num2;
console.log(`Are the numbers equal? ${isEqual}`);

let age = 25;
let votingAge = 18;

let isEligibleToVote = age >= votingAge;
console.log(`Is Ravi eligible to vote? ${isEligibleToVote}`);

let x = 10;
let y = 5;

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);

let num1 = 5;
let num2 = 3;

let bitwiseAND = num1 & num2;
let bitwiseOR = num1 | num2;
let bitwiseXOR = num1 ^ num2;
let bitwiseNOT1 = ~num1;
let bitwiseNOT2 = ~num2;
let leftShift = num1 << 1;
let rightShift = num1 >> 1;
console.log(bitwiseAND);
console.log(bitwiseOR);
console.log(bitwiseXOR);
console.log(bitwiseNOT1);
console.log(bitwiseNOT2);
console.log(leftShift);
console.log(rightShift);

let person = {
  firstName: "Ravi",
  lastName: "Kumar",
  age: 25,
};

console.log(person.firstName);
console.log(person["lastName"]);

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("Grapes");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("Mango");
console.log(fruits);

fruits.shift();
console.log(fruits);

function greet(name) {
  return `Hello, ${name}!`;
}

let greeting = greet("Ravi");
console.log(greeting);

let divide = (x, y) => x / y;

let result = divide(10, 2);
console.log(result);

let person = {
  firstName: "Ravi",
  lastName: "Kumar",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

person.fullName();

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person1 = new Person("Ravi", "Kumar");
console.log(person1.getFullName());

class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
}

let circle1 = new Circle("Red", 5);
console.log(`Color: ${circle1.getColor()}`);

function divide(x, y) {
  if (y === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return x / y;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error);
}
let elementById = document.getElementById("myElement");
elementById.textContent = "New Text Content";

elementById.addEventListener("click", function () {
  alert("Element clicked!");
});

function createClosure() {
  let outerVar = "I am from the outer function";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

let closureFn = createClosure();
closureFn();
