//Object Inheritance
//Inheritance allows one object to access properties and methods of another object.
// Parent object
let Cake = {
    flavour: "Vanilla",
    shape: "Round",
    color: "White"
};

// Child object inheriting from Cake
let Bake = Object.create(Cake);

Bake.color = "Brown";


console.log(Bake.color);  
console.log(Cake.color); 


Bake.displayCake = function() {
    const result = `A Beautiful ${this.color} ${this.shape} ${this.flavour} Cake`;
    console.log(result);
};

Bake.displayCake();
// By this implementation we can see how object inheritance works in JavaScript
//Key Notes:
/*1. Inheritance allows objects to access properties and methods of other objects.
  2. Object.create() is used to create a new object that inherits from an existing object.
  3. Child objects can override properties and add new methods.
  */
