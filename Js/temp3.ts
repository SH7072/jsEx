//  in ts we cant re assign a variable with other type of data as they are type-checked

let arr = 1;
/*
arr=11;
console.log(arr);
arr="kmc";
console.log(arr);
*/

// function declarations -> the return should be mentioned in the function declaration with the below syntax
function show(a:number):void {
    console.log(a);
}
//arrow function declaration   =>  return type
let add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(3, 4));
// Dealing with optional parameters
function increment(a:number,b?:number):number{

    if(b===undefined)
    {
        return a+2;
    }
    else{
        return a+b+1;
    }

}
console.log(increment(1));
console.log(increment(1,2)); // add 1+2 and increment the value by 1
console.log(increment(7));// increases 2
// 2nd way
function decrement(a:number,b=5):number
{
    return a+b-1;
}
console.log(decrement(3));
console.log(decrement(3,4));
