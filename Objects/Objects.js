//Objects

//Objects Constructor and Properties
function Cake(flavour, shape, color) {
    this.flavour = flavour;
    this.shape = shape;
    this.color = color;
} 

const cakeobj = new Cake("Chocolate", "Round", "Brown");
console.log(cakeobj.flavour);

//By this implementation we can see how objects are created using constructors and properties
 
//Using the object create method
const pie = Object.create({});
pie.flavour = "Apple";
pie.shape = "Square";
pie.color = "Golden";
console.log(pie);

//Accessing Object using dot notation and bracket notation
console.log(cakeobj.shape); 
console.log(cakeobj['color']); 
//Assignment
cakeobj.shape = "Heart";
cakeobj['color'] = "Dark Brown";
console.log(cakeobj.shape); 
console.log(cakeobj['color']); 
//By this implementation we can see how to access and assign object properties using dot and bracket notation

//Enumerating Object Properties mean looping the object properties using for in loop, for of loop and Object.keys() , Object.getOwnPropertyNames()
for (const key in cakeobj) {
    console.log(`${key}: ${cakeobj[key]}`);
}
const keys = Object.keys(cakeobj);
for (const key of keys) {
    console.log(`${key}: ${cakeobj[key]}`);
}
const propNames = Object.getOwnPropertyNames(cakeobj);
for (const name of propNames) {
    console.log(`${name}: ${cakeobj[name]}`);
}
//By this implementation we can see how to enumerate object properties using different methods

//Understanding Object.hasOwn(): This method checks if the object has the specified property as its own property (not inherited).

console.log(Object.hasOwn(cakeobj, 'taste'));
console.log(Object.hasOwn(pie, 'shape'));
//By this implementation we can see how Object.hasOwn() works

//Deleting Object Properties: The delete operator removes a property from an object.
const myObj = { flavour: "Chocolate", Color: "Brown" };


delete myObj.flavour;
console.log("flavour" in myObj); 