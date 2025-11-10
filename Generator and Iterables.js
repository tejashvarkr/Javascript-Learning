//Generators and Iterables

//Generator is a powerful alternative to iterators; Generators use a keyword yield to generate a new function;It does not execute fully itself instead executes till it encounters yield keyword

function *generator( start=1, end=3, iterate=1)
{

  let iterationCount = 0;
  for (let i = start; i < end; i += iterate) {
    iterationCount++;
    yield i;
  }
  return iterationCount;


}
for (let i of generator())
{
    console.log(i)
}
//Understanding Generators using default parameters and for of loop

function* makeIterator() {
  yield 1;
  yield 2;
}

const iter = makeIterator();

for (const itItem of iter) {
  console.log(itItem);
}

console.log(iter[Symbol.iterator]() === iter); 


iter[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};

//Understanding Iterables
//Iterables and Iterators are different in a way that 

