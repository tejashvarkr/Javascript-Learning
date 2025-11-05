fruits = ["Apple", "Banana", "Orange", "Mango"];

//slice(): Returns a shallow copy of a portion of an array into a new array object.
let someFruits = fruits.slice(1, 3); 
console.log(someFruits); 

//splice(): Adds/removes elements from an array.
fruits.splice(2, 1, "Peach");
console.log(fruits);
fruits.splice(0,1,'Banana');
console.log(fruits);

//map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
let upperFruits = fruits.map(fruit => fruit.toUpperCase()); // ["APPLE", "BLUEBERRY", "PEACH"]
console.log(upperFruits);

//reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
let fruitString = fruits.reduce((acc, fruit) => acc + ", " + fruit);
console.log(fruitString);

//find():returns the value of the first element in the array that satisfies the provided testing function.
let foundfruit =fruits.find(fruit=>fruit.startsWith("A"));
console.log(foundfruit);

//filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let shortFruits = fruits.filter(fruit => fruit.length <= 5); // ["Apple", "Peach"]
console.log(shortFruits);

//Checking if a variable is an array
Array.isArray(fruits); 
console.log(Array.isArray(fruits))
//This is also a method to check if a variable is an array
fruits instanceof Array; 

console.log(fruits instanceof Array)
//Both return true if fruits is an array, otherwise false.

//Join function will join the elements of an array with a separator 
console.log(fruits.join(" - ")); 
console.log(fruits.join(" | ")); 
console.log(fruits.join("")); 

