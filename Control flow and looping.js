
//Chapter 2- Control flow and looping

let age = 17;
let country = "India";
let text = "You can Not drive!";

//if-else statement

if (country == "India" && age >= 18) {
  text = "You can drive!";
  console.log(text);
} else {
  console.log(!text);

}

//Switch case
age = 21;
switch(age){
    case 18:
    console.log("Rule Number 1:");    
    console.log("You can drive after getting a learner's license");
        break; 
        //Break statement
    case 21:
        {
            console.log("Rule Number 2:");
            console.log("You can drive after getting a permanent driving license");
        }
}

//Looping
//For in loop
intern={ 
  name: "Tejashvar",
  age: 20,
  role: "Intern"
}
for (let i in intern)
{
  console.log(i+""+intern[i]);
}
//For of Loop
//iteration of values over iterable objects like arrays, strings,etc
for (let value of "Tejashvar")
{
  console.log(value);
}
//For each loop 
const numbers=[1,2,3,4,5];
numbers.forEach((num=>{console.log(num)}));
//while loop
let n=1;
while(n<=5){
  console.log(n);
  n++;
}
//do-while loop
console.log("Understanding do while loop and the difference between while and do while loop");
//In do while loop, the block of code is executed at least once even if the condition is false
let m=1;      
do{
  console.log(m);
  m++;
}
while(m<=5);
//Labeled statement

labelledLoop:
//The use of labelled statement with continue statement in a nested for loop.
for(let i=0;i<3;i++){
  for(let j=0;j<3;j++){
    if(i==1 && j==1){
      continue labelledLoop;
    }
   console.log('i = '+i+', j = '+j);
  }
}
