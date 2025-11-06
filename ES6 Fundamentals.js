//Understood ES6 fundamentals like template literals , classes, arrow functions, default parameters

//Destructuring
const person ={
    name:"Teja"
    ,age:21
};
const {name,age}=person;
console.log(name,age);

//Template literals is a feature that was developed and brought into use in versions ES6 and above , they can embed values in ${}  and text as a whole with backtics ``
console.log(`Lets print person ${person}`);

//Classes and Constructor
class Alphabets
{ 

    constructor(l)
    {
       
        this.firstletter = l;
    }
    setletter(a)
    {
        this.firstletter = a;
        console.log(this.firstletter);
    
    }
}
let a = new Alphabets("a");
a.setletter("b");

//Modules
export function greet() {
  console.log("Hello!");
}

//Debugging
function testdebug()
{
    console.log("Life is beautiful");
    let x=123;
    console.log(x);
    
    x+=123;
    debugger;
    console.log(x);
}
testdebug();
//pause of execution at debugger as we are debugging the execution of the function testdebug

//Assertion and try catch error handling

try {
  let age = -5;
  if (age < 0) {
    throw new Error("Age cannot be negative!");
  }
  console.log("Age is valid");
}
catch (error) {
  console.log("Caught error: " + error.message);
}

//Browser Tools F12, unit testing are also methods that can be used for debugging
const add = (a,b)=>(a+b);
console.assert(add(2,11234)==='11236',"Addition test failed"); 






