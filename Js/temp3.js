//  in ts we cant re assign a variable with other type of data as they are type-checked
var arr = 1;
/*
arr=11;
console.log(arr);
arr="kmc";
console.log(arr);
*/
// function declarations -> the return should be mentioned in the function declaration with the below syntax
function show(a) {
    console.log(a);
}
//arrow function declaration   =>  return type
var add = function (a, b) {
    return a + b;
};
console.log(add(3, 4));
// Dealing with optional parameters
function increment(a, b) {
    if (b === undefined) {
        return a + 2;
    }
    else {
        return a + b + 1;
    }
}
console.log(increment(1));
console.log(increment(1, 2)); // add 1+2 and increment the value by 1
console.log(increment(7)); // increases 2
// 2nd way
function decrement(a, b) {
    if (b === void 0) { b = 5; }
    return a + b - 1;
}
console.log(decrement(3));
console.log(decrement(3, 4));
