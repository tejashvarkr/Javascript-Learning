//Chapter 3- Functions and Scope

/*Immediately Invoked Function Expression(IIFE) and hoisting
 Immediately Invoked function expressions are the functions that are executed right after their definition
 */

//Understanding hoisting
 //Hoisting is a Javascript mechanism where variables and function declarations are moved to the top of their scope before code execution

 var a_number;
console.log(a_number === undefined); 
a_number = 3;

(function () {
  var anumber;
  console.log(a_number); 
  a_number= "local value";
  console.log(a_number);
})();

let expenses = {
    Vegetable: 200 ,
    Rent: 2000,
    Fruits: 500,
};

//Understanding Object methods : Object.values() , Object.entries() , Object.keys()

console.log(Object.values(expenses));
console.log(Object.entries(expenses));
console.log(Object.keys(expenses));

function sumofexpenses(expenses)
{
    let sum=0;
    for(let i in expenses)
    {
        sum=sum+expenses[i];
        //Understanding the function definition , parameters , arguments , return statement, objects access and for in loop
    
    }
    return sum;
}
console.log("The total expenses are: "+sumofexpenses(expenses));

//Error Handling using 
/*1) try-catch block
 2) finally block
 3) throw statement
*/


//While trying to input value of number of months to divide expenses from the user, I found out that there are different ways in Javascript to get an input from the user 
/* 1)Using prompt() function in browser environment and prompt-sync module in Node.js environment
   2)Using readline module in Node.js environment
   3)Using process.stdin in Node.js environment  
*/

//Understood parse int as a function to convert string input to integer
let months=2;
function divideexpenses(expenses,months)
{
try{
    if(months<=0)
    {
        throw "Months cannot be zero or negative";
    }
    else{
    let total= sumofexpenses(expenses);
    console.log("The monthly expenses are: "+ (total/months));
    }
}
catch(err)
{
    console.log("Error: "+err);
}
finally{
    console.log("Understanding try , catch , throw , finally statements in error handling by trying to divide expenses by number of months function to understand expenses breakdown");
    

}


}
    divideexpenses(expenses,months);  



//Understanding scope chain and lexical scoping
//Lexical scoping means that the scope of a variable is determined by its position in the source code
//Scope chain is the hierarchy of scopes in which a variable can be accessed

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1); 
};

console.log(factorial(3));

//Understanding recursion, function expression, function calls and  ternary operator
//A function can access variables from its own scope and from the scopes of its parent functions due to lexical scoping and scope chain 
//A function can be passed as an parameter to another function and can also return a function as a value
//Functions can be nested within other functions to create closures

//Functions can be defined based on condtions using function expressions and arrow functions
function greet(hour){
    if(hour<12){
        return function(){
            console.log("Good Morning");
        }
    }
    else
        {
            return()=>{
                console.log("Good Afternoon");  

            }
        }
}
greet(10)();

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {      
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
        console.log(`Understanding nested functions and closures in Javascript`);
        //Template literals are the literals allowing embedded expressions which can be particularly useful for creating strings with dynamic content 
        //Backticks are used to define them 
        //Here $() means to evaluate the expression inside the parentheses and emded the result into the string as a value  
    }
}
const newFunction = outerFunction("outside");
newFunction("inside");

//Understanding closures, nested functions, function returning function and function as first class citizens in Javascript
/* 1) A closure is created when an inner function accesses variables from its outer function even after the outer function has finished executing
   2) Function hoisting means that function declarations are moved to the top of their scope before code execution and function expressions are not hoisted.
   3) Function expressions are not hoisted because they are assigned to variables at runtime, whereas function declarations are hoisted because they are parsed before code execution.
   4) Functions are first class citizens in Javascript because they can be treated like any other data type.
   */

