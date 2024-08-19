var num = 20;
// what is the difference between calling num directly and calling logNUM? and using this and not using this?
// function logNUM() {
  // console.log(num);
// }
// console.log("ej " + num);

// using this
function logThisNUM() {
  var num=11;
  console.log("with out this " + num);
  console.log("with this " + this.num);
  function c() {
   var num=12;
    console.log("with this " + this.num);
  }
  c();
}
logThisNUM();
console.log("ej " + num);
// console.log("with this ej " + this.num);


// write an api for node
let n=1;
console.log(n);

for(let i=0; i<10; i++){
  console.log(i);
}