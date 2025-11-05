// In JavaScript, the value of `this` inside a function depends on how the function is called.
const Manager = {
  name: "A",
  age: 25,
  job: "Software Engineer",
};
const Intern = {
  name: "B",
  age: 20,
  job: "Software Engineer Intern",
};

function Introduce() {
  console.log(`Hello, my name is ${this.name}`);
}


Manager.Introduce = Introduce;
Intern.Introduce = Introduce;

Manager.Introduce(); // Hello, my name is Karina
Intern.Introduce(); // Hello, my name is Tyrone

//Prototype chain mean that objects can inherit properties and methods from other objects.
//Protype is like a blueprint for creating objects with shared properties and methods.

//Reference to the same object in memory
let fruit ={
  name: "apple",
}
let anotherFruit = fruit;
// The difference between == and === is that == checks for value equality with type coercion, while === checks for both value and type equality without type coercion.
//Coercion means converting one data type to another data type.
//Value Equality means that the values are the same.
//Type Equality means that the data types are the same.

fruit == anotherFruit; 
fruit === anotherFruit; 

fruit.name = "grape";
console.log(anotherFruit); 
// Both will log { name: "grape" } because both variables reference the same object in memory.
//Key Notes:
/*1. The value of `this` depends on how a function is called.
  2. Methods can be added to objects to utilize `this`.
  3. Objects can inherit properties and methods through the prototype chain.
  4. Variables can reference the same object in memory, leading to shared changes.
  5. The difference between == and === in JavaScript.
*/