// as a is defined as a function and b is a variable initially b will have undefined value and a will be assigned the required memory 
/*
// ex1 
a();
b();
*/
// if we log b than we will not get error and the value of b will be undefined
//ex2
// console.log(b);

// function statement ->normally creating a function is known as function statement

function a(){
    console.log("a is called");
}
// function declaration ==> if we assign the function to a variable 
var b=function ex2(){
    console.log("b was called");
}
// difference between the function statement and function declaration is the hoisting of these functions

// function declaration ==> function statement only

// Anonymous function --> functions declared without giving any function name.
// -> Anonymous functions cannot be declared alone i.e. these type of functions are used 
// when we need to assign function as value to the variable example(var b=function ex2()).
/* // will give error try it 
function (){

}
*/

// named function expression ==> same as  function expression but here there is a name given to the function expression
var c= function x() {
    console.log("called c");
}

c(); 
xyz();// will throw error as not defined
// argument vs parameters
/*
// below ex the name itself is sufficient to understand diff between arg and param
function ex4(param1,param2)
{

}
ex4(arg1,arg2);
*/
// First Class Functions/ first class citizens --> the ability of functions to be used as values is know as first class functions
// ie we can pass function as an argument can assign function to a variable and return a function from a function
// This is known as first class functions

// Arrow Function

let c=()=>{
    
}