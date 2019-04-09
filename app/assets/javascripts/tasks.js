// alert("Hello");

// console.log is useful for debugging, NOT for communcating to the user
// this is the equivalent of "puts" or "p" in ruby
console.log("Hello World");

// whatever we put inside the console.log function is evaluated in Javascript before it's logged to the console
console.log(2 + 2);

// Implicit conversion of types is different
console.log("2" + 2);
console.log(2 + "2");
console.log("2" * 2);
console.log(2 + "2");

// Booleans are pretty much the same
console.log(true);
console.log(false);

// In Javascript, 0 and ""(empty string) are considered false values, whereas in Ruby, they are true
console.log(!0);
console.log(!"");

// Strict equality operator-- it uses three equal signs to make sure the values are completely equal
console.log(2 === 2);
console.log(2 === "2");

// The less strict equality operator (==) converts the values to the same type
console.log(2 == "2");
console.log(false == "");

// When we first create a variable, we must use the "var" or "let" keyword, follow by the name of the variable. VARIABLES USE lower-camel-case NAME CONVENTIONS
var myNumber = 5;

// When we want tp reassign a variable, we don't need the keyword "var" or "let"
myNumber = 3;


if (myNumber + 2 === 5) {
  console.log("It's 5");
} else if ("It's a 4!") {
} else {
  console.log("I don't know what this is");
}

// functions get hiosted typically, which means they can be called from anywhere in the file, even before the function is created
sayHi();

// Use a function keyword to create a new function. Even if you're not using parameters, you still need to includ the parentheses
function sayHi() {
  console.log("Hi!");
}

// When calling a function. JavaScript demands that you include the parentheses, as this tells the browser it is a function.
sayHi();

// Multiple paramters, same as Ruby. We have to be explicit if we want to return something in JavaScript; it doesn't just return the last line like in Ruby
function numberMultiplier(firstNum, secondNum) {
  return firstNum * secondNum;
}

console.log(numberMultiplier(3, 5));

// Arrays work pretty much the same way
var myArray = [56, 12, 27, 4, 3, 10]

console.log(myArray);

// length is a property in JavaScript, not a method like it is in Ruby
console.log(myArray.length);

// JavaScript arrays use bracket notation (same as Ruby) to grab specific values
console.log(myArray[2]);

// Push adds a value to the end of an array
myArray.push[15];
console.log(myArray);

// Pop removes a value from the end of an array
myArray.pop();
console.log(myArray);

// Shift is the opposite of Pop, as in it deletes a value at the beginning of an array
myArray.shift();
console.log(myArray);

// Unshift is the opposite of push in that it adds a value at the beginning of the array
myArray.unshift(56)
console.log(myArray)

// While loops look prety much like Ruby's While loops, they are just more syntax heavy.
var counter = 0;
while(counter <= 10) {
  console.log(counter);
  // counter ++ is the same as counter += 1
  counter ++;
}

// For loops: Starts with the "for" keyword 
// First Clause: runs before loops ever runs-- typicall, this is where we establish our counter variable, often called "i".
// Second Clause: a conditional statement that runs each time the loop is about to run-- this is equivalent of the while loop condition(i <= 10)
// Third Clause: runs after each loop through-- typically, this is where we increment "i"
for (var i = 0; i <= 10; i ++) {
  console.log(i);
}

// Syntax for eaching throuhg an array-- "i" is each index of the array essentially.
myArray = [56, 12, 27, 4, 3, 10]
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// "for" autocompletes and starts at the end of the array and moves towards the beginning
for (var i = myArray.length - 1; i >= 0; i--) {
  console.log(myArray[i]);
}

// Objects(hashes in Ruby) look pretty much the same, but the "keys" (in this case: firstName and lastName) are not symbols
var person = {firstName: "Mitch", lastName: "Fischer"}
console.log(person);

// Object values can be accessed using bracket notation..
console.log(person["firstName"]):

// AND dot notation!
console.log(person.lastName);

// You can add/reassign new key-value pairs by using dot notation or bracket notation
person.age = 24;
person["age"] = 25;
console.log(person);