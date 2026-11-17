//	Declare a variable using var after printing it. Predict the output.



/* console.log(a)  //15
var a = 15 */


//Declare a variable using let after printing it. Predict the output.
/* console.log(x)
let x=52 */ //Error: cannot access before initalization



//Declare a variable using const after printing it. Observe the error.
/* console.log(z)
const z =100//cannot access before initalization */



//	Call a normal function before its declaration. Check whether it works.

//	Call a function expression before its declaration. Check the result.
/* demo()
function demo(){
    console.log("Demo funciton")
}
 */

//Error : cannot access before initalization

/* a()
let a = function(){
    console.log("Another demo")
}
 */


//Call an arrow function before its declaration. Check the result.
/* x()
let x=()=>{
    console.log("Next Demo")
}
 */


//	Create a function that uses a var variable declared later inside it.

/* function demo() {
    console.log(a);
    var a = 10;
    console.log(a);
}

demo(); */


//Declare a global variable using var, then declare a local variable with the same name inside a function. Predict the output.

/* var a = 100;

function demo() {
    var a = 50;
    console.log("Inside function:", a);
}

demo();

console.log("Outside function:", a);
 */
/* 
Create two variables with the same name using var in the same scope. Check the output.
11	Try declaring two variables with the same name using let in the same scope. Observe the error.
12	Create a function declaration and call it before and after its declaration.
13	Create a function expression using var and call it before initialization.
14	Create an arrow function using let and call it before initialization.
15	Write a program demonstrating the difference between hoisting in var, let, and const. */


//Create two variables with the same name using var in the same scope. Check the output.

/* var x=10
var x=20

console.log(x)//20 */



//11.Try declaring two variables with the same name using let in the same scope. Observe the error.

/* let x=10
let x=20

console.log(x)//Identifier 'x' has already been declared */




//12	Create a function declaration and call it before and after its declaration.

/* demo()//calling demo
function demo(){
    console.log("Calling demo")
}
demo()//calling demo
 */


//13	Create a function expression using var and call it before initialization.

/*  demo()
var demo=function(){
    console.log("Demo function");
    
}//demo is not a function
 */



//14	Create an arrow function using let and call it before initialization.

/* demo()
let demo=()=>{
    console.log("Arrow function");
    
}//Cannot access 'demo' before initialization

 */



//15	Write a program demonstrating the difference between hoisting in var, let, and const.

/* console.log(a)//undefined
var a = 10

console.log(a)//10


console.log(b)//Cannot access 'b' before initialization
let b=20
console.log(b)

console.log(c)
const c=50
console.log(c) */



/*
1	Access a let variable before initialization. Identify the error.
2	Access a const variable before initialization. Identify the error.
3	Declare a let variable and print it after initialization.
4	Declare a const variable and print it after initialization.
5	Create a block using {} and access a let variable before declaration inside that block.
6	Declare a global let variable and a local let variable with the same name inside a function.
7	Create a block with a const variable and try accessing it outside the block.
8	Create an if block and access a let variable before its declaration inside the block.
9	Create a for loop using let and try accessing its variable outside the loop.
10	Create a function containing let a = 10. Try accessing a before its declaration.
11	Create a block with var, let, and const. Observe their accessibility inside and outside the block.
12	Declare a let variable and try to initialize it after accessing it.
13	Create nested blocks with two let variables having the same name. Observe their values.
14	Write a program that demonstrates the difference between the TDZ and an undefined variable.
15	Create one program demonstrating the TDZ behavior of both let and const.*/


//1. Access a let variable before initialization. Identify the error.

/* console.log(x)
let x=25 */


//2	Access a const variable before initialization. Identify the error.

/* console.log(y)//cannot access before initialization
const y=50 */


//3.Declare a let variable and print it after initialization.

/* console.log(z)//cannot access before initialization
let z=60 */




















































