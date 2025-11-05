//Today,lets delve deeper into Functions , objects , arrays
function  cakeobject(object){
    return object.make="baking powder ,and other ingredients";
}
const cake={
    make: "Chocolate cake"
    ,sweetness:"Good amount of sugar",
    shape:"Round"
}

console.log(cakeobject(cake));
    for (const [key, value] of Object.entries(cake)) {
        console.log(`${key}: ${value}`);
    }

// By this implementation we can see how objects can be manipulated using functions

//Now lets understand manipulate arrays using functions

function arrayymanipulation(Arr){
    Arr[0]=12; //Modifying the first element of the array
}
const numbers=[2,4,5,6];
arrayymanipulation(numbers);
console.log(numbers);
//By this implementation we can see how arrays can be manipulated using functions
 
//Recursive Function example
function factorial(n){
    if(n<2){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5)); 

//Nested Functions and Closure Examples with  objects
function createcake(flavour){
    let cakeflavour=flavour;
   let cakeobj={
    setflavor(newflavour){
        cakeflavour=newflavour;


    },
    getflavour() {
        return cakeflavour;
    }
}
    return cakeobj;
   }
    const mycake=createcake("Vanilla");
    console.log(mycake.getflavour()); 
    mycake.setflavor("Chocolate");
    console.log(mycake.getflavour()); 
//By this implementation we can see how nested functions and closures work with objects

//Rest Parameters Example with arrow function
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); 
//By this implementation we can see how rest parameters work with arrow functions

//Arguments Object Example

function Concatenate(separator) {
  let result = ""; 
 
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
   
console.log(Concatenate(", ", "Red", "Green", "Blue"));
//By this implementation we can see how arguments object works in functions

//Key Notes:
/*1. Functions can manipulate objects and arrays by reference.
  2. Recursive functions call themselves to solve problems.
  3. Nested functions can access variables from their parent function (closure).
  4. Rest parameters allow functions to accept an indefinite number of arguments.
  5. The arguments object provides access to all arguments passed to a function.
*/
