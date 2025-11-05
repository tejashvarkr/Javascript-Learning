//Arrays in JavaScript are a fundamental data structure used to store multiple values in a single variable. They can hold various data types and allow for dynamic resizing. Elements in an array are accessed by their index, starting from 0.

//Creating Arrays

//There are two primary ways to create arrays in JavaScript:

/*1)Array Literal 
2)Array Constructor
*/

let fruits = ["Apple", "Banana", "Orange"];

let fruit = new Array("Apple", "Banana", "Orange");

// Accessing and Modifying Elements

let firstFruit = fruits[0]; 
let lastFruit = fruits[fruits.length - 1]; 


fruits[1] = "Blueberry";
console.log(fruits);

//Adding Elements

fruits.push("Mango"); 
console.log(fruits);
//Adding an element to the end of the array.

//Adding an element to the beginning of the array
fruits.unshift("Strawberry"); 
console.log(fruits);

//Deletion of elements

let last = fruits.pop(); 
// Removes the last element from the array.
console.log(last);

//shift(): Removes the first element from the array.
let first = fruits.shift();
console.log(first);

// Iterating Over Arrays

// Using for loop
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

// Using forEach()
fruits.forEach(function(item) {
console.log(item);
});

//Concatenation
let moreFruits = ["Pineapple", "Grapes"];
let allFruits = fruits.concat(moreFruits); 
console.log(allFruits);

