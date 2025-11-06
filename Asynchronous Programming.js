//Asynchronous Programming
function callback()
{
    console.log("This is a call back function in aynchronous programming");
}
function asynchronouscall(name="Async Programming in Javascript",callbacks)
{
    console.log("This is " + name);
    callbacks();
}
asynchronouscall(
    "AsynchronousProgramming", callback);

    //Understood callback , default parameters,promises

 const promise= new Promise((resolve,reject)=>{
let success=true;
 if (success)
 {
    resolve("Task Completed");
 }
 else
    reject ("Task failed");
 

});
promise.then(result=>console.log(result)).catch(error=>console.log(error));

//Async or await
async function prog()
{
    try{
    const data= await fetch ("https://github/users");
    const result= await data.json();
    }
    catch(error){
        console.log("Failed to collect data"+ error);

    }
}
prog();
//Understood async, await, promises, callback in asynchronous programming


