//Javascript learning 
/* Well, today lets go through concepts of Javascript like variables , datatypes , functions , control flow statements , asynchronous programming and implement them in some pieces of code
*/

//Chapter 1: Variables and Datatypes

//Use of let,const,var and understanding the nature of properties such as redeclaration,reassignment , scope(whether globe scope , function scope , block scope ) and differences between them 
/*
Noting that var is function scoped whereas let and const are block scoped
Var is old way of declaring variables in javascript and it allows redeclaration and reassignment of variables
*/
var myName="Tejashvar K.R";
let islearningjs;
islearningjs=true;
let $ = "Hello World";

const x = 5;
const y = 6;  
const z = x + y; //understanding of operators and usage of addition operator 

//Concatenation
let concat = "5" + 2 + 3; //Understanding type conversion
let Concat = 5 + 2 + "3"; //Understanding Case sensitivity
console.log(concat);
console.log(Concat);

//Assignment operator and swap
let a=1;
let b=2;
let temp=a;
a=b;
b=temp;
console.log("a="+a);
console.log("b="+b);

//typeof operator and datatypes
//There are 8 datatypes in javascript : 1.Number 2.String 3.Boolean 4.Null 5.Undefined 6.Symbol 7.BigInt 8.Object

//String Datatype 
let myname = "Tejashvar";
console.log(myname);          
console.log(typeof myname);   

let greeting = `Hello, ${myname}!`;
console.log(greeting); 

//Number Datatype

let age = 20;
let price = 99.99;
console.log(age, typeof age);    
console.log(price, typeof price); 

//Big Int Datatype

let bigNum = 12345678901234567890n;
console.log(bigNum);
console.log(typeof bigNum); // bigint

//Boolean Datatype

let isLearning = true;

console.log(isLearning, typeof isLearning); // true 'boolean'

//Undefined Datatype

let city;
console.log(city);          // undefined
console.log(typeof city);   // undefined

//Null Datatype

let car = null;
console.log(car);          
console.log(typeof car);   

//Object

let person = {
  name: "Tejashvar",
  age: 20,
  
};

console.log(person);
console.log(typeof person); 
console.log(person.name);  


let intern = {
  name: "Tejashvar",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

intern.greet();

//Symbol Datatype
let sym1 = Symbol("av"); 
let sym2 = Symbol("ab");

console.log("Checking whether the symbol is equal:"+ (sym1 === sym2)); 
//Understanding the nature of symbol constructor to create unique identifiers
console.log(typeof sym1); 